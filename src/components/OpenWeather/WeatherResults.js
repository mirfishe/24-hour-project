import React, { useState } from 'react';
import {Col, Button} from 'reactstrap';
import './WeatherResults.css';

const WeatherResults = (props) => {

    // console.log(props);
    let weatherData = props.weatherData;
    // console.log(weatherData);

    // convert wind speed from m/s to mph
    let windSpeed = (weatherData.wind.speed * 2.23694).toPrecision(2);
    let pressure = (weatherData.main.pressure * 0.030).toPrecision(4);

    // const [temperatureKelvin, setTemperatureKelvin] = useState(weatherData.main.temp);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
    const [temperatureCelsius,  setTemperatureCelsius] = useState(Math.floor(weatherData.main.temp-273.15));
    const [temperatureType,  setTemperatureType] = useState('Fahrenheit');

    return(
        <Col>
                <h2>Weather</h2>
                <h4>{weatherData.name}</h4>
                <p><strong>Currently</strong> {weatherData.weather[0].main}</p>
                { temperatureType === 'Fahrenheit' ? 
                <>
                {temperatureFahrenheit}&#176; <br /> <Button className="ml-2 mb-3" color="secondary" size="sm" onClick={() => {setTemperatureType('Celsius')}}>Change to Celsius</Button> 
                </>
                :
                <>
                {temperatureCelsius}&#176; <br /> <Button className="ml-2 mb-3" color="secondary" size="sm" onClick={() => {setTemperatureType('Fahrenheit')}}>Change to Fahrenheit</Button>
                </>
                }
                <h5>Humidity</h5>
                <p> {weatherData.main.humidity}%</p>
                <h5>Atmospheric Pressure</h5>
                <p> {pressure} in</p>
                <h5>Wind Speed</h5>
                <p>{windSpeed} mph</p>

        </Col>
    )
}

export default WeatherResults;