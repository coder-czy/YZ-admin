import React from "react";

import { RouteObject } from "../type";
import lazyLoad from "@/components/lazyLoad";
import Layouts from "@/components/layouts";

const staticRoute: RouteObject[] = [
	{
		path: "/icon",
		element: <Layouts />,
		children: [
			{
				path: "/icon/index",
				element: lazyLoad(React.lazy(() => import("@/views/svgIcon")))
			}
		]
	},
	{
		path: "/theme",
		element: <Layouts />,
		children: [
			{
				path: "/theme/index",
				element: lazyLoad(React.lazy(() => import("@/views/theme")))
			}
		]
	}
];

export default staticRoute;
