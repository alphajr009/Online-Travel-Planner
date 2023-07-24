import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/MainNavbar";
import Slider from "react-slick";
import Slider01 from "../components/Slider";
import "../css/palnTrip.css";
import { Carousel, Card, Col, Button } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

const contentStyle = {
	background: "red",
};
const { Meta } = Card;

function Place({ place }) {
	return (
		<div>

			<Card
				hoverable
				cover={<img className='palce-card-image' src={`/uploads/${place._id}-0.jpg`} alt={place.name} />}
			>
				<div className='place-card-p plan-trip-card '>
					<p>{place.name}</p>
					<Button>View</Button>
				</div>
			</Card>

		</div>
	);
}



function PlanTrip() {


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
				const doPlaces = data.places.filter(place => place.category === 'Do' && place.city.toLowerCase().includes(searchValue.toLowerCase()));
				const eatPlaces = data.places.filter(place => place.category === 'Eat' && place.city.toLowerCase().includes(searchValue.toLowerCase()));
				const stayPlaces = data.places.filter(place => place.category === 'Stay' && place.city.toLowerCase().includes(searchValue.toLowerCase()));

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
					{doplace.map((place) => (
						<Col key={place._id} className="location-card">
							<Place place={place} />
						</Col>
					))}
				</Slider>

				<h3 className="h3placetrip">Eat</h3>
				<Slider {...settings}>
					{eatplace.map((place) => (
						<Col key={place._id} className="location-card">
							<Place place={place} />
						</Col>
					))}
				</Slider>

				<h3 className="h3placetrip">Stay</h3>
				<Slider {...settings}>
					{stayplace.map((place) => (
						<Col key={place._id} className="location-card">
							<Place place={place} />
						</Col>
					))}
				</Slider>
				<div className="pt-create-btn">
					<Button><h4>Plan Trip</h4></Button>
				</div>
			</div>

		</div>
	);
}

export default PlanTrip;
