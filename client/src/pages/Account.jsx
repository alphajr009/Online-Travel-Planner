import "../css/profile.css";
import Navbar from "../components/navbar/MainNavbar";
import {
	Layout,
	Button,
	Form,
	Input,
	Radio,
	Col,
	Row,
	DatePicker,
	Tag,
	Icon,
	Select, Space
} from "antd";
import React, { useState } from "react";

function Account() {
	const options = [];
	for (let i = 10; i < 36; i++) {
		options.push({
			label: i.toString(36) + i,
			value: i.toString(36) + i,
		});
	}
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	const [form] = Form.useForm();
	const [formLayout, setFormLayout] = useState("horizontal");
	const onFormLayoutChange = ({ layout }) => {
		setFormLayout(layout);
	};
	const formItemLayout =
		formLayout === "horizontal"
			? {
					labelCol: {
						span: 4,
					},
					wrapperCol: {
						span: 20,
					},
			  }
			: null;
	const buttonItemLayout =
		formLayout === "horizontal"
			? {
					wrapperCol: {
						span: 24,
						
						style: {
							display: 'flex',
							alignItems: 'flex-end',
							paddingTop: '10px',
						  },
					
					},
			  }
			: null;
	const { RangePicker } = DatePicker;
	const { TextArea } = Input;
	return (
		<Layout>
			<Navbar></Navbar>
			<div className="profile-cover">
			<Button className="user-edit-btn">Edit Profile</Button>
			</div>
			<div className="acc-form-sec">
				<Col span={24}>
					<Form
						{...formItemLayout}
						layout={formLayout}
						form={form}
						initialValues={{
							layout: formLayout,
						}}
						onValuesChange={onFormLayoutChange}
					>
						<div className="form-coloums">
							<Col span={12}>
								<Form.Item>
									<label>Name</label>
									<Input placeholder="Name" />
								</Form.Item>
								<Form.Item>
									<label>Home</label>
									<Input placeholder="input placeholder" />
								</Form.Item>
								<Form.Item>
									<label>Gender: </label>
									<Radio.Group>
										<Radio value="male"> Male </Radio>
										<Radio value="female"> Female </Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item>
									<label>Phone Number</label>
									<Input placeholder="Phone Number" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<label>Birthday</label>
								<Form.Item>
									<DatePicker />
								</Form.Item>
								<Form.Item>
									<label>Address</label>
									<TextArea rows={4} placeholder="Address" />
								</Form.Item>
								<Space
									style={{
										width: "100%",
									}}
									direction="vertical"
								>
									<Select
										mode="multiple"
										allowClear
										style={{
											width: "84%",
										}}
										placeholder="Please select"
										defaultValue={["a10", "c12"]}
										onChange={handleChange}
										options={options}
									/>
								
								</Space>
								<Form.Item {...buttonItemLayout}>
									<Button className="user-submit-btn">Save</Button>
								</Form.Item>
								
							</Col>
						</div>
					</Form>
				</Col>
			</div>
		</Layout>
	);
}

export default Account;
