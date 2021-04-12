import React from 'react';
import '../../assets/css/languagemenu.css'

const LanguageMenu = (props) => (
    <div className="dropdown-container">
        <select name="countries" onChange={props.handleLanguageSelection} >
            <option value="en">EN {String.fromCodePoint(parseInt('1F1EC', 16), parseInt('1F1E7', 16))}</option>
            <option value="es">ES {String.fromCodePoint(parseInt('1F1EA', 16), parseInt('1F1F8', 16))}</option>
        </select>
    </div>
)

export default LanguageMenu;


/**
 *             <option value="en">{String.fromCodePoint(parseInt('1F1EC', 16), parseInt('1F1E7', 16))}</option>
            <option value="es">{String.fromCodePoint(parseInt('1F1EA', 16), parseInt('1F1F8', 16))}</option>
 *         <select name="countries" onChange={props.handleLanguageSelection} >
            <option value='en'>🇳🇱</option>
            <option value='es'>🇪🇸</option>
        </select>
 */