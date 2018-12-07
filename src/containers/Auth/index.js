import React, { Component } from 'react';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';

import { auth, setAuthRedirectPath } from '../../store/actions/';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner';
import { checkValidity } from '../../share/checkValidity';
import './style.css';

class Auth extends Component {
  state = {
    authForm: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },

      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'enter password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isSignup: true
  };

  componentDidMount() {
    if (!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
      this.props.setAuthRedirectPath();
    }
  }

  inputChangedHandler = (event, controlName) => {
    const updatedAuthForm = {
      ...this.state.authForm,
      [controlName]: {
        ...this.state.authForm[controlName],
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.authForm[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ authForm: updatedAuthForm });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.auth(
      this.state.authForm.email.value,
      this.state.authForm.password.value,
      this.state.isSignup
    );
  };

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return { isSignup: !prevState.isSignup };
    });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.authForm) {
      formElementsArray.push({
        id: key,
        config: this.state.authForm[key]
      });
    }

    let formContent = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    if (this.props.loading) {
      formContent = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    if (this.props.isAuthenticated) {
      return <Redirect to={this.props.authRedirectPath} />;
    }

    return (
      <div className="Auth">
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {formContent}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType="Danger">
          SWITCH TO {this.state.isSignup ? 'SIGNIN' : 'SIGNUP'}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buildingBurger: state.burgerBuilder.building,
    authRedirectPath: state.auth.authRedirectPath
  };
};

export default connect(
  mapStateToProps,
  { auth, setAuthRedirectPath }
)(Auth);
