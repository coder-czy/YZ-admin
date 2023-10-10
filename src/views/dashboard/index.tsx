import { useEffect, useRef } from "react";
import { Card } from "antd";

import echarts from "@/utils/echarts";
import type { ECOption } from "@/utils/echarts";
import "./index.less";
function Dashboard() {
	let pieChart = useRef<HTMLDivElement>(null);

	let option: ECOption = {
		tooltip: {
			trigger: "item"
		},
		legend: {
			top: "5%",
			left: "center"
		},
		series: [
			{
				name: "Access From",
				type: "pie",
				radius: ["40%", "70%"],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: "#fff",
					borderWidth: 2
				},
				label: {
					show: false,
					position: "center"
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: "bold"
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: "Search Engine" },
					{ value: 735, name: "Direct" },
					{ value: 580, name: "Email" },
					{ value: 484, name: "Union Ads" },
					{ value: 300, name: "Video Ads" }
				]
			}
		]
	};
	useEffect(() => {
		let myChart = echarts.init(pieChart.current);
		option && myChart.setOption(option);
	}, []);

	return (
		<Card bordered={false}>
			<div style={{ width: "100%", height: "500px" }} ref={pieChart}></div>
		</Card>
	);
}

export default Dashboard;
