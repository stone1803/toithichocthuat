import React, { Component } from "react";
import { connect } from "react-redux";
import { actionsignIn } from "../store/action/authAction";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    console.log(this.props.auth);
    let { error,auth } = this.props;
    if(auth.uid){

    return    <Redirect to="/"/>
    }
    console.log(this.props.error);
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
            <button className="btn btn-pink">Login </button>
          </div>
          <div>{error ? <p>{error}</p> : null}</div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: cer => dispatch(actionsignIn(cer))
  };
};
const mapStateToProps = state => {
  return {
    error: state.authReducer.error,
    auth: state.firebaseReducer.auth

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
