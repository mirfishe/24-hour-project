import React from 'react';
import {Card, CardBody, CardTitle, CardText, Col} from 'reactstrap';
import './Restaurant.css';

const Restaurant = (props) => {

    // console.log(props);

    return (
        <Col md="4">
            <Card id="card" className="p-2">
                <h3>
                <CardTitle>{props.restaurant.restaurant.name}</CardTitle>
                </h3>
                <CardBody>
                    <h5>Cuisine</h5>
                    {props.restaurant.restaurant.cuisines !== '' ? <CardText>{props.restaurant.restaurant.cuisines}</CardText> : <CardText>No Data Available</CardText>}
                    <h5>Average Price</h5>
                    {/* <CardText>{props.restaurant.restaurant.average_cost_for_two}</CardText> */}
                    {props.restaurant.restaurant.average_cost_for_two > 0 ? <CardText>${props.restaurant.restaurant.average_cost_for_two}</CardText> : <CardText>No Price Available</CardText>}
                    <h5>Phone Number</h5> 
                    <CardText>{props.restaurant.restaurant.phone_numbers}</CardText>
                    <h5>Address</h5>
                    <CardText>{props.restaurant.restaurant.location.address}</CardText>
                    <h5>Rating</h5>
                    {props.restaurant.restaurant.user_rating.rating_text === 'Not rated' ? <CardText>No Rating Available</CardText> : <CardText>{props.restaurant.restaurant.user_rating.aggregate_rating}, {props.restaurant.restaurant.user_rating.rating_text}</CardText>}
                </CardBody>
            </Card>
        </Col>
    );
};

export default Restaurant;