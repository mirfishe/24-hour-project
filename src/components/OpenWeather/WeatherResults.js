import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './OpenWeather.css';

const WeatherResults = (props) => {

    // console.log(props);

    let weatherData = props.weatherData;
    console.log(weatherData);

    return(
        <Container>
                <h5>Location</h5>
                <p>{weatherData.name}</p>
                <h5>Temperature</h5>
                <p>{weatherData.main.temp}</p>
                <h5>Weather Conditions</h5>
                <p>{weatherData.weather[0].main}</p>
                <h5>Wind Speed</h5>
                <p>{weatherData.wind.speed}</p>
        </Container>
    )
}

export default WeatherResults;