import { Form, Button, Input, theme } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { ValidateStatus } from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";

import "./index.less";
import LoginBg from "./component/bg";
import { useState } from "react";

const { useToken } = theme;

function Login() {
	const navigate = useNavigate();
	const onFinish = (values: any) => {
		let { username, password } = values;

		username ? setUsernameStatus("") : setUsernameStatus("error");
		password ? setPasswordStatus("") : setPasswordStatus("error");

		if (username && password) navigate("/dashboard/index", { replace: true });
	};
	const { token } = useToken();

	const loginData = {
		username: "admin",
		password: "123456"
	};

	const [usernameStatus, setUsernameStatus] = useState<ValidateStatus>("");
	const [passwordStatus, setPasswordStatus] = useState<ValidateStatus>("");

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
				<Form name="normal_login" className="login-form" initialValues={loginData} onFinish={onFinish}>
					<Form.Item name="username" validateStatus={usernameStatus} help={usernameStatus ? "请输入账号!" : ""}>
						<Input prefix={<UserOutlined className="site-form-item-icon" />} className="form-input" placeholder="账号" />
					</Form.Item>
					<Form.Item name="password" validateStatus={passwordStatus} help={passwordStatus ? "请输入密码!" : ""}>
						<Input.Password
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
