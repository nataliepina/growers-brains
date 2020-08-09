import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar__navigation">
                <div className="navbar__logo" ><NavLink exact to="/GrowersBrain">INSER LOGO HERE</NavLink></div>
                <div className="spacer" />
                <div className="navbar_navigation-items" >
                    <ul>
                        <li>
                            <NavLink 
                                exact
                                activeClassName="navbar__link--active"                        
                                to="/dailygrow"
                                >
                                    Daily Grow
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                exact
                                activeClassName="navbar__link--active"
                                to="/products"
                                >
                                    Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                exact
                                activeClassName="navbar__link--active"
                                to="/consulting"
                                >
                                    Consulting
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                exact
                                activeClassName="navbar__link--active"
                                to="/greenhouse"
                                >
                                    Green House
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="spacer" />
                <div className="signin-up">
                    <div className="sign-button pointer">
                        <NavLink exact to="/signin">Sign In </NavLink>
                    </div>
                    <div className="sign-button pointer">
                        <NavLink exact to="/signin">Sign In </NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
