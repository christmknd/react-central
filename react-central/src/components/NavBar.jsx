import React from 'react';
import {NavLink} from 'react-router-dom';
import '../stylesheets/navbar.css';


function Navbar(){

    return (
        <ul>
            <NavLink to="/">
            <li>Home</li>
            </NavLink>

            <NavLink  to="/calendar">
            <li>Calendar</li>
            </NavLink>

            <NavLink  to="/slide">
            <li>Slide</li>
            </NavLink>

            <NavLink  to="/video">
            <li>VideoPlayer</li>
            </NavLink>
        </ul>
    )
}

export default Navbar;