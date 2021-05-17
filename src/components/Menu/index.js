import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/devflix.png';
import { Button } from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link as="a" to="/">
        <img className="Logo" src={Logo} alt="DevFlix logo" />
      </Link>

      <Button as="a" to="/cadastro/video" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
