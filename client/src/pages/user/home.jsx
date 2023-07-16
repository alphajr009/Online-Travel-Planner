import React from "react";
import { Layout, Space, Col, Row, Button, Form, Input, Checkbox } from "antd";
import "../../css/Home.css";
import "../../index.css";
import Navbar from "../../components/navbar/MainNavbar";
import Slider from "../../components/Slider";
import PlaceCard from "../../components/PlaceCard";
import Categories from "../../components/CategoriesCard";
import ExploreSlider from "../../components/ExploreSlider";

function Home() {
	return (
		<div className="Home">
			<Navbar></Navbar>
			<Slider></Slider>
			<h2 className="text-align-center">Explore Sri Lanka</h2>
			<Row className="main-container-padding">

				{/* <Col className="location-card" span={6}>
					<PlaceCard></PlaceCard>
				</Col>
				<Col className="location-card" span={6}>
					<PlaceCard></PlaceCard>
				</Col>
				<Col className="location-card" span={6}>
					<PlaceCard></PlaceCard>
				</Col>
				<Col className="location-card" span={6}>
					<PlaceCard></PlaceCard>
				</Col> */}
				<Col className="location-card" span={22} >
					<ExploreSlider />
				</Col>

			</Row>
			<h2 className="text-align-center">Categories</h2>
			<Categories></Categories>
		</div>
	);
}

export default Home;
