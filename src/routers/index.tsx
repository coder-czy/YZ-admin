//@ts-nocheck
import { useRoutes } from "react-router-dom";
import React from "react";

import { RouteObject } from "@/routers/type";
import lazyLoad from "@/components/lazyLoad";
import Login from "@/views/login";

// 导入其他模块路由
const moduleRoute = import.meta.glob("./modules/*", {
	eager: true
});
export const routeArray: RouteObject[] = [];
Object.keys(moduleRoute).forEach(item => {
	Object.keys(moduleRoute[item]).forEach((key: any) => {
		// console.log(moduleRoute[item][key])

		routeArray.push(...moduleRoute[item][key]);
	});
});

export const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Login />,
		id: "login",
		meta: {
			title: "登录页",
			key: "login",
			requireAuth: false
		}
	},
	{
		path: "/login",
		element: <Login />,
		id: "login",
		meta: {
			title: "登录页",
			key: "login",
			requireAuth: false
		}
	},
	...routeArray,
	{
		path: "*",
		element: lazyLoad(React.lazy(() => import("@/views/errPage/404"))),
		id: "404"
	}
];

const Router = () => {
	//@ts-ignore
	return useRoutes(rootRouter);
};
export default Router;
