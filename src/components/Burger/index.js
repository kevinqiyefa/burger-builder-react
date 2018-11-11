import React from 'react';
import './style.css';
import BurgerIngredient from './BurgerIngredient';

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    });
  });
  transformedIngredients = [].concat(...transformedIngredients);

  if (!transformedIngredients.length) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
