import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";

import Router from "@/routers";
import { RootState, useSelector } from "@/store";

function App() {
	const { themeColor, componentSize } = useSelector((state: RootState) => state.global);

	return (
		<HashRouter>
			{/* 组件库配置 */}
			<ConfigProvider
				componentSize={componentSize}
				theme={{
					token: {
						colorPrimary: themeColor
					}
				}}
			>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
