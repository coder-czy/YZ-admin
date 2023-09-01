import React from "react";

import lazyLoad from "@/components/lazyLoad";
import { RouteObject } from "../type";

const homeRoute: RouteObject[] = [
	{
		element: lazyLoad(React.lazy(() => import("@/components/layouts"))),
		path: "/home"
	}
];

export default homeRoute;
