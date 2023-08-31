import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

import logo from "@/assets/logo.svg";
import { useSelector } from "@/store";

const { Sider } = Layout;

function Sidebar() {
	const { isCollapsed } = useSelector(state => state.sidebar);

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
				defaultSelectedKeys={["1"]}
				items={[
					{
						key: "1",
						icon: <UserOutlined />,
						label: "nav 1"
					},
					{
						key: "2",
						icon: <VideoCameraOutlined />,
						label: "nav 2"
					},
					{
						key: "3",
						icon: <UploadOutlined />,
						label: "nav 3"
					}
				]}
			/>
		</Sider>
	);
}

export default Sidebar;
