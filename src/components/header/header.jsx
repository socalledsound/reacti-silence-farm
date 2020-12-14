import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import './header.styles.css';

const Header = () => {

    return (
        <div className="header">
            <div className="flex">
                <img src="/logo.jpg" alt="silence farm logo" className="logo"/>
                <NavLink to="/" className="header-title">silence farm</NavLink>
                {/* <div className="divider"> | </div> */}
                <NavLink to="/upload" className="header-link">upload silence</NavLink>
                <div className="divider"> | </div>
                <NavLink to="/about" className="header-link">about</NavLink>
                {/* <div className="divider"> | </div> */}
            </div>
            <div className="flex">
                <NavLink to="/controls" className="header-link">controls</NavLink>
            </div>
        </div>
    )



}
export default Header