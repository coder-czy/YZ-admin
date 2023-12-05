import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";
import { message } from "antd";
import NProgress from "@/utils/nprogress";

import { ResultData } from "@/api/type";
import { ResultEnum } from "@/enums/httpEnum";
import { checkStatus } from "./utils/checkStatus";
import { store } from "@/store";
import { setToken } from "@/store/module/global";
import { AxiosCanceler } from "@/api/utils/axiosCancel";

const axiosCancel = new AxiosCanceler();
const timeout = Number(import.meta.env.VITE_TIMEOUT) || 10000;

const config = {
	//请求超时时间
	timeout,
	// 默认地址请求地址，
	baseURL: import.meta.env.VITE_API_URL,
	// 跨域时候允许携带凭证
	withCredentials: true
};

class RequestHttp {
	service: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		this.service = axios.create(config);
		this.init();
	}
	// 初始化
	private init() {
		this.reqInterception();
		this.resInterception();
	}

	/**
	 * @description 全局请求拦截器: token校验(JWT)
	 */
	private reqInterception() {
		const { token } = store.getState().global;
		this.service.interceptors.request.use(
			config => {
				// 请求加入队列
				axiosCancel.addPending(config);
				NProgress.start();
				if (config.headers && typeof config.headers.set === "function") {
					config.headers.set("Authorization", `Bearer ${token}`);
				}
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);
	}

	/**
	 * @description 全局响应拦截器：统一处理数据结构、处理一些成功回调，例如请求进度条
	 */
	private resInterception() {
		this.service.interceptors.response.use(
			response => {
				NProgress.done();
				const { data, config } = response;
				// 请求完成移除队列
				axiosCancel.removePending(config);
				// 登录失效
				if (data.code === ResultEnum.OVERDUE) {
					store.dispatch(setToken(""));
					window.location.hash = "/login";
					message.success(data.message);
					return Promise.reject(data);
				}

				// 全局错误信息拦截
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.message);
					return Promise.reject(data);
				}
				// 请求成功
				return response;
			},
			async (error: AxiosError) => {
				NProgress.done();
				// 网络超时
				if (error.message && error.message.indexOf("timeout") !== -1) message.error("请求超时，请稍后再试");
				// 网络错误
				if (error.message && error.message.indexOf("Network Error") !== -1) message.error("网络错误，请稍后再试");
				const { response } = error;
				// 根据服务器响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// 服务器错误或者断网
				if (!window.navigator.onLine) window.location.hash = "/500";
				return Promise.reject(error);
			}
		);
	}

	/**
	 * @description 常用请求方法封装
	 */
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
	download(url: string, params?: object, _object = {}): Promise<BlobPart> {
		return this.service.post(url, params, { ..._object, responseType: "blob" });
	}
}

export default new RequestHttp(config).service;
