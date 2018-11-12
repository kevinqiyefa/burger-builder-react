import Aux from '../../hoc/Aux';
import React from 'react';
import './style.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
