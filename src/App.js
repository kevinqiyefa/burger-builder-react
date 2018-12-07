import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './components/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
import Logout from './containers/Auth/Logout';
import asyncComponent from './hoc/asyncComponent';
import { authCheckState } from './store/actions';

const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout');
});

const asyncOrders = asyncComponent(() => {
  return import('./containers/Checkout/Orders');
});

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth');
});

class App extends Component {
  componentDidMount() {
    this.props.authCheckState();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" component={asyncOrders} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { authCheckState }
  )(App)
);
