import React from 'react';

import './style.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'textarea':
      inputElement = <textarea className="InputElement" {...props} />;
      break;

    default:
      inputElement = <input className="InputElement" {...props} />;
  }

  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
