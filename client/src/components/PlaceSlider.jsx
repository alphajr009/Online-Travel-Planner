import { Carousel, Col } from "antd";
import { Input, Button } from "antd";
import "../css/slider.css";
import "../css/palnTrip.css";
import Colombo from "../assets/place-bg.jpg";
import weather from "../assets/cloud.png";
import Map from "../assets/map.png";
import Save from "../assets/save.png";
import Hotel from "../assets/hotel-photos.png";

const contentStyle = {
	height: "450px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
	margin: "0px",
};
const Slider = () => (
	<div>
		<div>
			<img className="place-cover" src={Colombo} alt="" />
		</div>
		<div className="place-cover-details">
			<h1>Welcome to Sadathenna</h1>
			<p>Enjoy your vacation here</p>
			<div>
				<img className="fuction-icons" src={weather} alt="" />
				<img className="fuction-icons" src={Map} alt="" />
				<img className="fuction-icons" src={Save} alt="" />
			</div>
		</div>
		<div className="place-page-content">
			<Col span={12}>
				<h1>Dream Cottage Hotel</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged. It was popularized in the 1960s with
					the release of Letraset sheets containing Lorem Ipsum passages, and
					more recently with desktop publishing software like Aldus PageMaker
					including versions of Lorem Ipsum.
				</p>
			</Col>

            <div>
            <img className="fuction-icons" src={Hotel} alt="" />
            </div>
		</div>
	</div>
	// <Carousel autoplay>
	// 	<div className="slider-images-01">
	// 		<Col className="slider-content" span={8}>
	// 			<h1 className="text-align-center ">Make Your Dream Trip </h1>
	// 			<p>
	// 				{" "}
	// 				Discover the best places to visit, eat, and stay in any location. Explore exciting activities,
	// 				indulge in delicious cuisine, and book accommodations that suit your style.
	// 				Create unforgettable memories with ease, all in one place
	// 			</p>
	// 			 <div class="search-bar">
	// 				<Input className="search-input" placeholder="Where you want to go ?" />
	// 				<Button type="primary" size="large">Search</Button>
	// 			 </div>
	// 		</Col>
	// 	</div>
	// </Carousel>
);
export default Slider;
