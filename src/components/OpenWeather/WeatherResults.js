import React, { useState } from 'react';
import {Container} from 'reactstrap';
import './WeatherResults.css';

const WeatherResults = (props) => {

    // console.log(props);
    let weatherData = props.weatherData;
    // console.log(weatherData);

    const [temperatureKelvin, setTemperatureKelvin] = useState(weatherData.main.temp);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(((weatherData.main.temp-273.15)*1.8)+32);
    const [temperatureCelsius,  setTemperatureCelsius] = useState(weatherData.main.temp-273.15);


    return(
        <Container>
                <h5>Location</h5>
                <p>{weatherData.name}</p>
                <h5>Temperature</h5>
                <p>Kelvin {temperatureKelvin}</p>
                <p>Fahrenheit {temperatureFahrenheit}</p>
                <p>Celsius {temperatureCelsius}</p>
                <h5>Weather Conditions</h5>
                <p>{weatherData.weather[0].main}</p>
                <h5>Wind Speed</h5>
                <p>{weatherData.wind.speed}</p>
        </Container>
    )
}

export default WeatherResults;