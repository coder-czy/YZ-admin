import { Alert, Card, Descriptions, Row, Col, DescriptionsProps, message } from "antd";
import { CopyOutlined } from "@ant-design/icons";
import Clipboard from "clipboard";

import SvgIcon from "@/components/svgIcon";
import "./index.less";

// 拿到svg目录下的所有svg文件名
const files = import.meta.glob("/src/assets/svg/*.svg", { eager: true });
const svgIcons: string[] = [];
for (const key in files) {
	let fileName: RegExpMatchArray = key.match(/\/([^/]+)\.svg$/) as RegExpMatchArray;
	svgIcons.push(fileName[1]);
}

const descItems: DescriptionsProps["items"] = [
	{
		key: "1",
		label: "name",
		children: "图标的名称，svg 图标必须存储在 src/assets/icons 目录下"
	},
	{
		key: "2",
		label: "prefix",
		children: "图标的前缀，默认为 'icon'		"
	},
	{
		key: "3",
		label: "iconStyle",
		children: `图标的样式，默认样式为 { width: "100px", height: "100px" }		`
	}
];

const copy = new Clipboard(".copy-btn");

function Icon() {
	const [messageApi, contextHolder] = message.useMessage();
	copy.on("success", () => {
		// message.success("复制成功！");
		messageApi.success("复制成功！");
	});
	copy.on("error", () => {
		// message.error("复制失败！");
		messageApi.error("复制失败！");
	});
	return (
		<>
			{contextHolder}
			<Card>
				<Alert
					message="SVG 图标目前使用 vite-plugin-svg-icons 插件完成，官方文档请查看 ：https://github.com/vbenjs/vite-plugin-svg-icons
"
					type="info"
					banner
				/>
				<Descriptions className="mt-16" title={<h1>配置项 📃</h1>} items={descItems} bordered layout="horizontal" column={1} />
				<Row gutter={[0, 24]} className="icon-stage mt-20">
					{svgIcons.map(icon => (
						<Col span={4} key={icon} className="copy-btn" data-clipboard-text={`<SvgIcon name="${icon}"/>`}>
							<div className="icon-box">
								<CopyOutlined className="copy-icon" />
								<SvgIcon name={icon} iconStyle={{ width: "100%", height: "100%" }} />
								<p className="icon-name">{icon}</p>
							</div>
						</Col>
					))}
				</Row>
			</Card>
		</>
	);
}

export default Icon;
