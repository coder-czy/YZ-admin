import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxPromise from "redux-promise";
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import reduxThunk from "redux-thunk";
import global from "./module/global";

// 整合reducer
const reducer = combineReducers({
	global
});

const persistConfig = {
	key: "redux-state",
	storage
};

// persist reducer
const persistReducerConfig = persistReducer(persistConfig, reducer);
const middlewares = [reduxThunk, reduxPromise];

// 创建store
export const store = configureStore({
	reducer: persistReducerConfig,
	// 中间件
	middleware: middlewares,
	devTools: true
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
