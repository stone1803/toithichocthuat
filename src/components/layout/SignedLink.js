import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { actionsignOut } from "../store/action/authAction";
class SignedLink extends Component {
  render() {
    let { LogOut,profile } = this.props;
    console.log(this.props)
    return (
      <ul className="right">
        <li>
          <NavLink to="/CreateTips">Tips News</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={LogOut}>
            Log Out
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {profile.nickname}
          </NavLink>
        </li>
      </ul>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    LogOut: ()  => dispatch(actionsignOut())
  };
};
export default connect(null, mapDispatchToProps)(SignedLink);
