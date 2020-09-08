import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './OpenWeather.css';

const WeatherResults = (props) => {

    // console.log(props);
    let weatherData = props.weatherData;
    console.log(weatherData);

    return(
        <Container>
            <h2>Weather</h2>
                {weatherData.base}
        </Container>
    )
}

export default WeatherResults;