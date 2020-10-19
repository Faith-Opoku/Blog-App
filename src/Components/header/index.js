import React from 'react';
import './style.css'

const Header =(props)=>{
    return (
        <header className="header">
            <nav className="headerMenu">
            <a href="a">Home</a>
            <a href="a">About Us</a>
            <a href="a">Contact Us</a>
            
            </nav>
            <div>
                Social Media Links
            </div>
        </header>
    )
}

export default Header;