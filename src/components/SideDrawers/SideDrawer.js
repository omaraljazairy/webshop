import React from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap'
// import { Icon } from 'semantic-ui-react';
import i18n from '../../i18n';
// import LanguageMenu from '../Menu/LanguageMenu';
// import homeIcon from '../../assets/img/icons8-home-50.png';
// import aboutIcon from '../../assets/img/icons8-about-50.png';
// import servicesIcon from '../../assets/img/icons8-services-50.png';
// import parkingIcon from '../../assets/img/icons8-parking-50.png';
// import gasstationIcon from '../../assets/img/icons8-gas-station-50.png';
// import contactIcon from '../../assets/img/icons8-contact-details-50.png';
import logo from '../../assets/img/logo_size.jpg';
import '../../assets/css/sidedrawer.css';

const SideDrawer = props => {

    let drawerClasses = ['side-drawer'];

    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }

    return (
        <div className={drawerClasses.join(' ')}>
            <div className="side-drawer__logo">
                <Image src={logo} width='100%' height='150' alt='header'  />
            </div>
            <div className="side-drawer__header">
            </div>
            <nav>
                <div className="side-drawer-items">
                    {/* <Image src={homeIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact strict to='/' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.home')}</NavLink>
                </div>
                <div className="side-drawer-items">
                    {/* <Image src={homeIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact strict to='/hair' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.hair')}</NavLink>
                </div>
                <div className="side-drawer-items">
                    {/* <Image src={aboutIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact to='/hygiene' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.hygiene')}</NavLink>
                </div>
                <div className="side-drawer-items">
                    {/* <Image src={servicesIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact to='/makeup' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.makeup')}</NavLink>
                </div>
                <div className="side-drawer-items">
                    {/* <Image src={parkingIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact to='/perfume' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.perfumes')}</NavLink>
                </div>
                <div className="side-drawer-items">
                    {/* <Image src={gasstationIcon} style={styles.icons} alt="home"/>  */}
                    <NavLink exact to='/suncare' activeClassName='active' onClick={props.drawerHandler}>{i18n.t('category.suncare')}</NavLink>
                </div>
            </nav>
            <div className="side-drawer__footer">
            </div>
        </div>
    );
};

export default SideDrawer;

