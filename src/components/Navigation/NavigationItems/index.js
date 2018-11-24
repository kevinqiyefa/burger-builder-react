import React from 'react';

import './style.css';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
