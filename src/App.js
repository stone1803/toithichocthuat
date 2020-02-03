import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashbroad/Dashboard";
import TipsDetail from "./components/tips/TipsDetail";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateTips from "./components/tips/CreateTips";
import Test from "./FireBase/test";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/CreateTips" component={CreateTips} />
          <Route path="/tips/:id" component={TipsDetail} />

          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  
  );
}

export default App;
