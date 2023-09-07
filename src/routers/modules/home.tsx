import React from "react";

import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";

const homeRoute: RouteObject[] = [
	{
		element: lazyLoad(React.lazy(() => import("@/components/layouts"))),
		path: "/dashboard",
		children: [
			{
				element: lazyLoad(React.lazy(() => import("@/views/dashboard"))),
				path: "/dashboard/index"
			}
		]
	}
];

export default homeRoute;
