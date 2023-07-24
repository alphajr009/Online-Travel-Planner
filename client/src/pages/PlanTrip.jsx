import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/MainNavbar";
import Slider from "react-slick";
import Slider01 from "../components/Slider";
import "../css/palnTrip.css";
import { Carousel, Card, Col } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sigiriya from '../assets/sigiriya.png'
import Mirissa from '../assets/mirissa.png'
import Ella from '../assets/ella.png'
import Kandy from '../assets/kandy.png'
import Yala from '../assets/yala.png'
import Colombo from '../assets/colombo.png'
import { useLocation } from "react-router-dom";
import axios from "axios";

const contentStyle = {
	background: "red",
};
const { Meta } = Card;


function PlanTrip() {

	const PlaceCard = ({ PlaceCardName, src }) => (
		<Card
			hoverable
			cover={<img alt="example" src={src} />}
		>
			<p>{PlaceCardName}</p>
		</Card>
	);


	const [doplace, setDo] = useState([]);
	const [eatplace, setEat] = useState([]);
	const [stayplace, setStay] = useState([]);
	const [filteredPlaces, setFilteredPlaces] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showSpinner, setShowSpinner] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get('/api/places/getallplaces');
				const data = response.data;
				const doPlaces = data.places.filter(place => place.category === 'Do');
				const eatPlaces = data.places.filter(place => place.category === 'Eat');
				const stayPlaces = data.places.filter(place => place.category === 'Stay');

				setDo(doPlaces);
				setEat(eatPlaces);
				setStay(stayPlaces);

				setTimeout(() => {
					setIsLoading(false);
					setShowSpinner(false);
				}, 1500);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
				setShowSpinner(false);
			}
		};

		fetchData();
	}, []);


	const location = useLocation();
	const searchValue = location.state?.search || "";
	console.log(searchValue)


	var settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};


	return (
		<div className="Home">
			<Navbar></Navbar>
			<Slider01></Slider01>
			<div className="container plantrip">
				<h3>Do</h3>
				<Slider {...settings}>
					<Col className="location-card">
						<PlaceCard PlaceCardName="Colombo" src={Colombo} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Sigiriya" src={Sigiriya} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Ella" src={Ella} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Mirissa" src={Mirissa} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Kandy" src={Kandy} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Yala" src={Yala} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Ella" src={Ella} />
					</Col>

					<Col className="location-card">
						<PlaceCard PlaceCardName="Kandy" src={Kandy} />
					</Col>
				</Slider>
			</div>
		</div>
	);
}

export default PlanTrip;
