import { Carousel, Col } from "antd";
import { Input } from "antd";
import "../css/slider.css";
const contentStyle = {
	height: "450px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
	margin: "0px",
};
const Slider = () => (
	<Carousel autoplay>
		<div className="slider-images-01">
			<Col className="slider-content" span={8}>
				<h1 className="text-align-center ">Make Your Dream Trip </h1>
				<p>
					{" "}
					Discover the best places to visit, eat, and stay in any location. Explore exciting activities,
					indulge in delicious cuisine, and book accommodations that suit your style.
					Create unforgettable memories with ease, all in one place
				</p>
				<Input placeholder="Where you want to go ?" />;
			</Col>
		</div>
	</Carousel>
);
export default Slider;
