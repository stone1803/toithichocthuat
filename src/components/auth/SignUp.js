import React, { Component } from "react";
import { actionSignUp } from "../store/action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.SignUp(this.state);
  };
  render() {
    let {auth}= this.props
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="black-text grey-text"> SingIn</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-pink">GO </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.authReducer.error,
    auth: state.firebaseReducer.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SignUp: reg => dispatch(actionSignUp(reg))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
