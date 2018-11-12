import React from 'react';
import Logo from '../Logo';
import NavigationItems from '../NavigationItems';
import './style.css';

const toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <div className="LogoSection">
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
