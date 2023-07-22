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
	Select,
	Space,
	notification,
} from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Account() {
	const user = JSON.parse(localStorage.getItem("currentUser"));

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [saveButtonText, setSaveButtonText] = useState("Edit Profile");

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.post("/api/users/getuserbyid", {
					userid: user._id,
				});
				const data = response.data[0];
				setEmail(data.email);
			} catch (error) {
				console.log("error");
			}
		})();
	}, []);

	const onSaveButtonClick = () => {
		form.validateFields().then(() => {
			// Perform the save operation here since the form is valid
			notification.success({
				message: "Success",
				description: "Profile has been saved!",
			});

			// Switch back to "Edit Profile" mode after saving
			setEditMode(false);
			setSaveButtonText("Edit Profile");
		}).catch((error) => {
			notification.error({
				message: "Error",
				description: "Please fill in all required fields before saving.",
			});
		});
	};

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
						display: "flex",
						alignItems: "flex-end",
						paddingTop: "10px",
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
				<Button
					className="user-edit-btn"
					onClick={() => setEditMode(!editMode)} // Toggle the edit mode
				>
					{editMode ? "Cancel" : "Edit Profile"}
				</Button>
			</div>
			<div className="acc-form-sec">
				<Col span={24}>
					<Form
						{...formItemLayout}
						layout={formLayout}
						form={form}
						initialValues={{
							layout: formLayout,
							email: email,
						}}
						onValuesChange={onFormLayoutChange}
					>
						<div className="form-coloums">
							<Col span={12}>
								<Form.Item
									rules={[
										{
											required: true,
											message: "Please enter your name!",
										},
									]}>
									<label>Name</label>
									<Input
										placeholder="Name"
										disabled={!editMode} // Disable input field when not in edit mode
									/>
								</Form.Item>
								<Form.Item
									rules={[
										{
											required: true,
											message: "Please enter your city!",
										},
									]}>
									<label>City</label>
									<Input
										placeholder="City"
										disabled={!editMode} // Disable input field when not in edit mode
									/>
								</Form.Item>
								<Form.Item
									name="gender"
									rules={[
										{
											required: true,
											message: "Please select your gender!",
										},
									]}>
									<label>Gender: </label>
									<Radio.Group>
										<Radio value="male" disabled={!editMode}>
											{" "}
											Male{" "}
										</Radio>
										<Radio value="female" disabled={!editMode}>
											{" "}
											Female{" "}
										</Radio>
									</Radio.Group>
								</Form.Item>
								<Form.Item
									name="phone"
									rules={[
										{
											required: true,
											message: "Please enter your phone number!",
										},
									]}>
									<label>Phone Number</label>
									<Input
										placeholder="Phone Number"
										disabled={!editMode} // Disable input field when not in edit mode
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											message: "Please enter your email!",
										},
									]}>
									<label>Email</label>
									<Input
										name="email"
										placeholder={email}
										value={email}
										disabled={!editMode} // Disable input field when not in edit mode
									/>
								</Form.Item>
								<label>Birthday</label>
								<Form.Item
									name="birthday"
									rules={[
										{
											required: true,
											message: "Please select your birthday!",
										},
									]}>
									<DatePicker disabled={!editMode} />{" "}
									{/* Disable date picker when not in edit mode */}
								</Form.Item>
								<Form.Item
									rules={[
										{
											required: true,
											message: "Please enter your address!",
										},
									]}>
									<label>Address</label>
									<TextArea
										rows={4}
										placeholder="Address"
										disabled={!editMode} // Disable input field when not in edit mode
									/>
								</Form.Item>
								<Space
									style={{
										width: "100%",
									}}
									direction="vertical"
								>
									<Form.Item
										name="preferences"
										rules={[
											{
												required: true,
												message: "Please select your preferences!",
											},
										]}>
										<label>Preferences: </label>
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
											disabled={!editMode} // Disable select field when not in edit mode
										/>
									</Form.Item>
								</Space>
								<Form.Item {...buttonItemLayout}>
									<Button className="user-submit-btn" disabled={!editMode} onClick={onSaveButtonClick}>
										Save
									</Button>{" "}
									{/* Disable button when not in edit mode */}
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