import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../../../store/actions';

class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default connect(
  null,
  { logout }
)(Logout);
