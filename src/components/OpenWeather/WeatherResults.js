import React, { useState } from 'react';
import {Container, Button} from 'reactstrap';
import './WeatherResults.css';

const WeatherResults = (props) => {

    // console.log(props);
    let weatherData = props.weatherData;
    console.log(weatherData);

    const [temperatureKelvin, setTemperatureKelvin] = useState(weatherData.main.temp);
    const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(Math.floor(((weatherData.main.temp-273.15)*1.8)+32));
    const [temperatureCelsius,  setTemperatureCelsius] = useState(Math.floor(weatherData.main.temp-273.15));
    const [temperatureType,  setTemperatureType] = useState('Fahrenheit');




    return(
        <Container>
                <h2>{weatherData.name}</h2>
                <p>{weatherData.weather[0].main}</p>
                { temperatureType == 'Fahrenheit' ? 
                <>
                {temperatureFahrenheit}&#176; <Button color="secondary ml=2" onClick={() => {setTemperatureType('Celsius')}}>Change to Celsius</Button> 
                </>
                :
                <>
                {temperatureCelsius}&#176; <Button color="secondary ml=2" onClick={() => {setTemperatureType('Fahrenheit')}}>Change to Fahrenheit</Button>
                </>
                }
                
        </Container>
    )
}

export default WeatherResults;