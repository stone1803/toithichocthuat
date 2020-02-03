import React from "react";
import TIpsSumday from "./TIpsSumday";
import { Link } from "react-router-dom";
const TipsItem = ({ tip }) => {
  return (
    <div className="project-list section">
      {tip &&
        tip.map((tip, index) => {
          return (
            <Link to={"/tips/" + tip.id} key={index}>
              <TIpsSumday tip={tip}  />
            </Link>
          );
        })}
    </div>
  );
};

export default TipsItem;
