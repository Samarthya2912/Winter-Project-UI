import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" activeClassName="nav-link__selected" exact>All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places" activeClassName="nav-link__selected">My Places</NavLink>
            </li>
            <li>
                <NavLink to="/places/new" activeClassName="nav-link__selected">Add Place</NavLink>
            </li>
            <li>
                <NavLink to="/auth" activeClassName="nav-link__selected">Authenticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
