import React from 'react';
import './style.css';
import BurgerIngredien from './BurgerIngredien';

const burger = props => {
  return (
    <div className="Burger">
      <BurgerIngredien type="bread-top" />
      <BurgerIngredien type="cheese" />
      <BurgerIngredien type="meat" />
      <BurgerIngredien type="bread-bottom" />
    </div>
  );
};

export default burger;
