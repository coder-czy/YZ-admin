import { Layout, Menu } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

import logo from "@/assets/logo.svg";
import { useSelector } from "@/store";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

function Sidebar() {
	// 侧边栏收缩
	const { isCollapsed } = useSelector(state => state.sidebar);

	// 点击菜单跳转页面
	const navigate = useNavigate();
	const menuHandle = ({ key }: { key: string }) => {
		navigate(key);
	};

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
				defaultSelectedKeys={["/dashboard/index"]}
				items={[
					{
						key: "/dashboard",
						icon: <UserOutlined />,
						label: "首页",
						children: [
							{
								key: "/dashboard/index",
								icon: <VideoCameraOutlined />,
								label: "500"
							}
						]
					},
					{
						key: "/err",
						icon: <VideoCameraOutlined />,
						label: "错误页",
						children: [
							{
								key: "/500",
								icon: <VideoCameraOutlined />,
								label: "500"
							},
							{
								key: "/400",
								icon: <VideoCameraOutlined />,
								label: "400"
							}
						]
					}
				]}
			/>
		</Sider>
	);
}

export default Sidebar;
