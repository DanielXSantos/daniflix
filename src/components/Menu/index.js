import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="DaniFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                novo vídeo
            </Button>
        </nav>
    );
}


export default Menu;

// 880 -219 64