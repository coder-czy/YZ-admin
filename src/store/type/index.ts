import { SizeType } from "antd/es/config-provider/SizeContext";

export interface globalType {
	token: string;
	themeColor: string;
	userInfo: {
		[key: string]: any;
	};
	componentSize: SizeType;
}
export interface sidebarType {
	isCollapsed: boolean;
}
