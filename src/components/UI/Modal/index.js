import React, { Component } from 'react';

import './style.css';

class Modal extends Component {
  render() {
    return <div className="Modal">{this.props.children}</div>;
  }
}

export default Modal;
