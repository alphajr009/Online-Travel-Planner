import { useState } from "react";
import { Button, Carousel, Col } from "antd";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

import "../css/slider.css";

const Slider = () => {
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");

	const handleSearch = () => {
		navigate(`/plantrip`, { state: { search: searchValue } });
	};

	return (
		<Carousel autoplay>
			<div className="slider-images-01">
				<Col className="slider-content" span={8}>
					<h1 className="text-align-center">Make Your Dream Trip </h1>
					<p>
						Discover the best places to visit, eat, and stay in any location. Explore exciting activities,
						indulge in delicious cuisine, and book accommodations that suit your style.
						Create unforgettable memories with ease, all in one place
					</p>

					<div className="search-bar">
						<Input
							className="search-input"
							placeholder="Where you want to go ?"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							onPressEnter={handleSearch}
						/>
						<Button type="primary" size="large" onClick={handleSearch}>
							Search
						</Button>
					</div>
				</Col>
			</div>
		</Carousel>
	);
};

export default Slider;
