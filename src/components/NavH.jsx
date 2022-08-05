import React from 'react';
import logo from '../assets/logo.png'
import '../styles/components/Nav-h.css'

const NavH = () => {
    return (
        <div className='Nav-h'>
            <img className="logo" src={logo} alt="Sport See logo" />
            <nav className='nav-h'>
                <span className="nav-h_menu">Accueil</span>
				<span className="nav-h_menu">Profil</span>
				<span className="nav-h_menu">Réglages</span>
				<span className="nav-h_menu">Communauté</span>
            </nav>
        </div>
    );
};

export default NavH;