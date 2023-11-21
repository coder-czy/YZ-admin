import React from "react";
import ReactDOM from "react-dom/client";
import "virtual:svg-icons-register";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// 控制台报错 -- 被动事件监听器
import "default-passive-events";

import { store, persistor } from "@/store";
import App from "./App.tsx";
import "@/style/reset.less";
import "@/style/common.less";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
