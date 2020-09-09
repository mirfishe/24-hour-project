import React, { useState, useEffect} from 'react';
import {Container} from 'reactstrap';
import './NASA.css';
import imgPlacehold from './assets/Map-2-icon.png'

const baseNASA_URL = 'https://api.nasa.gov/planetary/earth/imagery'
const api_key = 'BYJLRhF7aUhylkiuwEYnRjfyTgdlQPb8EyGfBjZr'

const NASA = (props) => {

    const [NASAData, setNASAData] = useState({});
    
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
    }, []);

    return (
        <Container className="border">
           <img src={NASAData} alt={imgPlacehold}/>
        </Container>
    );
};

export default NASA;