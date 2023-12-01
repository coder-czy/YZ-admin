import { SizeType } from "antd/es/config-provider/SizeContext";

export interface globalType {
	token: string;
	themeColor: string;
	userInfo: {
		[key: string]: any;
	};
	componentSize: SizeType;
	language: "zh-cn" | "en";
	themeMode: "" | "gray" | "week";
	isDark: boolean;
}
export interface sidebarType {
	isCollapsed: boolean;
}
