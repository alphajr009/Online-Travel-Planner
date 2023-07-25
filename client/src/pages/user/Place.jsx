import React, { useEffect, useState } from 'react'
import Navbar from "../../components/navbar/MainNavbar";
import "../../css/palnTrip.css";
import "../../css/place.css";
import { Carousel, Col, Modal } from "antd";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Colombo from "../../assets/place-bg.jpg";
import weather1 from "../../assets/cloud.png";
import Map from "../../assets/map.png";
import Save from "../../assets/save.png";
import Cloud from "../../assets/clouds.png";
import Clear from "../../assets/clear.png";
import Rain from "../../assets/rain.png";
import Drizzle from "../../assets/drizzle.png";
import Mist from "../../assets/mist.png";

function Place() {

  let params = useParams();
  const [place, setPlace] = useState({})
  const [image, setImage] = useState('')

  const [isModalVisible, setIsModalVisible] = useState(false);

  const api = {
    key: "73ca22a9518c8d51001d8e5302826917",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});



  useEffect(() => {

    (async () => {

      if (!localStorage.getItem('currentUser')) {
        window.location.reload = '/login'

      }

      try {
        const data = (await axios.post("/api/places/getplacebyid", { placeid: params.placeid })).data
        setPlace(data.place[0]);
        setSearch(data.place[0].city)
        console.log(data.place[0])



      } catch (error) {
        console.log('error')

      }
    })();
  }, [params.placeid]);


  useEffect(() => {
    if (search) {
      fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [search]);


  useEffect(() => {
    if (weather && weather.weather && weather.weather.length > 0) {
      let imagePath = '';
      if (weather.weather[0].main === "Clouds") {
        imagePath = Cloud;
      } else if (weather.weather[0].main === "Clear") {
        imagePath = Clear;
      } else if (weather.weather[0].main === "Rain") {
        imagePath = Rain;
      } else if (weather.weather[0].main === "Drizzle") {
        imagePath = Drizzle;
      } else if (weather.weather[0].main === "Mist") {
        imagePath = Mist;
      } else {
        imagePath = Clear;
      }
      setImage(imagePath);
    }
  }, [weather]);





  const handleModalOpen = () => {
    setIsModalVisible(true);
  };


  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (


    <div>
      <Navbar></Navbar>

      <div>
        <div>
          <img className="place-cover" src={Colombo} alt="" />
        </div>
        <div className="place-cover-details">
          <h1>Welcome to {place.name}</h1>
          <p>Enjoy your vacation here</p>
          <div>
            <img className="fuction-icons" src={weather1} alt="" onClick={handleModalOpen} />
            <a href={place.googlemaplink} target="_blank" rel="noopener noreferrer">
              <img className="fuction-icons" src={Map} alt="" />
            </a>
            <img className="fuction-icons" src={Save} alt="" />
          </div>
        </div>
        <div className="place-page-content">
          <Col span={12}>
            <h1>{place.name}</h1>
            <p>
              {place.description}
            </p>
          </Col>

          <div>
            <div className="frameDiv">
              <div className='group'>
                <img className='icon1' alt="" src={`/uploads/${params.placeid}-0.jpg`} />
                <img className='icon2' alt="" src={`/uploads/${params.placeid}-1.jpg`} />
                <img className='icon3' alt="" src={`/uploads/${params.placeid}-2.jpg`} />
              </div>
              <img className='icon4' alt="" src={`/uploads/${params.placeid}-3.jpg`} />
              <img className='icon5' alt="" src={`/uploads/${params.placeid}-4.jpg`} />
              <img className='icon6' alt="" src={`/uploads/${params.placeid}-5.jpg`} />
              <img className='icon7' alt="" src={`/uploads/${params.placeid}-6.jpg`} />


            </div>
          </div>
        </div>

      </div>
      <Modal
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {/* Add your content inside the modal */}
        {typeof weather.main !== "undefined" ? (
          <div>

            {/* <h3>{weather.name},{weather.sys.country}</h3>
            <h4>{weather.main.temp}°C</h4>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p> */}

            <div className="winfo">
              <img src={image} alt="" className='icon' />
              <h1>{Math.round(weather.main.temp)}°c</h1>
              <h2>{weather.name}</h2>
              <div className="details">
                <div className="col">
                  <img src="/Images/humidity.png" alt="" />
                  <div className='humidity'>
                    <p>{Math.round(weather.main.humidity)}%</p>
                    <p>Humidity</p>
                  </div>
                </div>
                <div className="col">
                  <img src="/Images/wind.png" alt="" />
                  <div className='wind'>
                    <p>{Math.round(weather.wind.speed)} km/h</p>
                    <p>Wind</p>
                  </div>
                </div>
              </div>
            </div>


          </div>
        ) : (
          ""
        )}
      </Modal>
    </div>


  )
}

export default Place