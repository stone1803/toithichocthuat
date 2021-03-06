import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ReactHtmlParser from "react-html-parser";

import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon
} from "react-share";
const TipsDetail = props => {
  console.log(props);
  const { tip } = props;
  if (tip) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{tip.title}</span>
            <div className="left-align"> {ReactHtmlParser(tip.content)}</div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Tác Giả : {tip.authorFullName}</div>
            <div>
              <FacebookShareCount url="">
                {shareCount => (
                  <span className="myShareCountWrapper">{shareCount}</span>
                )}
              </FacebookShareCount>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const tips = state.firestoreReducer.data.tips;
  const tip = tips ? tips[id] : null;
  return {
    tip: tip
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "tips"
    }
  ])
)(TipsDetail);
