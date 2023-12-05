import { Drawer, ColorPicker, theme, Button, Switch } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
import { useState, useMemo, useEffect } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "@/store";
import { setIsDark, setTheme, setThemeMode } from "@/store/module/global";
import "./index.less";

type props = {
	open: boolean;
	close: () => void;
};

const ThemeComp = (props: props) => {
	const dispatch = useDispatch();

	const { open, close } = props;
	const onClose = () => {
		close();
	};

	// 修改主题
	const { token } = theme.useToken();
	const [themeVal, setColorHex] = useState<Color | string>(token.colorPrimary);
	const [formatHex, setFormatHex] = useState<ColorPickerProps["format"]>("hex");
	const hexString = useMemo(() => (typeof themeVal === "string" ? themeVal : themeVal.toHexString()), [themeVal]);
	useEffect(() => {
		dispatch(setTheme(hexString));
	}, [themeVal]);

	// 重置主题
	const resetTheme = () => {
		setColorHex("#a855f7");
	};

	const { themeMode, isDark, themeColor } = useSelector(state => state.global);
	const changeTheme = (checked: boolean, mode: "" | "gray" | "week") => {
		checked ? dispatch(setThemeMode(mode)) : dispatch(setThemeMode(""));
	};

	return (
		<>
			<Drawer className="theme" title="主题配置🎨" placement="right" onClose={onClose} open={open}>
				<div className="flx-justify-between">
					<p className="theme-color">主题颜色：</p>
					<ColorPicker
						format={formatHex}
						presets={[
							{
								label: "推荐",
								colors: [
									"#000000",
									"#000000E0",
									"#000000A6",
									"#00000073",
									"#00000040",
									"#00000026",
									"#0000001A",
									"#00000012",
									"#0000000A",
									"#00000005",
									"#F5222D",
									"#FA8C16",
									"#FADB14",
									"#8BBB11",
									"#52C41A",
									"#13A8A8",
									"#1677FF",
									"#2F54EB",
									"#722ED1",
									"#EB2F96",
									"#F5222D4D",
									"#FA8C164D",
									"#FADB144D",
									"#8BBB114D",
									"#52C41A4D",
									"#13A8A84D",
									"#1677FF4D",
									"#2F54EB4D",
									"#722ED14D",
									"#EB2F964D"
								]
							}
						]}
						showText
						value={themeVal}
						onFormatChange={setFormatHex}
						onChange={setColorHex}
					/>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="theme-color">重置主题：</p>
					<Button type="primary" style={{ backgroundColor: themeColor }} onClick={resetTheme}>
						重置
					</Button>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="theme-color">暗黑模式：</p>
					<Switch
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						defaultChecked={isDark}
						onChange={checked => {
							dispatch(setIsDark(checked));
						}}
					/>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="theme-color">灰色模式：</p>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						onChange={checked => changeTheme(checked, "gray")}
						defaultChecked={themeMode === "gray"}
					/>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="theme-color">色弱模式：</p>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						onChange={checked => changeTheme(checked, "week")}
						defaultChecked={themeMode === "week"}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default ThemeComp;
