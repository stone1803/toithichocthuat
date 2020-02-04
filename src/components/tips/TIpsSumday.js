import React from "react";
import ReactHtmlParser from "react-html-parser";
import moment from "moment";
const TIpsSumday = ({ tip }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{tip.title}</span>
        <div>
          {tip.des.length > 500
            ? ReactHtmlParser(tip.des.substr(0, 400)) + "..."
            : ReactHtmlParser(tip.des)}
        </div>
        <p className="grey-text">Xem Chi Tiết</p>
        <p className="grey-text">
          Ngày Tạo : {moment(tip.createDay.toDate()).fromNow()}
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default TIpsSumday;
