import React, { useState, useEffect } from 'react';
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import './Restaurant.css';

const Restaurant = (props) => {

    // console.log(props);

    return (
            <div className="main">
                <Card className="mainCard">
                    <CardTitle>{props.restaurant.restaurant.name}</CardTitle>
                    <CardBody>
                        <CardText>{props.restaurant.restaurant.cuisines}</CardText>
                        <CardText>{props.restaurant.restaurant.average_cost_for_two}</CardText>
                        <CardText>{props.restaurant.restaurant.phone_numbers}</CardText>
                        <CardText>{props.restaurant.restaurant.location.address}</CardText>
                        <CardText>{props.restaurant.restaurant.user_rating.aggregate_rating}, {props.restaurant.restaurant.user_rating.rating_text}</CardText>
                    </CardBody>
                </Card>
            </div>
    );
};

export default Restaurant;