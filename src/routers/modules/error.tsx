import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";
import React from "react";

const errorRoute: RouteObject[] = [
	{
		path: "/400",
		element: lazyLoad(React.lazy(() => import("@/views/errPage/400")))
	},
	{
		path: "/500",
		element: lazyLoad(React.lazy(() => import("@/views/errPage/500")))
	}
];

export default errorRoute;
