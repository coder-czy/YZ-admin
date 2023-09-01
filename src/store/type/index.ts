import { SizeType } from "antd/es/config-provider/SizeContext";

export interface globalType {
	token: string;
	themeColor: string;
	userInfo: {
		[key: string]: any;
	};
	componentSize: SizeType;
	language: "zh" | "en";
}
export interface sidebarType {
	isCollapsed: boolean;
}
