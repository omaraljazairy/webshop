import React from 'react';
import '../../assets/css/drawertogglebutton.css'

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
     <h3>X</h3>
    </button>
);

export default DrawerToggleButton;