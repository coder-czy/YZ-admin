import { Badge, Card } from "antd";

function Menu() {
	return (
		<Badge.Ribbon text="menu2-1">
			<Card title="嵌套菜单" size="default">
				Menu2-1
			</Card>
		</Badge.Ribbon>
	);
}

export default Menu;
