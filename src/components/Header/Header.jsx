import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/images/logo.svg'
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <div className='header'>
      <Link className='header__logo' to='/'>
        <img src={logo} alt="logo" />
      </Link>
      <Nav />
    </div>
  );
}

export default Header;
