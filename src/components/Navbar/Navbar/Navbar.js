import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import { Button } from '../Button';
import { Style } from './style.scss';
import { Style2 } from '../style2.scss';
import logo from './logo.png';
 

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <header class="container">
                <nav className="NavbarItems">
                    {<img class="logo" src={logo} alt="logo"/> }
                    {/* {<h1 className="navbar-logo">Growers Brains</h1>} */}
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>

                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <Button>Sign Up</Button>
                    <Button>Sign In</Button>
                </nav>
                
            </header>
        )
    }
}

export default Navbar