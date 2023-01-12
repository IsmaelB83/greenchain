// Node imports
import Moment from 'moment';
// React components
import Card from 'react-bootstrap/Card';
// Own Styles
import React from 'react';
import './AssetCard.css'

function AssetCard(props) {
    
    const { address, code, operational, registrationDate, type } = props;    
    Moment.locale('es');

    return (
        <Card
          bg={type===1?'success':'info'}
          key={code}
          text={code}
          className="AssetCard"
        >
            <Card.Header>{code}</Card.Header>
            {/* <Card.Body>
                <Card.Title>{Moment(registrationDate).format('DD/MM/YYYY')}</Card.Title>
                <Card.Text>{address}</Card.Text>
            </Card.Body> */}
        </Card>
    );
}

export default AssetCard;