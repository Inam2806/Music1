import React from 'react';
import './styles/style.scss';
import { Link } from 'react-router-dom';
import './styles/navbar.scss';

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
            <div className="nav-item">
                    <Link to='/' rel='noopener noreferrer'>
                        Home
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/About' rel='noopener noreferrer'>
                        About
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to='/Contact' rel='noopener noreferrer'>
                        Contact
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;
