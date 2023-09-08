import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { globalType } from "../type";

const initialState: globalType = {
	token: "",
	userInfo: {}, //用户信息
	themeColor: "#a855f7", //主题
	componentSize: "middle", //组件尺寸
	language: "zh-cn" //国际化
};

const globalSlice = createSlice({
	name: "global",
	initialState: initialState,
	reducers: {
		setToken(state: globalType, { payload }: PayloadAction<string>) {
			state.token = payload;
		},
		setTheme(state: globalType, { payload }: PayloadAction<string>) {
			state.themeColor = payload;
		},
		setComponentSize(state: globalType, { payload }: PayloadAction<SizeType>) {
			state.componentSize = payload;
		},
		setLanguage(state: globalType, { payload }: PayloadAction<"zh-cn" | "en">) {
			state.language = payload;
		}
	}
});

export const { setToken, setTheme, setComponentSize, setLanguage } = globalSlice.actions;
export default globalSlice.reducer;
