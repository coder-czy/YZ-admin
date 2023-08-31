import { Form, Button, Input, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./index.less";
import LoginBg from "./component/bg";

const { useToken } = theme;

function Login() {
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
		navigate("home", { replace: true });
	};
	const { token } = useToken();

	return (
		<div className="login flx-center">
			<LoginBg></LoginBg>

			<div
				className="filter shadow card login-stage"
				style={{
					boxShadow: `0 0 20px ${token.colorPrimary}`,
					border: token.colorPrimary
				}}
			>
				<h2 className="title">YZ ADMIN</h2>
				<Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
					<Form.Item name="账号" rules={[{ required: true, message: "请输入账号!" }]}>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} className="form-input" placeholder="账号" />
					</Form.Item>
					<Form.Item name="密码" rules={[{ required: true, message: "请输入密码!" }]}>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="密码"
							className="form-input"
						/>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							登录
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Login;
