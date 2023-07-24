import React from "react";
import "../css/Exploreslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PlaceCard from "./PlaceCard";
import { Col } from "antd";

import Sigiriya from "../assets/sigiriya.png";
import Mirissa from "../assets/mirissa.png";
import Ella from "../assets/ella.png";
import Kandy from "../assets/kandy.png";
import Yala from "../assets/yala.png";
import Colombo from "../assets/colombo.png";

function ExploreSlider() {
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
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div>
             <h1>do</h1>
			<div>
           
				<div className="carousel">
					
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
		</div>
	);
}

export default ExploreSlider;
