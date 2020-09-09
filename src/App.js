import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
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
      <div>
        <div className="flexDiv">
          <OpenWeather latitude={latitude} longitude={longitude} />
          <NASA latitude={latitude} longitude={longitude} />
        </div>
        <Zomato latitude={latitude} longitude={longitude} />
      </div>
    );
  };

  const geolocationAvailableError = () => {
    return !geolocationAvailable ? (
      <h2>Geolocation is not supported by this browser.</h2>
    ) : (
      ""
    );
  };

  return (
    <div>
      <h1 className="applicationHeader">24 Hour Project</h1>
      {locationDataFound ? locationComponents() : geolocationAvailableError()}
    </div>
  );
}

export default App;
