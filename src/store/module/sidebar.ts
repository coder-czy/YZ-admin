import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { sidebarType } from "@store/type";

const initialState: sidebarType = {
	isCollapsed: true
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		updateCollapsed: (state, { payload }: PayloadAction<boolean>) => {
			state.isCollapsed = payload;
		}
	}
});

export const { updateCollapsed } = sidebarSlice.actions;

export default sidebarSlice.reducer;
