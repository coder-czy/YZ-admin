import React from "react";

import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";

const errorRoute: RouteObject[] = [
	{
		path: "/404",
		element: lazyLoad(React.lazy(() => import("@/views/errPage/404")))
	},
	{
		path: "/500",
		element: lazyLoad(React.lazy(() => import("@/views/errPage/500")))
	}
];

export default errorRoute;
