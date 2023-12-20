import { Layout, Menu } from "antd";
import {
	DashboardOutlined,
	BugOutlined,
	GlobalOutlined,
	SketchOutlined,
	ApiOutlined,
	SkinOutlined,
	AlignLeftOutlined,
	OrderedListOutlined
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

import logo from "@/assets/logo.svg";
import { useSelector } from "@/store";
import "./index.less";

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
			{/* logo */}
			<div className="logo">
				<img src={logo} alt="logo" />
				<h2 style={{ display: isCollapsed ? "none" : "block" }}>YZ ADMIN</h2>
			</div>

			{/* 菜单 */}
			<Menu
				theme="light"
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
						key: "/menu",
						icon: <AlignLeftOutlined />,
						label: "菜单",
						children: [
							{
								key: "/menu1/index",
								icon: <OrderedListOutlined />,
								label: "menu1",
								children: [
									{
										key: "/menu/menu1-1/index",
										icon: <OrderedListOutlined />,
										label: "menu1-1"
									},
									{
										key: "/menu/menu1-2/index",
										icon: <OrderedListOutlined />,
										label: "menu1-2"
									}
								]
							},
							{
								key: "/menu2/index",
								icon: <OrderedListOutlined />,
								label: "menu2",
								children: [
									{
										key: "/menu/menu2-1/index",
										icon: <OrderedListOutlined />,
										label: "menu2-1"
									},
									{
										key: "/menu/menu2-2/index",
										icon: <OrderedListOutlined />,
										label: "menu2-2"
									}
								]
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
