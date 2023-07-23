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
import { LockOutlined } from "@ant-design/icons";
import moment from "moment";



function Account() {
	const user = JSON.parse(localStorage.getItem("currentUser"));

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [editMode, setEditMode] = useState(false);
	const [saveButtonText, setSaveButtonText] = useState("Edit Profile");
	const [city, setCity] = useState("");
	const [gender, setGender] = useState("");
	const [phone, setPhone] = useState("");
	const [birthday, setBirthday] = useState("");
	const [address, setAddress] = useState("");
	const [preferences, setPreferences] = useState([]);


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

		form.validateFields().then((values) => {
			setName(values.Name);
			setCity(values.city);
			setGender(values.gender);
			setPhone(values.phone);
			setBirthday(values.birthday);
			setAddress(values.address);
			setPreferences(values.preferences);

			// Save the data (you can perform your save logic here)


			notification.success({
				message: "Success",
				description: "Profile has been saved!",
			});

			setEditMode(false);
			setSaveButtonText("Edit Profile");
		}).catch((error) => {

			notification.error({
				message: "Error",
				description: "Please fill in all required fields before saving.",
			});
		});
	};

	const options = [
		{ label: "#Zoo", value: "Zoo" },
		{ label: "#Cafe", value: "Cafe" },
		{ label: "#Club", value: "Club" },
		{ label: "#Range", value: "Range" },
		{ label: "#Movie", value: "Movie" },
		{ label: "#Beach", value: "Beach" },
		{ label: "#Hike", value: "Hike" },
		{ label: "#Art", value: "Art" },
		{ label: "#Museum", value: "Museum" },
		{ label: "#Park", value: "Park" },
		{ label: "#History", value: "History" },
		{ label: "#Mall", value: "Mall" },
		{ label: "#Garden", value: "Garden" },
		{ label: "#Amusement", value: "Amusement" },
		{ label: "#Music", value: "Music" },
		{ label: "#Sports", value: "Sports" },
		{ label: "#Spa", value: "Spa" },
		{ label: "#Market", value: "Market" },
		{ label: "#FoodStall", value: "FoodStall" },
		{ label: "#ScenicView", value: "ScenicView" },
		{ label: "#Pub", value: "Pub" },
		{ label: "#Winery", value: "Winery" },
		{ label: "#Adventure", value: "Adventure" },
		{ label: "#Yoga", value: "Yoga" },
		{ label: "#Bookstore", value: "Bookstore" },
		{ label: "#Waterfall", value: "Waterfall" },
		{ label: "#Ski", value: "Ski" },
		{ label: "#Wildlife", value: "Wildlife" },
		{ label: "#CookingClass", value: "CookingClass" },
		{ label: "#HotSpring", value: "HotSpring" },
	];

	const handleChange = (selectedPreferences) => {
		setPreferences(selectedPreferences);
	};


	const [form] = Form.useForm();
	const [formLayout, setFormLayout] = useState("horizontal");
	const onFormLayoutChange = ({ layout, birthday }) => {
		setFormLayout(layout);
		if (birthday) {
			setBirthday(birthday.format("YYYY-MM-DD"));
		}
	};

	const initialValues = {
		Name: name,
		city: city,
		gender: gender,
		phone: phone,
		birthday: birthday,
		birthday: birthday ? moment(birthday, "YYYY-MM-DD") : null,
		address: address,
		preferences: preferences,
	};

	form.setFieldsValue(initialValues);

	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
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
						}}
						autoComplete="off"
						onValuesChange={onFormLayoutChange}
					>
						<div className="form-coloums">
							<Col span={12}>
								<Form.Item
									name="Name"
									rules={[
										{
											required: true,
											message: "Please enter your name!",
										},
									]}>
									<label>Name</label>
									<Input
										value={name}
										placeholder="Name"
										disabled={!editMode}
										onChange={(e) => setName(e.target.value)}
									/>
								</Form.Item>
								<Form.Item
									name="city"
									rules={[
										{
											required: true,
											message: "Please enter your city!",
										},
									]}>
									<label>City</label>
									<Input
										value={city}
										placeholder="City"
										disabled={!editMode}
										onChange={(e) => setCity(e.target.value)}
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
									<Radio.Group value={gender} onChange={(e) => setGender(e.target.value)} disabled={!editMode}>
										<Radio value="male">Male</Radio>
										<Radio value="female">Female</Radio>
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
										value={phone}
										placeholder="Phone Number"
										disabled={!editMode}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="email"

								>
									<label>Email</label>
									<Input

										placeholder={email}

										disabled={true}
										suffix={<LockOutlined style={{ color: "#aaa" }} />}
									/>
								</Form.Item>
								<Form.Item
									name="birthday"
									rules={[
										{
											type: "object",
											required: true,
											message: "Please select your birthday!",
										},
									]}
								>
									<label>Birthday</label>
									<DatePicker
										disabled={!editMode}
										onChange={(date, dateString) => setBirthday(dateString)}
									/>
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
										value={address}
										rows={4}
										placeholder="Address"
										disabled={!editMode}
										onChange={(e) => setAddress(e.target.value)}
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
												type: "array",
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
											defaultValue={preferences}
											onChange={handleChange} // This is where we handle the selection changes
											options={options}
											disabled={!editMode}
										/>

									</Form.Item>
								</Space>
								<Form.Item {...buttonItemLayout}>
									<Button
										className="user-submit-btn"
										disabled={!editMode}
										type="primary"
										htmlType="submit"
										onClick={onSaveButtonClick}
									>
										Save
									</Button>{" "}

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