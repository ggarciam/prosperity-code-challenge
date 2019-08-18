import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            {" | "}
            <Link to="/houses">Houses</Link>
        </nav>
    );
};

export default Header;
