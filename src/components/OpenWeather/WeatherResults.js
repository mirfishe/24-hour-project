import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './OpenWeather.css';

const WeatherResults = (props) => {

    // console.log(props);

    let weatherData = props.weatherData;
    console.log(weatherData);

    return(
        <Container>
                <p>{weatherData.name}</p>
                <p>{weatherData.main.temp}</p>
                <p>{weatherData.weather[0].main}</p>
                <p>{weatherData.wind.speed}</p>
        </Container>
    )
}

export default WeatherResults;