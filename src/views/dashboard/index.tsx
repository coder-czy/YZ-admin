import { useRef } from "react";
import { Col, Row } from "antd";
import { RocketFilled, PropertySafetyFilled, SlackCircleFilled, SmileFilled } from "@ant-design/icons";

// import echarts from "@/utils/echarts";
import type { ECOption } from "@/utils/echarts";
// import { useEchartsResize } from "@/hooks/useEchart";
import "./index.less";
import { useEcharts } from "@/hooks/useEchart";
// import { ECharts } from "echarts";
function Dashboard() {
	const pieChart = useRef<HTMLDivElement>(null);
	// let myChartRef = useRef<ECharts | null>(null);
	// let myChart = useEchartsResize(myChartRef);

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
	// useEffect(() => {
	// 	if (myChart && !myChart.current) {
	// 		myChart.current = echarts.init(pieChart.current) as any;
	// 		option && myChart.current?.setOption(option);
	// 	}
	// }, []);

	return (
		<div>
			{/* 仪表盘统计 */}
			<Row gutter={20}>
				<Col className="gutter-row" span={6}>
					<div className="top-num shadow flx-center">
						<RocketFilled className="num-icon flx-center mr-12 blue" />
						<div className="num-text">
							<span className="num">178+</span>
							<span className="title">收藏数量</span>
						</div>
					</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div className="top-num shadow flx-center">
						<PropertySafetyFilled className="num-icon flx-center mr-12 yellow" />
						<div className="num-text">
							<span className="num">20+</span>
							<span className="title">库存产品</span>
						</div>
					</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div className="top-num shadow flx-center">
						<SlackCircleFilled className="num-icon flx-center mr-12 orange" />
						<div className="num-text">
							<span className="num">190+</span>
							<span className="title">打折商品</span>
						</div>
					</div>
				</Col>
				<Col className="gutter-row" span={6}>
					<div className="top-num shadow flx-center">
						<SmileFilled className="num-icon flx-center mr-12 purple" />
						<div className="num-text">
							<span className="num">12+</span>
							<span className="title">喜欢商品</span>
						</div>
					</div>
				</Col>
			</Row>
			<div style={{ width: "100%", height: "500px" }} ref={pieChart}></div>
		</div>
	);
}

export default Dashboard;
