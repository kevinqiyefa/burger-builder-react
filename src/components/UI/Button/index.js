import React from 'react';

import './style.css';

const button = props => (
  <button
    className={`Button ${props.btnType}`}
    onClick={props.clicked}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default button;
