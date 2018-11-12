import React from 'react';
import Logo from '../Logo';

import './style.css';

const toolbar = props => (
  <header className="Toolbar">
    <div>Menu</div>
    <div className="LogoSection">
      <Logo />
    </div>
    <nav>...</nav>
  </header>
);

export default toolbar;
