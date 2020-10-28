import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap'
import homeIcon from '../../assets/img/icons8-home-50.png';
import aboutIcon from '../../assets/img/icons8-about-50.png';
import servicesIcon from '../../assets/img/icons8-services-50.png';
import parkingIcon from '../../assets/img/icons8-parking-50.png';
import gasstationIcon from '../../assets/img/icons8-gas-station-50.png';
import contactIcon from '../../assets/img/icons8-contact-details-50.png';
import logo from '../../assets/img/logo_size.jpg';
//import SocialmediaIcons from '../SocialmediaItems/SocialmediaIcons';
import '../../assets/css/sidedrawer.css';

const SideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }

    const styles = {
        icons: {
            width: 18,
            height: 18,
        }
    }

    return (
        <div className={drawerClasses.join(' ')}>
            <div className="side-drawer__logo">
                <Image src={logo} width='100%' height='150' alt='header'  />
            </div>
            <nav>
                <div className="side-drawer-items">
                    <Image src={homeIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/' activeClassName='active' onClick={props.drawerHandler} >  Home</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={aboutIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/about' activeClassName='active' onClick={props.drawerHandler}>Over Ons</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={servicesIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/services' activeClassName='active' onClick={props.drawerHandler}>Services</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={parkingIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/wagenpark' activeClassName='active' onClick={props.drawerHandler}>Wagenpark</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={gasstationIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/tankstations' activeClassName='active' onClick={props.drawerHandler}>Tankstations</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={contactIcon} style={styles.icons} alt="home"/> 
                    <NavLink exact to='/contact' activeClassName='active' onClick={props.drawerHandler}>Contact</NavLink>
                </div>
                <div className="side-drawer-items">
                    <Image src={contactIcon} style={styles.icons} alt="media"/> 
                    <NavLink exact to='/media' activeClassName='active' onClick={props.drawerHandler}>Media</NavLink>
                </div>
            </nav>
            <div className="side-drawer__footer">
                <h2>Footer</h2>
            </div>
        </div>
    );
};

export default SideDrawer;