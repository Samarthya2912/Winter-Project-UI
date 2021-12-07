import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "../../contexts/auth-context";
import Button from "../../FormElelments/Button";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" activeClassName="nav-link__selected" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`} activeClassName="nav-link__selected">
            My Places
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && <li>
        <NavLink to="/places/new" activeClassName="nav-link__selected">
          Add Place
        </NavLink>
      </li>}
      {auth.isLoggedIn || (
        <li>
          <NavLink to="/auth" activeClassName="nav-link__selected">
            Authenticate
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && <Button onClick={() => { auth.logout() }}>LOGOUT</Button>}
    </ul>
  );
};

export default NavLinks;
