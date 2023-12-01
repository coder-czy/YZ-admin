import { useSelector } from "@/store";

/**
 *
 * @description 主题管理
 */

export const useTheme = () => {
	const dom = document.documentElement;
	const { themeMode, isDark } = useSelector(state => state.global);

	const themeHandle = () => {
		// 暗黑模式
		if (isDark) dom.setAttribute("class", "dark");
		else dom.removeAttribute("class");
		// 灰色模式、色弱模式
		if (!themeMode) dom.setAttribute("style", "");
		if (themeMode === "week") dom.setAttribute("style", "filter: invert(80%)");
		if (themeMode === "gray") dom.setAttribute("style", "filter: grayscale(1)");
	};
	themeHandle();

	return {
		themeHandle
	};
};
