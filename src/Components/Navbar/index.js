import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Navbar=(props)=>{

    const submitSearch=(a)=>{
        a.preventDefault();
        alert('Searched');
    }
    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="login">Login</NavLink></li>
                <li><NavLink to="post">Posts</NavLink></li>
                <li><NavLink to="contactus">Contact Us</NavLink></li>
                





            </ul>
            <div className="Search">
                <form onSubmit={submitSearch}>
            <input type="text" className="Search-bar" placeholder="Search....."></input>
            </form>

    
            
            </div>

        </div>
    )
}

export default Navbar