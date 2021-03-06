import React, {useState, useEffect} from 'react';
import {Row} from 'reactstrap';
import './Zomato.css';
import Restaurant from './Restaurant';

const Zomato = (props) => {

    const [latitude, setLatitude] = useState(props.latitude);
    const [longitude, setLongitude] = useState(props.longitude);
    const [restaurants, setRestaurants] = useState([]);

    const fetchRestaurants = () => {

        // console.log("Latitude: ", latitude, "Longitude: " + longitude);

        // Latitude:  39.9572992 Longitude: -86.1208576
        // setLatitude('39.9572992');
        // setLongitude('-86.1208576');

        let baseURL = 'https://developers.zomato.com/api/v2.1/search?';
        let searchString = `lat=${latitude}&lon=${longitude}&sort=real_distance&radius=500`;
        let zomatoAPIKey= "ac470f024f2131c285d68377ed5cc6d0";
        

        fetch(baseURL + searchString, {
            method: 'GET',
            headers:    new Headers ({
                'Content-Type': 'application/json',
                'user-key': zomatoAPIKey
            })
        })
        .then(res => res.json())
        .then(restaurantData => setRestaurants(restaurantData.restaurants))
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
            <Row>
            {/* {restaurants.length} */}
            {restaurants.length > 0 ? restaurants.map(restaurant => <Restaurant restaurant={restaurant} />) : ''}
            </Row>
    );
};

export default Zomato;