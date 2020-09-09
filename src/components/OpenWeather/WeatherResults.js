import React, { useState } from 'react';
import {Container, Button} from 'reactstrap';
import './WeatherResults.css';

const WeatherResults = (props) => {

    // console.log(props);
    let weatherData = props.weatherData;
    // console.log(weatherData);

    // const [temperatureKelvin, setTemperatureKelvin] = useState(weatherData.main.temp);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
    const [temperatureCelsius,  setTemperatureCelsius] = useState(Math.floor(weatherData.main.temp-273.15));
    const [temperatureType,  setTemperatureType] = useState('Fahrenheit');

    return(
        <div className="col">
                <h2 className="text-center">{weatherData.name}</h2>
                <p>{weatherData.weather[0].main}</p>
                { temperatureType == 'Fahrenheit' ? 
                <>
                {temperatureFahrenheit}&#176; <Button className="ml-2 mb-3" color="secondary" size="sm" onClick={() => {setTemperatureType('Celsius')}}>Change to Celsius</Button> 
                </>
                :
                <>
                {temperatureCelsius}&#176; <Button className="ml-2 mb-3" color="secondary" size="sm" onClick={() => {setTemperatureType('Fahrenheit')}}>Change to Fahrenheit</Button>
                </>
                }
                <h5>Humidity</h5>
                <p> {weatherData.main.humidity}%</p>
                <h5>Atmospheric Pressure</h5>
                <p> {weatherData.main.pressure}</p>
                <h5>Wind Speed</h5>
                <p>{weatherData.wind.speed}</p>
        </div>
    )
}

export default WeatherResults;