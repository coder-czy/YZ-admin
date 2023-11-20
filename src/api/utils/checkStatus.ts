import { message } from "antd";

const [messageApi] = message.useMessage();
const showMsg = (content: string) => {
	messageApi.open({
		type: "error",
		content
	});
};

/**
 * @description: 校验网络请求状态码
 * @param {Number} status
 * @return void
 */
export const checkStatus = (status: number) => {
	switch (status) {
		case 400:
			showMsg("请求失败！请您稍后重试");
			break;
		case 401:
			showMsg("登录失效！请您重新登录");
			break;
		case 403:
			showMsg("当前账号无权限访问！");
			break;
		case 404:
			showMsg("你所访问的资源不存在！");
			break;
		case 405:
			showMsg("请求方式错误！请您稍后重试");
			break;
		case 408:
			showMsg("请求超时！请您稍后重试");
			break;
		case 500:
			showMsg("服务异常！");
			break;
		case 502:
			showMsg("网关错误！");
			break;
		case 503:
			showMsg("服务不可用！");
			break;
		case 504:
			showMsg("网关超时！");
			break;
		default:
			showMsg("请求失败！");
	}
};
