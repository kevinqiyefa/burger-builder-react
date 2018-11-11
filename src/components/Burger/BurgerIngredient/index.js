import React, { Component } from 'react';
import './style.css';
import PropTypes from 'prop-types';

const r = require('react');

console.log(r.version);

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className="BreadBottom" />;
        break;
      case 'bread-top':
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1" />
            <div className="Seeds2" />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className="Meat" />;
        break;
      case 'cheese':
        ingredient = <div className="Cheese" />;
        break;
      case 'bacon':
        ingredient = <div className="Bacon" />;
        break;
      case 'salad':
        ingredient = <div className="Salad" />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

BurgerIngredient.protoTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
