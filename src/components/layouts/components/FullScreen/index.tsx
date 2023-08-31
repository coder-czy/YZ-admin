import { useState, useEffect } from "react";
import screenfull from "screenfull";
import { ExpandOutlined, CompressOutlined } from "@ant-design/icons";
import { message } from "antd";

function FullScreen() {
	const [isFull, setIsFull] = useState(false);
	const FullScreenFn = () => {
		if (!screenfull.isEnabled) message.error("抱歉！您的浏览器不支持全屏！");
		screenfull.toggle();
	};
	useEffect(() => {
		screenfull.on("change", () => {
			if (screenfull.isFullscreen) {
				setIsFull(false);
			} else {
				setIsFull(true);
			}
			return () => screenfull.off("change", () => {});
		});
	}, []);

	return isFull ? (
		<ExpandOutlined onClick={FullScreenFn} className="icon" />
	) : (
		<CompressOutlined onClick={FullScreenFn} className="icon" />
	);
}

export default FullScreen;
