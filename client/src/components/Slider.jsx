import { Carousel, Col } from "antd";
import { Input} from "antd";
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
				<h1 className="text-align-center ">Welcome to trip planner</h1>
				<p>
					{" "}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>
        <Input placeholder="Basic usage" />;
			</Col>
		</div>
	</Carousel>
);
export default Slider;
