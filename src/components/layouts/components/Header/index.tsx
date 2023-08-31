import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Tooltip, Dropdown, Avatar, theme } from "antd";
import type { MenuProps } from "antd";
import { MenuUnfoldOutlined, SkinOutlined, MenuFoldOutlined, UserOutlined, FontSizeOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "@/store";
import { updateCollapsed } from "@/store/module/sidebar";
import { setComponentSize } from "@/store/module/global";
import ThemeComp from "../Theme";
import FullScreen from "../FullScreen";

const { Header } = Layout;

function Head() {
	const dispatch = useDispatch();
	const { token } = theme.useToken();
	const navigate = useNavigate();
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>首页</span>
		},
		{
			key: "2",
			label: <span>个人信息</span>
		},
		{
			key: "3",
			label: <span>修改密码</span>
		},
		{
			type: "divider"
		},
		{
			key: "4",
			label: <span>退出登录</span>,
			onClick: () => {
				navigate("/login", { replace: true });
			}
		}
	];
	// 组件大小切换
	const compItems: MenuProps["items"] = [
		{
			key: "small",
			label: <span>small</span>,
			onClick: () => {
				dispatch(setComponentSize("small"));
			}
		},
		{
			key: "middle",
			label: <span>middle</span>,
			onClick: () => {
				dispatch(setComponentSize("middle"));
			}
		},
		{
			key: "large",
			label: <span>large</span>,
			onClick: () => {
				dispatch(setComponentSize("large"));
			}
		}
	];

	// 主题弹窗
	const [open, setOpen] = useState(false);
	const close = () => {
		setOpen(false);
	};

	// 侧边栏收缩

	const { isCollapsed } = useSelector(state => state.sidebar);
	const collapsedFn = () => {
		dispatch(updateCollapsed(!isCollapsed));
	};

	return (
		<Header className="header flx-justify-between">
			<Button
				type="text"
				icon={isCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				onClick={collapsedFn}
				style={{
					fontSize: "16px",
					width: 64,
					height: 64
				}}
			/>
			<div className="func-box flx-center">
				{/* <Tooltip placement="bottom" title="全屏"> */}
				<FullScreen />
				{/* </Tooltip> */}
				{/* 组件大小 */}
				<Dropdown transitionName="" menu={{ items: compItems }} trigger={["hover"]} placement="bottom" arrow>
					{/* <Tooltip placement="left" title="组件大小配置"> */}
					<FontSizeOutlined className="icon" />
					{/* </Tooltip> */}
				</Dropdown>
				{/* 主题配置 */}
				<Tooltip placement="bottom" title="主题配置">
					<SkinOutlined
						className="icon"
						onClick={() => {
							setOpen(true);
						}}
					/>
				</Tooltip>
				{/* 个人信息 */}
				<p className="username baseColor ellipsis">Yangzi</p>
				<Dropdown menu={{ items }} trigger={["hover"]} placement="bottom" arrow>
					<Avatar className="icon" style={{ backgroundColor: token.colorPrimary }} icon={<UserOutlined />} />
				</Dropdown>
			</div>
			<ThemeComp open={open} close={close}></ThemeComp>
		</Header>
	);
}

export default Head;