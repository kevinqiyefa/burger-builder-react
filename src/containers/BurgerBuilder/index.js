import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary';
import Modal from '../../components/UI/Modal';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el);
    this.setState({ purchasable: sum > 0 });
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    alert('You continue!');
  };

  addIngredientHandler = type => {
    let updatedIngredients = { ...this.state.ingredients };

    updatedIngredients[type] = this.state.ingredients[type] + 1;

    let updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });

    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientHandler = type => {
    let updatedIngredients = { ...this.state.ingredients };

    if (!this.state.ingredients[type]) return;
    updatedIngredients[type] = this.state.ingredients[type] - 1;

    let updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
