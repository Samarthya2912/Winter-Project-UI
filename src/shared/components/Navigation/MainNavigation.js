import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'
import SideDrawer from './SideDrawer'

const MainNavigation = props => {
    const sideDrawerRef = useRef();

    function clickHandler() {
        sideDrawerRef.current.classList.toggle("side-drawer__show");
    }

    return (
        <>
        <SideDrawer sideDrawerRef={sideDrawerRef}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={clickHandler}><i class="bi bi-list"></i></button>
            <h1 className="main-navigation__title"><Link to="/">MyPlaces</Link></h1>
            <nav className="main-navigation__nav-links">
                <NavLinks sideDrawerRef={sideDrawerRef} />
            </nav>
        </MainHeader>
        </>
    )
}

export default MainNavigation
