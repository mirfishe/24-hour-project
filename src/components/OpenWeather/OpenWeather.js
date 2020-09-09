import React, { useState, useEffect } from 'react';
import {Col} from 'reactstrap';
import './OpenWeather.css';
import WeatherResults from "./WeatherResults"

const baseURL="http://api.openweathermap.org/data/2.5/weather"
const key = "203dcab38e74e0dd2117b8d81cc20e68"

const OpenWeather = (props) => {
    
    const [latitude, setLatitude] = useState(props.latitude);
    const [longitude, setLongitude] = useState(props.longitude);
    const [weatherData, setWeatherData] = useState({});
    
    const fetchWeather = () => {
    // let url = `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`
    let url = `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${key}`
    fetch(url)
    .then(res => res.json())
    .then(weatherData => setWeatherData(weatherData))
    .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchWeather();
    }, []);

    // useEffect(() => {
    //     console.log(weatherData);
    // }, [weatherData]);

    return (
        <Col md="3">
            {weatherData.hasOwnProperty('weather') ? <WeatherResults weatherData={weatherData} /> : ''}
        </Col>
    );
};

export default OpenWeather;