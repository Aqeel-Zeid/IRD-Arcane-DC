import React from "react";
import {Route, Switch} from "react-router-dom"
import PasswordResetPage from "./Components/Pages/PasswordResetPage";
import LoginPage from "./Components/Pages/LoginPage";
import SignUpPage from "./Components/Pages/SignUpPage";

export default class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
            <Route path = "/PasswordReset">
                <PasswordResetPage/>
            </Route>
            <Route path = "/SignUp">
                <SignUpPage/>
            </Route>
            <Route path = "/">
                <LoginPage/>
            </Route>  
        </Switch> 
      </>
    );
  }
}