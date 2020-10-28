import React from 'react';
import '../../assets/css/backdrop.css';

const Backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default Backdrop;
