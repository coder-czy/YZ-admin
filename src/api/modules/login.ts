import http from "@/api";
import { LoginSpace } from "@/api/type";

/**
 * @description 登录接口
 *
 */
export const login = (data: LoginSpace.reqLogin) => {
	return http.post("/user/login", data);
};
