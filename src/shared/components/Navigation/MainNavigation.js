import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'
import Backdrop from '../../UIElements/Backdrop'

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    function openDrawer() {
        setDrawerIsOpen(true);
    }

    function closeDrawer() {
        setDrawerIsOpen(false);
    }

    return (
        <>
            {
                drawerIsOpen && <Backdrop clickHandler={closeDrawer} />
            }
            <SideDrawer show={drawerIsOpen}>
                <nav>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button onClick={openDrawer} className="main-navigation__menu-btn"><i className="bi bi-list"></i></button>
                <h1 className="main-navigation__title"><Link to="/">MyPlaces</Link></h1>
                <nav className="main-navigation__nav-links">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    )
}

export default MainNavigation
