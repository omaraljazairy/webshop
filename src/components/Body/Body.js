import React from 'react';
import '../../assets/css/style.css';
import { Container } from 'react-bootstrap';

const Body = (props) => (
    <Container className="body">
        {props.children}
    </Container>
);

export default Body;