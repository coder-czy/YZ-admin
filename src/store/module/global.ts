import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { globalType } from "../type";

const initialState: globalType = {
	token: "",
	userInfo: {},
	themeColor: "#a855f7",
	componentSize: "middle"
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
		}
	}
});

export const { setToken, setTheme, setComponentSize } = globalSlice.actions;
export default globalSlice.reducer;
