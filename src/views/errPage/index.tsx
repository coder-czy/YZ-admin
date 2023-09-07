import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import SvgIcon from "@/components/svgIcon";
import "./index.less";

type Props = {
	name: string;
	title: string;
};

const ErrPage = ({ name = "400", title = "" }: Props) => {
	const navigate = useNavigate();
	const goHome = () => {
		navigate("/dashboard/index");
	};
	return (
		<div className="error flx-center">
			<SvgIcon iconStyle={{ height: "40%" }} name={name} />
			<h2 className="base-color title">{title}</h2>
			<Button size="large" className="button" type="primary" onClick={goHome}>
				返回首页
			</Button>
		</div>
	);
};

export default ErrPage;
