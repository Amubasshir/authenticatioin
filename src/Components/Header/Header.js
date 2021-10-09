import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Link to = "/home">Home</Link>
            <link to = "/register">Register</link>
            <link to = "/login">Login</link>
        </div>
    );
};

export default Header;