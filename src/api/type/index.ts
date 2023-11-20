// 请求响应参数
export interface Result {
	code: number;
	message: string;
}

export interface ResultData<T = any> extends Result {
	data: T;
}
