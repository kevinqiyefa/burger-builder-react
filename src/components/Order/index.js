import React from 'react';

import './style.css';

const order = props => {
  return (
    <div className="Order">
      <p>Ingredients: </p>
      <p>
        Price: <strong>USD $5.80</strong>
      </p>
    </div>
  );
};

export default order;
