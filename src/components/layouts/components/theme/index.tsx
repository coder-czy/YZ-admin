import { Drawer, ColorPicker, theme, Button, Switch, message } from "antd";
import type { Color, ColorPickerProps } from "antd/es/color-picker";
import { useState, useMemo, useEffect } from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "@/store";
import { setTheme, setGrayMode } from "@/store/module/global";

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

	const { grayMode } = useSelector(state => state.global);
	const changeGray = (checked: boolean) => {
		dispatch(setGrayMode(checked));
	};

	return (
		<>
			<Drawer title="主题配置🎨" placement="right" onClose={onClose} open={open}>
				<div className="flx-justify-between">
					<p className="base-color">主题颜色：</p>
					<ColorPicker format={formatHex} showText value={themeVal} onFormatChange={setFormatHex} onChange={setColorHex} />
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="base-color">重置主题：</p>
					<Button type="primary" style={{ backgroundColor: "#a855f7" }} onClick={resetTheme}>
						重置
					</Button>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="base-color">暗黑模式：</p>
					<Switch
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						onChange={() => {
							message.success("欢迎提交 pull request ✨");
						}}
					/>
				</div>
				<div className="flx-justify-between" style={{ marginTop: "20px" }}>
					<p className="base-color">灰色主题：</p>
					<Switch
						checkedChildren={<CheckOutlined />}
						unCheckedChildren={<CloseOutlined />}
						onChange={changeGray}
						defaultChecked={grayMode}
					/>
				</div>
			</Drawer>
		</>
	);
};

export default ThemeComp;
