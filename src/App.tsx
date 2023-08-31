import { HashRouter } from "react-router-dom";
// import { useState } from "react";
import { ConfigProvider } from "antd";
import Router from "@/routers";
// import { SizeType } from "antd/es/config-provider/SizeContext";

import { RootState, useSelector } from "@/store";

function App() {
	const { themeColor } = useSelector((state: RootState) => state.global);
	// const [componentSize, setComponentSize] = useState<SizeType>("middle");

	return (
		<HashRouter>
			<ConfigProvider
				componentSize="middle"
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
