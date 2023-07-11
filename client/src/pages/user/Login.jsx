import React, { useState } from 'react'
import axios from 'axios';
import { Layout, Space, Col, Row, Button, Form, Input, Checkbox } from "antd";

import "../../css/login.css";

const { Content } = Layout;


const onFinish = (values) => {
	console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};

const Login = () => {

	const [email, setemail] = useState('')
	const [password, setpassword] = useState('')


	const [loading, setloading] = useState(false);
	const [error, seterror] = useState(false);

	const [isRememberMe, setIsRememberMe] = React.useState(false);

	const handleRememberMeChange = (e) => {
		setIsRememberMe(e.target.checked);
	};



	async function Login() {

		const user = {
			email,
			password,
		}
		try {
			setloading(true)
			const { data, status } = await axios.post('/api/users/login', user)
			setloading(false)

			if (status === 200) {
				localStorage.setItem('currentUser', JSON.stringify(data));
				if (data.isAdmin = true) {
					window.location.href = '/admin'
				} else {
					window.location.href = '/home'
				}

			} else {
				seterror(true);
			}
		} catch (error) {
			console.log(error)
			setloading(false)
			seterror(true)
		}
	}


	return (
		<Space
			direction="vertical"
			style={{
				width: "100%",
			}}
			size={[0, 48]}
			className="space"
		>
			<Layout>
				<Content>
					<Row className="main-col">
						<Col
							className="form-section"
							span={12}
						>
							<Col
								className="innter-form-section"
								span={12}
							>
								<h1 className="text-align-left">Login</h1>
								<p className="text-align-left">
									Let’s explore the world today
									<br></br>
									Sign in to start managing your bookings.
								</p>
								<button className="sign-up-google">
									<img src="/images/Google.svg" alt="" srcSet="" />
									Sign up with Google
								</button>
								<Form
									style={{
										maxWidth: 600,
									}}
									initialValues={{
										remember: true,
									}}
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									autoComplete="off"
								>
									<div className="m-8">
										<label className="text-align-left m-8">Email</label>
									</div>
									<div>
										<Form.Item
											name="Email"
											rules={[
												{
													required: true,
													message: "Please input your email",
												},
											]}
										>
											<Input value={email} onChange={(e) => { setemail(e.target.value) }} />
										</Form.Item>
									</div>
									<div className="m-8">
										<label className="text-align-left m-8">Password</label>
									</div>
									<Form.Item
										name="password"
										rules={[
											{
												required: true,
												message: "Please input your password!",
											},
										]}
									>
										<Input.Password value={password} onChange={(e) => { setpassword(e.target.value) }} />
									</Form.Item>
									<Form.Item className="sign-up-btn-col"
										wrapperCol={{
											offset: 0,
											span: 24,
										}}
									>

										<Button onClick={Login} className="login-btn" type="primary" htmlType="submit">
											Login
										</Button>
									</Form.Item>
								</Form>
								<div className="forget-pw">
									<Checkbox
										checked={isRememberMe}
										onChange={handleRememberMeChange}
									>
										<a title={isRememberMe ? "You are Remembered!" : "Click to Remember"}>
											Remember me
										</a>
									</Checkbox>{" "}
									<a href="#">Forgot password</a>{" "}
								</div>
								<div className="login-acc-have">
									<p className="text-align-center" >Don't you have an account?
										{" "}
										<a className="fw-medium" href="/signup">Sign up</a>{" "}
									</p>
								</div>
							</Col>
						</Col>
						<Col
							className="login-pic"
							type="flex"
							justify="space-around"
							align="middle"
							span={12}
						></Col>
					</Row>
				</Content>
			</Layout>
		</Space>
	);
};

export default Login;
