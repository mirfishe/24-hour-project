import React, { useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import './NASA.css';
import imgPlacehold from './assets/Map-2-icon.png';


const baseNASA_URL = 'https://api.nasa.gov/planetary/earth/imagery'
const api_key = 'BYJLRhF7aUhylkiuwEYnRjfyTgdlQPb8EyGfBjZr'

const NASA = (props) => {

    const [NASAData, setNASAData] = useState(imgPlacehold);
    const [location, setLocation] = useState('Your Location')

    // const getLocation = () => {

    //     let baseURL = 'https://developers.zomato.com/api/v2.1/search?';
    //     let searchString = `lat=${props.latitude}&lon=${props.longitude}&&sort=real_distance`;
    //     let zomatoAPIKey= "ac470f024f2131c285d68377ed5cc6d0";
        
    //     fetch(baseURL + searchString, {
    //         method: 'GET',
    //         headers:    new Headers ({
    //             'Content-Type': 'application/json',
    //             'user-key': zomatoAPIKey
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(location => setLocation(location.restaurants[0].restaurant.location.city))
    //     .catch(err => console.log(err))
        
    // };
    
    const fetchNASA = () => {
    let url = `${baseNASA_URL}?lon=${props.longitude}&lat=${props.latitude}&dim=0.10&date=2016-01-01&api_key=${api_key}`
    // console.log(url);
    fetch(url)
    .then(res => res.blob())
    .then(photo => {
        let photoURL = URL.createObjectURL(photo)
        setNASAData(photoURL)
    })
    .catch(err => console.log(err))
    };

    useEffect(() => {
        fetchNASA();
        // getLocation();
    }, []);

    return (
        <Container>
            {/* <h2>{location}</h2> */}
           <img src={NASAData} alt='map of your area'/>
        </Container>
    );
};

export default NASA;