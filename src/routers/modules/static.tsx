import React from "react";

import { RouteObject } from "../type";
import lazyLoad from "@/components/lazyLoad";

const staticRoute: RouteObject[] = [
	{
		path: "/icon",
		element: lazyLoad(React.lazy(() => import("@/components/layouts"))),
		children: [
			{
				path: "/icon/index",
				element: lazyLoad(React.lazy(() => import("@/views/svgIcon")))
			}
		]
	},
	{
		path: "/theme",
		element: lazyLoad(React.lazy(() => import("@/components/layouts"))),
		children: [
			{
				path: "/theme/index",
				element: lazyLoad(React.lazy(() => import("@/views/theme")))
			}
		]
	}
];

export default staticRoute;
