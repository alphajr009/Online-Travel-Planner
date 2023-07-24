import React from 'react'
import Navbar from '../components/navbar/MainNavbar'
import Slider from '../components/Slider'
import { Col, Row } from 'antd'
import ExploreSlider from '../components/ExploreSlider'
import Categories from "../components/CategoriesCard";


function PlanTrip() {
    return (
        <div className="Home">
            <Navbar></Navbar>
            <Slider></Slider>
            <h2 className="text-align-center">Plan Your Trip</h2>
            <Categories></Categories>
        </div>
    )
}

export default PlanTrip