import React from 'react';

import Logo from '../Logo';
import NavigationItems from '../NavigationItems';
import './style.css';
import Backdrop from '../../UI/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = props => {
  let attachedClasses = 'SideDrawer Close';
  if (props.open) {
    attachedClasses = 'SideDrawer Open';
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses} onClick={props.closed}>
        <div className="SideDrawerLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
