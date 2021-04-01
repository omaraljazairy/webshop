import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/header.css'
import { Icon } from 'semantic-ui-react';
import DrawerToggleButton from '../SideDrawers/DrawerToggleButton';

const Header = props => (
    <header className="header">
        <nav className="header__navigation">
            <div>
                <DrawerToggleButton click={props.drawerHandler} />
            </div>

            <div className="header__navigation-items">
                <NavLink exact strict to='/' activeClassName='active' >Home</NavLink>
                <NavLink exact to='/clothes' activeClassName='active'>Clothes</NavLink>
                <NavLink exact to='/toys' activeClassName='active'>Toys</NavLink>
                {/* <NavLink exact to='/markets' activeClassName='active'>Markets</NavLink> */}
                {/* <NavLink exact to='/shoes' activeClassName='active'>Shoes</NavLink> */}
            </div>
            <div className="header__cart_account">
        <NavLink exact to='/cart' activeClassName='active'><Icon link name='shopping cart' />
        </NavLink>
        <NavLink exact to='/account' activeClassName='active'><Icon link name='user' /></NavLink>
            </div>
        </nav>
    </header>
);

export default Header;