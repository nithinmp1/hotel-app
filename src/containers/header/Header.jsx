import React from 'react';
import './header.css';
import menu from '../../assets/menu.png';

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header__logo'>
        <img className='app__logo' src={menu}></img>
      </div>
      <div className='app__header__user'>
        <span className='app__header__vertical__line'></span>
        header
      </div>
    </div>
  )
}

export default Header