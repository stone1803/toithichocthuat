import React from "react";

const TIpsSumday = ({ tip }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{tip.title}</span>
        <p>{tip.content}</p>
        <p className="grey-text">Xem Chi Tiết</p>
      </div>
    </div>
  );
};

export default TIpsSumday;
