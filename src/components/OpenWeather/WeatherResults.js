import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './OpenWeather.css';

const WeatherResults = (props) => {

    console.log(props);
    return(
        <div>
            {props.weatherData.map(result => {
                return (
                    <div>
                    <h2>Weather</h2>
                    {result.weather.object.main};
                    </div>
                )
            })}
        </div>
    )
}

export default WeatherResults;