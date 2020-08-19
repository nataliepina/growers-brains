import React, { Component } from 'react';
import { Button } from './Button';
import './style.scss';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const MenuItems = [
    {
        title: 'Daily Grow',
        url: '/dailygrow'
    },
    {
        title: 'Products',
        url: '/products'
    },
    {
        title: 'Consulting',
        url: '/consulting'
    },
    {
        title: 'Green House',
        url: '/greenhouse'
    },
];
class Navbar extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <header className="nav-container">
                <nav className="navbar-items">
                    {<a href="/"><img className="nav-logo" src={logo} alt="logo" /></a>}
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='nav-item' key={index}>
                                    <Link className='nav-links' to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                    <a href="/login"><Button>Sign In</Button></a>
                    <a href="/signup"><Button>Sign Up</Button></a>
                </nav>

            </header>
        )
    }
}

export default Navbar