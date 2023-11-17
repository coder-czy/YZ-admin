import React from "react";

import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";
import Layouts from "@/components/layouts";

const homeRoute: RouteObject[] = [
	{
		element: <Layouts />,
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
