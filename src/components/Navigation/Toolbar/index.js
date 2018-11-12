import React from 'react';
import Logo from '../Logo';
import NavigationItems from '../NavigationItems';
import './style.css';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const toolbar = props => (
  <header className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className="LogoSection">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
