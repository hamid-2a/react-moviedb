import React from 'react';
import "./header.styles.css"
import Logo from "../../assets/logo.png";

const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" />
            <h2>React Movie DB</h2>
        </div>
    )
}

export default Header;

