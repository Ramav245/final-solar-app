import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardBS(props) 
{
  return (

    <Card style={{ width: '15rem'}}>
    <Card.Img variant="top" src={process.env.PUBLIC_URL+ props.url }/>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Contact Us</Button>
    </Card.Body>
    </Card>


      )
}

export default CardBS


