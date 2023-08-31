import { Outlet } from "react-router-dom";

import { Layout } from "antd";

import "./index.less";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const { Content } = Layout;

const Layouts: React.FC = () => {
	return (
		<Layout className="layout">
			{/* 侧边栏 */}
			<Sidebar />
			<Layout>
				{/* 头部 */}
				<Header />
				<Content>
					{/* 子路由展示区域 */}
					<Outlet />
				</Content>
			</Layout>
			{/* 主题弹窗 */}
		</Layout>
	);
};

export default Layouts;
