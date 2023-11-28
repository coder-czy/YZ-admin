type Props = {
	name: string;
	iconStyle?: { [key: string]: any };
	prefix?: string;
};

/**
 * @description 图标组件
 * @param name 图标名称
 * @param iconStyle 图标样式
 * @param prefix 前缀
 *
 */
function SvgIcon({ name, iconStyle = { width: "100px", height: "100px" }, prefix = "icon" }: Props) {
	const symbolId = `#${prefix}-${name}`;
	return (
		<svg aria-hidden="true" style={iconStyle}>
			<use href={symbolId} />
		</svg>
	);
}

export default SvgIcon;
