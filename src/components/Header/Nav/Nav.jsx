import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav style={{height: '100vh'}}>
      <ul className='header__list'>
        <li className='header__item'>
          <NavLink className='header__link' to='/'>
            <i className="fal fa-home-alt"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/products'>
            <i className="far fa-badge-percent"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/dashboard'>
            <i className="fal fa-chart-pie-alt"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/mail'>
            <i className="fal fa-envelope-open"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/notfilication'>
            <i className="far fa-bell"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/settings'>
            <i className="fal fa-cog"></i>
          </NavLink>
        </li>
        <li className='header__item'>
          <NavLink className='header__link' to='/log-out'>
            <i className="fal fa-sign-out-alt"></i>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
