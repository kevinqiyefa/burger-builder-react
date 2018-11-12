import Aux from '../../hoc/Aux';
import React from 'react';
import './style.css';
import Toolbar from '../Navigation/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
