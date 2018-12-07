import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary';
import Modal from '../../components/UI/Modal';
import Spinner from '../../components/UI/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';

import {
  addIngredient,
  removeIngredient,
  initIngredients,
  purchaseInit,
  setAuthRedirectPath
} from '../../store/actions';

export class BurgerBuilder extends Component {
  state = {
    purchasing: false
  };

  componentDidMount() {
    this.props.initIngredients();
  }

  updatePurchaseState(ingredients) {
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el);
    return sum > 0;
  }

  purchaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.setAuthRedirectPath('/checkout');
      this.props.history.push('/auth');
    }
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.purchaseInit();
    this.props.history.push('/checkout');
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded!</p>
    ) : (
      <Spinner />
    );

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.addIngredient}
            ingredientRemoved={this.props.addIngredient}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.ings)}
            ordered={this.purchaseHandler}
            isAuth={this.props.isAuthenticated}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          price={this.props.price}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(
  mapStateToProps,
  {
    addIngredient,
    removeIngredient,
    initIngredients,
    purchaseInit,
    setAuthRedirectPath
  }
)(withErrorHandler(BurgerBuilder, axios));
