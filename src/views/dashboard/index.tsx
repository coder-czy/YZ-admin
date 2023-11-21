import { useRef } from "react";
import { Col, Row } from "antd";
import { RocketFilled, PropertySafetyFilled, SlackCircleFilled, SmileFilled } from "@ant-design/icons";

import type { ECOption } from "@/utils/echarts";
import "./index.less";
import { useEcharts } from "@/hooks/useEcharts";
import ProductChart from "./components/productChart";
import PieChart from "./components/pieChart";
import TableComp from "./components/tableComp";
import GaugeChart from "./components/gaugeChart";

function Dashboard() {
	const pieChart = useRef<HTMLDivElement>(null);
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
	useEcharts(pieChart, option);

	// 顶部数据
	const topData = [
		{
			key: "1",
			title: "收藏数量",
			num: 178,
			type: "blue",
			render: () => <RocketFilled className={`num-icon flx-center mr-12 blue`} />
		},
		{
			key: "2",
			title: "库存产品",
			num: 20,
			render: () => <PropertySafetyFilled className={`num-icon flx-center mr-12 yellow`} />
		},
		{
			key: "3",
			title: "打折商品",
			num: 190,
			render: () => <SlackCircleFilled className={`num-icon flx-center mr-12 orange`} />
		},
		{
			key: "4",
			title: "喜欢商品",
			num: 12,
			render: () => <SmileFilled className={`num-icon flx-center mr-12 purple`} />
		}
	];

	return (
		<div className="dashboard">
			{/* 仪表盘统计 */}
			<Row gutter={20}>
				{topData.map(item => {
					return (
						<Col className="gutter-row" span={6} key={item.key}>
							<div className="top-num shadow flx-center">
								{item.render()}
								<div className="num-text">
									<span className="num">{item.num}+</span>
									<span className="title mt-2">{item.title}</span>
								</div>
							</div>
						</Col>
					);
				})}
			</Row>

			{/* <div style={{ width: "100%", height: "500px" }} ref={pieChart}></div> */}
			<div className="chart-content flx-center">
				<div className="prod-content shadow">
					<ProductChart />
				</div>
				<div className="pie-content shadow">
					<PieChart />
				</div>
			</div>
			<div className="chart-content flx-center">
				<div className="prod-content shadow p-20">
					<TableComp />
				</div>
				<div className="pie-content shadow">
					<GaugeChart />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
