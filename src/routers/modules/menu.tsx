import React from "react";

import { RouteObject } from "@routers/type";
import lazyLoad from "@/components/lazyLoad";
import Layouts from "@/components/layouts";

const menuRoute: RouteObject[] = [
	{
		path: "/menu",
		element: <Layouts />,
		children: [
			{
				path: "/menu/menu1-1/index",
				element: lazyLoad(React.lazy(() => import("@/views/menu/menu11")))
			},
			{
				path: "/menu/menu1-2/index",
				element: lazyLoad(React.lazy(() => import("@/views/menu/menu12")))
			},
			{
				path: "/menu/menu2-1/index",
				element: lazyLoad(React.lazy(() => import("@/views/menu/menu21")))
			},
			{
				path: "/menu/menu2-2/index",
				element: lazyLoad(React.lazy(() => import("@/views/menu/menu22")))
			}
		]
	}
];

export default menuRoute;
