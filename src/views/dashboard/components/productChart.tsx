// @ts-nocheck
import { useEcharts } from "@/hooks/useEcharts";
import { ECOption } from "@/utils/echarts";
import { useRef } from "react";
import * as echarts from "echarts";

function ProductChart() {
	const chartRef = useRef<HTMLDivElement>(null);
	// mock
	let mockData = [
		{ time: "1-23", num: 30 },
		{ time: "1-24", num: 31 },
		{ time: "1-25", num: 32 },
		{ time: "1-26", num: 32 },
		{ time: "1-27", num: 36 },
		{ time: "1-28", num: 29 },
		{ time: "1-29", num: 24 },
		{ time: "1-30", num: 36 },
		{ time: "1-31", num: 22 }
	];
	let xData = mockData.map(item => item.time);
	let yData = mockData.map(item => item.num);
	const option: ECOption = {
		backgroundColor: "transparent",
		title: {
			text: "商品销售",
			top: "5%",
			left: "5%",
			textStyle: {
				// color: "#323233",
				fontSize: 18,
				fontWeight: "normal"
			}
		},
		tooltip: {
			trigger: "axis",
			axisPointer: {
				type: "cross",
				label: {
					backgroundColor: "#6a7985",
					fontSize: 12
				}
			},
			textStyle: { fontSize: "100%" },
			formatter: v => {
				return `
        <div class='u-p-2'>
        <div class='fz-10'>日期：${v[0].axisValue}</div>
        <div class='fz-10 u-mt-2'>商品数量：${v[0].value}</div>
        </div>
          `;
			}
		},
		xAxis: {
			type: "category",
			boundaryGap: false, // 两边留白
			// axisLabel: { textStyle: { color: '#fff', fontSize:14}},
			data: xData,
			axisTick: { show: false }
			// splitLine: { show: false }
		},
		yAxis: {
			// name: "商品数量",
			type: "value",
			scale: true,
			// nameTextStyle: { color: "rgba(255,255,255,.5)", align: "right", padding: [0, 10, 0, 0], fontSize: "100%" },
			// axisLabel: { textStyle: { color: '#fff', fontSize: '100%' }, margin: 8 },
			// axisLine: { lineStyle: { color: "#000", width: 1 } },
			splitLine: { show: true }
		},

		series: {
			name: "",
			type: "line",
			stack: "",
			smooth: true,
			// 修改的是线下区域的颜色
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					{
						offset: 0,
						color: "rgba(236, 99, 123, .5)"
					},
					{
						offset: 1,
						color: "rgba(102, 212, 250,.0)"
					}
				])
			},
			// 修改的是线的颜色
			lineStyle: {
				color: {
					type: "linear",
					x: 0,
					y: 1,
					x2: 0,
					y2: 0,
					// 0% 处的颜色                           // 100% 处的颜色
					colorStops: [
						{ offset: 0, color: "#80bdfe" },
						{ offset: 0.25, color: "#76b0fe" },
						{ offset: 0.75, color: "#605bff" },
						{ offset: 1, color: "#f36ef0" }
					],
					global: false // 缺省为 false
				},
				width: 2
			},
			//图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
			symbol: "none",
			data: yData
			// markLine: {
			// 	symbol: "none",
			// 	data: [
			// 		{
			// 			name: "人数最高峰",
			// 			xAxis: "2-17",
			// 			lineStyle: {
			// 				color: "#eb6272",
			// 				type: "dashed",
			// 				width: 0
			// 			},
			// 			label: {
			// 				show: true,
			// 				formatter: "2.17日\n人数最高峰\n{a|}",
			// 				align: "center",
			// 				distance: [0, -60],
			// 				fontSize: 14,
			// 				rich: {
			// 					// a:{ backgroundColor: { image: bg1 }, width: 20, height: 20 }
			// 				}
			// 			}
			// 		},
			// 		{
			// 			name: "确诊人数归零",
			// 			xAxis: "3-05",
			// 			// symbol: 'image://' + bg2,
			// 			symbol: "circle",
			// 			symbolSize: 10,
			// 			lineStyle: {
			// 				color: "#66cfef",
			// 				type: "dashed",
			// 				width: 1
			// 			},
			// 			label: {
			// 				show: true,
			// 				formatter: "3.5日\n人数归零",
			// 				fontSize: 14,
			// 				align: "center"
			// 			}
			// 		}
			// 	]
			// }
		}
	};
	useEcharts(chartRef, option);

	return <div style={{ width: "100%", height: "100%" }} ref={chartRef}></div>;
}

export default ProductChart;
