import { HashRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import type { Locale } from "antd/es/locale";
import { useState, useEffect } from "react";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
// import "dayjs/locale/zh-cn";

import Router from "@/routers";
import { RootState, useSelector } from "@/store";
import { useTheme } from "@/hooks/useTheme";

function App() {
	const { themeColor, componentSize, language, isDark } = useSelector((state: RootState) => state.global);
	//主题管理
	useTheme();
	// 国际化
	const [locale, setLocal] = useState<Locale>(zhCN);
	useEffect(() => {
		switch (language) {
			case "zh-cn":
				setLocal(zhCN);
				break;

			case "en":
				setLocal(enUS);
				break;

			default:
				setLocal(zhCN);
				break;
		}
	}, [language]);

	return (
		<HashRouter>
			{/* 组件库配置 */}
			<ConfigProvider
				locale={locale}
				componentSize={componentSize}
				theme={{
					token: {
						colorPrimary: themeColor
					},
					algorithm: isDark ? theme.darkAlgorithm : undefined
				}}
			>
				<Router />
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
