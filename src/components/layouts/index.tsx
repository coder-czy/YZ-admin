import { Outlet } from "react-router-dom";

import { Layout } from "antd";

import "./index.less";
import Sidebar from "@/components/layouts/components/layoutSidebar";
import Header from "@/components/layouts/components/layoutHeader";
import Footer from "@/components/layouts/components/layoutFooter";

const { Content } = Layout;

const Layouts: React.FC = () => {
	return (
		<Layout className="layout">
			{/* 侧边栏 */}
			<Sidebar />
			<Layout>
				{/* 头部 */}
				<Header />
				<Content className="content-stage">
					{/* 子路由展示区域 */}
					{/* <div className="child-stage"> */}
					<Outlet />
					{/* </div> */}
				</Content>
				<Footer></Footer>
			</Layout>
			{/* 主题弹窗 */}
		</Layout>
	);
};

export default Layouts;
