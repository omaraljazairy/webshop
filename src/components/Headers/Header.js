import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/header.css'
import { Icon } from 'semantic-ui-react';

const Header = props => (
    <header className="header">
        <nav className="header__navigation">
            <div className="header__navigation-items">
                <NavLink exact strict to='/' activeClassName='active' >Home</NavLink>
                <NavLink exact to='/clothes' activeClassName='active'>Clothes</NavLink>
                <NavLink exact to='/toys' activeClassName='active'>Toys</NavLink>
                <NavLink exact to='/shoes' activeClassName='active'>Shoes</NavLink>

                {/* <NavLink exact isActive={(match, location) => {
                    console.log("match: ", match, " & location: ", location)
                }} to='/shoes' activeClassName='active'>Shoes</NavLink> */}
            </div>
            <div className="header__cart_account">
                <Icon link name='shopping cart' />
                <Icon link name='user' />
            </div>
        </nav>
    </header>
);

export default Header;