import { Layout, Menu } from "antd";
import { DashboardOutlined, BugOutlined, GlobalOutlined, SketchOutlined, ApiOutlined, SkinOutlined } from "@ant-design/icons";

import logo from "@/assets/logo.svg";
import { useSelector } from "@/store";
import { useNavigate, useLocation } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
	// 侧边栏收缩
	const { isCollapsed } = useSelector(state => state.sidebar);

	// 点击菜单跳转页面
	const navigate = useNavigate();
	const menuHandle = ({ key }: { key: string }) => {
		navigate(key);
	};

	// 设置菜单选中
	const { pathname } = useLocation();

	return (
		<Sider trigger={null} collapsible collapsed={isCollapsed}>
			<div className="demo-logo-vertical" />
			{/* logo */}
			<div className="logo">
				<img src={logo} alt="logo" />
				{isCollapsed ? null : <h2>YZ ADMIN</h2>}
			</div>

			{/* 菜单 */}
			<Menu
				theme="dark"
				mode="inline"
				onClick={menuHandle}
				defaultSelectedKeys={[pathname]}
				items={[
					{
						key: "/dashboard/index",
						icon: <DashboardOutlined />,
						label: "仪表盘"
					},
					{
						key: "/err",
						icon: <BugOutlined />,
						label: "错误页",
						children: [
							{
								key: "/404",
								icon: <GlobalOutlined />,
								label: "404"
							},
							{
								key: "/500",
								icon: <ApiOutlined />,
								label: "500"
							}
						]
					},
					{
						key: "/icon/index",
						icon: <SketchOutlined />,
						label: "svg图标"
					},
					{
						key: "/theme/index",
						icon: <SkinOutlined />,
						label: "主题"
					}
				]}
			/>
		</Sider>
	);
}

export default Sidebar;
