import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './Zomato.css';

const Zomato = (props) => {

    const [latitude, setLatitude] = useState(props.latitude);
    const [longitude, setLongitude] = useState(props.longitude);
    const [restaurants, setRestaurants] = useState([]);

    // const getLocation = () => {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //       console.log("Geolocation is not supported by this browser.");
    //     }
    //   };

    //   function showPosition(position) {
    //     console.log("Latitude: ", position.coords.latitude, "Longitude: " + position.coords.longitude);
    //   };

    const fetchRestaurants = () => {

        // console.log("Latitude: ", latitude, "Longitude: " + longitude);

        // Latitude:  39.9572992 Longitude: -86.1208576
        // setLatitude('39.9572992');
        // setLongitude('-86.1208576');

        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}`, {
            method: 'GET',
            headers:    new Headers ({
                'Content-Type': 'application/json',
                'user-key': process.env.REACT_APP_ZOMATO_API_KEY
            })
        })
        .then(res => res.json())
        .then(restaurantData => {setRestaurants(restaurantData); console.log(restaurantData);})
        .catch(err => console.log(err))
        
    };

    // useEffect(() => {
    //     // getLocation();
    //     setLatitude(props.latitude);
    //     setLongitude(props.longitude);
    //     // console.log("Latitude: ", latitude, "Longitude: " + longitude);
    //     fetchRestaurants();
    // }, [props.latitude, props.longitude]);

    useEffect(() => {
        fetchRestaurants();
    }, []);


    return (
        <Container>
            Zomato
        </Container>
    );
};

export default Zomato;