import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap';
import './Zomato.css';

const Zomato = (props) => {

    const [latitude, setLatitude] = useState(props.latitude);
    const [longitude, setLongitude] = useState(props.longitude);
    const [restaurants, setRestaurants] = useState([]);
    const [weather, setRestaurants] = useState([]);

    const fetchRestaurants = () => {

        // console.log("Latitude: ", latitude, "Longitude: " + longitude);

        // Latitude:  39.9572992 Longitude: -86.1208576
        // setLatitude('39.9572992');
        // setLongitude('-86.1208576');

        let baseURL = 'https://developers.zomato.com/api/v2.1/search?';
        let searchString = `lat=${latitude}&lon=${longitude}`;
        let ZOMATO_API_KEY = "ac470f024f2131c285d68377ed5cc6d0";
        

        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${latitude}&lon=${longitude}`, {
            method: 'GET',
            headers:    new Headers ({
                'Content-Type': 'application/json',
                'user-key': ZOMATO_API_KEY
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