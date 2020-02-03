import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedLink from "./SignedLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";
class Navbar extends Component {
  render() {
    let { auth } = this.props;
    let linkAuth = auth.uid ? <SignedLink /> : <SignedOutLink />;

    return (
      <nav className="nav-wrapper grey darken-2">
        <div className="">
          <Link to="/" className="brand-logo left">
            TIPS
          </Link>
          {linkAuth}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebaseReducer.auth
  };
};
export default connect(mapStateToProps)(Navbar);
