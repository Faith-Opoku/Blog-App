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
                <li><NavLink to="home">Home</NavLink></li>
                <li><NavLink to="post">Login</NavLink></li>
                <li><NavLink to="features">Posts</NavLink></li>
                <li><NavLink to="current">Features</NavLink></li>





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