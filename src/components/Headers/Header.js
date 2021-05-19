import React from 'react';
import i18n from '../../i18n';
import { NavLink } from 'react-router-dom';
import '../../assets/css/header.css'
import { Icon } from 'semantic-ui-react';
import DrawerToggleButton from '../SideDrawers/DrawerToggleButton';
import LanguageMenu from '../Menu/LanguageMenu';

const Header = props => {

    const handleLanguageSelection = (optionSelected) => {
        var language = optionSelected.target.value
        console.log('language value received: ', language)
        i18n.changeLanguage(language)
    }

    return (
        <header className="header">
            <nav className="header__navigation">
                <div className="header__toggle-button">
                    <DrawerToggleButton click={props.drawerHandler} />
                </div>

                <div className="header__navigation-items">
                    <NavLink exact strict to='/' activeClassName='active'>{i18n.t('category.home')}</NavLink>
                    <NavLink exact to='/hair' activeClassName='active'>{i18n.t('category.hair')}</NavLink>
                    <NavLink exact to='/hygiene' activeClassName='active'>{i18n.t('category.hygiene')}</NavLink>
                    <NavLink exact to='/makeup' activeClassName='active'>{i18n.t('category.makeup')}</NavLink>
                    <NavLink exact to='/perfume' activeClassName='active'>{i18n.t('category.perfumes')}</NavLink>
                    <NavLink exact to='/suncare' activeClassName='active'>{i18n.t('category.suncare')}</NavLink>
                </div>
                <div className="header__cart_account">
                    <LanguageMenu handleLanguageSelection={(optionSelected) => handleLanguageSelection(optionSelected)}/>

            <NavLink exact to='/cart' activeClassName='active'><Icon link name='shopping cart' />
            </NavLink>
            <NavLink exact to='/account' activeClassName='active'><Icon link name='user' /></NavLink>
                </div>
            </nav>
        </header>
    );
}
export default Header;