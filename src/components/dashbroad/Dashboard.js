import React from "react";
import Nofitications from "./Nofitications";
import TipsItem from "../tips/TipsItem";

import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

export default function Dashboard() {
  useFirestoreConnect("tips"); // sync tips collection from Firestore into redux 
  const tip = useSelector(state => state.firestoreReducer.ordered.tips); // get data no mapState
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <TipsItem tip={tip} key={tip}/>
        </div>
        <div className="col s12 m6">
          <Nofitications />
        </div>
      </div>
    </div>
  );
}
