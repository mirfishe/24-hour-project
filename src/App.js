import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NASA from './components/NASA/NASA';
import OpenWeather from  './components/OpenWeather/OpenWeather';
import Zomato from './components/Zomato/Zomato';

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [locationDataFound, setLocationDataFound] = useState(false);

  useEffect(() => {
    getLocation();
    // console.log("Latitude: ", latitude, "Longitude: " + longitude);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
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
    };
  }, [latitude, longitude]);

const locationComponents = () => {
  return (
    <div>
    <NASA latitude={latitude} longitude={longitude} />
    <OpenWeather latitude={latitude} longitude={longitude} />
    <Zomato latitude={latitude} longitude={longitude} />
    </div>
  );
};

  return (
    <div>
      {
        locationDataFound ? locationComponents() : ''
      }
    </div>
  );
}

export default App;
