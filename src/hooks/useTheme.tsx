import { useSelector } from "@/store";

/**
 *
 * @description 主题管理
 */

export const useTheme = () => {
	const dom = document.documentElement;
	const { grayMode } = useSelector(state => state.global);

	const themeHandle = () => {
		if (!grayMode) dom.setAttribute("style", "");
		// if (grayMode) dom.setAttribute("style", "filter: invert(80%)");
		if (grayMode) dom.setAttribute("style", "filter: grayscale(1)");
	};
	themeHandle();

	return {
		themeHandle
	};
};
