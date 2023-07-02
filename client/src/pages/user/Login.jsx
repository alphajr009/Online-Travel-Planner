import React from "react";
import { Layout, Space, Col, Row, Button, Form, Input } from "antd";
import "../../css/login.css"
const { Content } = Layout;
const onFinish = (values) => {
	console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
	console.log("Failed:", errorInfo);
};
const Login = () => (
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
					<Col className="form-section" type="flex" justify="center" align="" span={12}>

                        <h1 className="text-align-left">Login</h1>
                        <p className="text-align-left">Let’s explore world today <br></br>
                        Sign in to start managing your bookings.</p>
                        <button className="sign-up-google"> <img src="/images/Google.svg" alt="" srcset="" />Sign up with Google</button>
						<Form 
							name="basic"
							labelCol={{
								span: 8,
							}}
							wrapperCol={{
								span: 16,
							}}
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
                            <label className="text-align-left" >Email</label>
							<Form.Item
								
								name="Email"
								rules={[
									{
										required: true,
										message: "Please input your email",
									},
								]}
							>
								<Input />
							</Form.Item>

                            <label className="text-align-left" >Password</label>
							<Form.Item
								name="password"
								rules={[
									{
										required: true,
										message: "Please input your password!",
									},
								]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item
								name="remember"
								valuePropName="checked"
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
							</Form.Item>

							<Form.Item
								wrapperCol={{
									offset: 8,
									span: 16,
								}}
							>
                                <p>I agree with Private Policy </p>
								<Button className="form" type="primary" htmlType="submit">
									Sign up
								</Button>
							</Form.Item>
						</Form>
                        <p>Don't you have an account? Sign in   </p>
					</Col>
					<Col className="login-pic" type="flex" justify="space-around" align="middle" span={12}>
					</Col>
				</Row>
			</Content>
		</Layout>
	</Space>
);

export default Login;
