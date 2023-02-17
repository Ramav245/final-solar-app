import React from 'react'
import Card from 'react-bootstrap/Card';

const InfoCardBS = (props) => {
  return (
    <body>
        <div class="container">
    <Card style={{ width: '15rem'}}>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    </Card>
    </div>
    </body>
  )
}

export default InfoCardBS