import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import {Container, Col, Row} from 'reactstrap';
import NASA from "./components/NASA/NASA";
import OpenWeather from "./components/OpenWeather/OpenWeather";
import Zomato from "./components/Zomato/Zomato";

function App() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [locationDataFound, setLocationDataFound] = useState(false);
  const [geolocationAvailable, setGeolocationAvailable] = useState(true);

  useEffect(() => {
    getLocation();
    // console.log("Latitude: ", latitude, "Longitude: " + longitude);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
      setGeolocationAvailable(false);
    }
  };

  const showPosition = (position) => {
    // console.log("Latitude: ", position.coords.latitude, "Longitude: " + position.coords.longitude);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  useEffect(() => {
    if (latitude && longitude) {
      // console.log("Latitude: ", latitude, "Longitude: " + longitude);
      setLocationDataFound(true);
    }
  }, [latitude, longitude]);

  const locationComponents = () => {
    return (
      <Container>
        <Row className="justify-content-center">
          <OpenWeather latitude={latitude} longitude={longitude} />
          <NASA latitude={latitude} longitude={longitude} />
        </Row>
        <Row className="justify-content-center">
        <Col>
        <Zomato latitude={latitude} longitude={longitude} />
        </Col>
        </Row>
      </Container>
    );
  };


  return (
    <div>
      <h1 className="applicationHeader">24 Hour Project</h1>
      {console.log(locationDataFound)}
      {console.log(geolocationAvailable)}
      {locationDataFound ? locationComponents() : <h2>Geolocation is not supported by this browser.</h2>}
    </div>
  );
}

export default App;
