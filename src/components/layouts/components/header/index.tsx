import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Button, Tooltip, Dropdown, Avatar, theme, Modal } from "antd";
import type { MenuProps } from "antd";
import {
	MenuUnfoldOutlined,
	SkinOutlined,
	MenuFoldOutlined,
	UserOutlined,
	FontSizeOutlined,
	HomeOutlined,
	KeyOutlined,
	LogoutOutlined
} from "@ant-design/icons";
import { SizeType } from "antd/es/config-provider/SizeContext";

import { useDispatch, useSelector } from "@/store";
import { updateCollapsed } from "@/store/module/sidebar";
import { setComponentSize, setLanguage } from "@/store/module/global";
import ThemeComp from "../theme/index";
import FullScreen from "../fullScreen/index";
import SvgIcon from "@/components/svgIcon";

const { Header } = Layout;

function Head() {
	const dispatch = useDispatch();
	const { token } = theme.useToken();
	const navigate = useNavigate();
	const { componentSize, language } = useSelector(state => state.global);
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: (
				<span>
					<HomeOutlined className="mr-4" />
					首页
				</span>
			)
		},
		{
			key: "2",
			label: (
				<span>
					<UserOutlined className="mr-4" />
					个人信息
				</span>
			)
		},
		{
			key: "3",
			label: (
				<span>
					<KeyOutlined className="mr-4" />
					修改密码
				</span>
			)
		},
		{
			type: "divider"
		},
		{
			key: "4",
			label: (
				<span>
					<LogoutOutlined className="mr-4" />
					退出登录
				</span>
			),
			onClick: () => {
				setIsModalOpen(true);
			}
		}
	];
	// 组件大小切换
	const sizeItem = ["small", "middle", "large"];
	const compItems: MenuProps["items"] = sizeItem.map(item => {
		return {
			key: item,
			label: <span>{item}</span>,
			disabled: componentSize === item,
			onClick: () => {
				dispatch(setComponentSize(item as SizeType));
			}
		};
	});

	// 国际化切换
	const languageItems: MenuProps["items"] = [
		{
			key: "zh-cn",
			disabled: language === "zh-cn",
			label: <span>中文</span>,
			onClick: () => {
				dispatch(setLanguage("zh-cn"));
			}
		},
		{
			key: "en",
			disabled: language === "en",
			label: <span>英文</span>,
			onClick: () => {
				dispatch(setLanguage("en"));
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

	const [isModalOpen, setIsModalOpen] = useState(false);

	// 弹框
	const handleOk = () => {
		navigate("/login", { replace: true });
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			{/* 弹框 */}
			<Modal title="温馨提示" cancelText="取消" okText="确定" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
				<p>您是否确认退出登录?</p>
			</Modal>

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
					size="large"
				/>
				<div className="func-box flx-center">
					{/* <Tooltip placement="bottom" title="全屏"> */}
					<FullScreen />
					{/* </Tooltip> */}

					{/* 国际化配置 */}
					<Dropdown menu={{ items: languageItems }} trigger={["hover"]} placement="bottom" arrow>
						{/* <Tooltip placement="left" title="国际化配置"> */}
						<div className="flx-center">
							<SvgIcon
								name="language"
								iconStyle={{
									height: "22px",
									width: "22px",
									marginRight: "15px",
									cursor: "pointer",
									color: "var(--yz-svg-color)"
								}}
							/>
						</div>
						{/* </Tooltip> */}
					</Dropdown>

					{/* 组件大小 */}
					<Dropdown menu={{ items: compItems }} trigger={["hover"]} placement="bottom" arrow>
						{/* <Tooltip placement="left" title="组件尺寸配置"> */}
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
					<p className="username ellipsis">Yangzi</p>
					<Dropdown menu={{ items }} trigger={["hover"]} placement="bottom" arrow>
						<Avatar className="icon avatar" style={{ backgroundColor: token.colorPrimary }} icon={<UserOutlined />} />
					</Dropdown>
				</div>
				<ThemeComp open={open} close={close}></ThemeComp>
			</Header>
		</>
	);
}

export default Head;
