import React from 'react'
import { Link } from 'react-router-dom'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import NavLinks from './NavLinks'

const MainNavigation = props => {
    return (
        <MainHeader>
            <button className="main-navigation__menu-btn"><i class="bi bi-list"></i></button>
            <h1 className="main-navigation__title"><Link to="/">MyPlaces</Link></h1>
            <nav>
                <NavLinks />
            </nav>
        </MainHeader>
    )
}

export default MainNavigation
