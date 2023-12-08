import { RefObject, useEffect, useRef } from "react";
import { ECharts } from "echarts";

import { ECOption } from "@/utils/echarts";
import Echarts from "@/utils/echarts";
import { debounce } from "@/utils/common";
import { useSelector } from "@/store";

/**
 * @description 创建和初始化Echarts
 * @param echartsRef 渲染容器
 * @param option Echarts配置
 * @return Echarts对象
 */

export const useEcharts = (echartsRef: RefObject<HTMLDivElement>, option: ECOption) => {
	const myChart = useRef<ECharts | null>(null);
	const { isDark } = useSelector(state => state.global);
	let mode = isDark ? "dark" : "light";
	// 切换暗黑模式重新渲染
	useEffect(() => {
		if (myChart.current) {
			myChart.current.dispose();
			myChart.current = Echarts.init(echartsRef.current, mode) as any;
			option && myChart.current?.setOption(option);
		}
	}, [isDark]);

	useEffect(() => {
		if (echartsRef.current && myChart && !myChart.current) {
			// 初始化
			myChart.current = Echarts.init(echartsRef.current, mode) as any;
			option && myChart.current?.setOption(option);
		}
		if (myChart.current) {
			// 防抖
			let resizeFn = debounce(() => {
				myChart.current?.resize();
			}, 100);
			// 监听容器变化实现自适应
			const resizeObserver = new ResizeObserver(resizeFn);
			resizeObserver.observe(myChart.current?.getDom().parentElement as Element);
			return () => {
				resizeObserver.unobserve(myChart.current?.getDom().parentElement as Element);
			};
		}
		return () => {
			if (myChart.current) {
				myChart.current.clear();
				// 容器被销毁之后，销毁实例，避免内存泄漏
				myChart.current.dispose();
				myChart.current = null;
			}
		};
	}, [option]);
	return myChart;
};
