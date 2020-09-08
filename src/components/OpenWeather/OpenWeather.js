import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './OpenWeather.css';
import WeatherResults from "./WeatherResults"

const baseURL="http://api.openweathermap.org/data/2.5/weather"
const key = "203dcab38e74e0dd2117b8d81cc20e68"

const OpenWeather = (props) => {
    
    const [latitude, setLatitude] = useState("39.9572992");
    const [longitude, setLongitude] = useState("-86.1208576");
    const [weatherData, setWeatherData] = useState([]);
    
    const fetchWeather = () => {
    let url = `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${key}`
    fetch(url)
    .then(res => res.json())
    .then(weatherData => setWeatherData(weatherData))
    .catch(err => console.log(err))
}

    useEffect(() => {
        fetchWeather();
    }, [])

    return (
        <Container>
            <WeatherResults weatherData={weatherData} />
        </Container>
    );
};

export default OpenWeather;