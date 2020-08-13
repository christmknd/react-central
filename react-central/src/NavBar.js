import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';

function Navbar(){

    return (
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>

            <Link to="/calendar">
            <li>Calendar</li>
            </Link>

            <Link to="/slide">
            <li>Slide</li>
            </Link>

            <Link to="/todo">
            <li>Todolist</li>
            </Link>

            <Link to="/video">
            <li>VideoPlayer</li>
            </Link>
        </ul>
    )
}

export default Navbar;