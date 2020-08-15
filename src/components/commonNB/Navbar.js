import React, { Component } from 'react';
import { Button } from './Button';
import './style.scss';
import logo from './logo.png';

const MenuItems = [
    {
        title: 'Daily Grow',
        url: '#'
    },
    {
        title: 'Products',
        url: '#'
    },
    {
        title: 'Consulting',
        url: '#'
    },
    {
        title: 'Green House',
        url: '#'
    },
];
class Navbar extends Component {
    state = { clicked: false }
    
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <header class="container">
                <nav className="navbar-items">
                    {<a href="/"><img class="logo" src={logo} alt="logo" /></a>}
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className='nav-links' href={item.url}>
                                        {item.title}
                                    </a>
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