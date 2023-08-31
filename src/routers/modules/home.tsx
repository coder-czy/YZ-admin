import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";
import React from "react";

const homeRoute: RouteObject[] = [
	{
		element: lazyLoad(React.lazy(() => import("@/components/layouts"))),
		path: "/home"
	}
];

export default homeRoute;
