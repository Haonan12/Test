/* eslint-disable */
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "../Components/AuthenticatedRoute";
import UnauthenticatedRoute from "../Components/UnauthenticatedRoute";
import Header from "../Components/Header";
import Home from "../Containers/Home";
import NotFound from "../Containers/NotFound";
import SignIn from "../Containers/SignIn";
import SignUp from "../Containers/SignUp";
import Recipes from "../Containers/Recipes";
import Profile from "../Containers/Profile";
import Menu from '../Containers/Menu';
import Pantry from '../Containers/Pantry';
import Shopping from '../Containers/Shopping';

export default function Routes({ appProps }) {
  return (
    <React.Fragment>
      <Header appProps={appProps}/>
      <Switch>
        <Route path="/SignIn" exact component={SignIn} appProps={appProps} />
        <Route path="/SignUp" exact component={SignUp} appProps={appProps} />
        <Route path="/Profile" exact component={Profile} appProps={appProps} />
        <Route path="/" exact component={Home} appProps={appProps} />
        <Route path="/Recipes" exact component={Recipes} appProps={appProps} />
        <Route path="/Recipes/:id" exact component={Recipes} appProps={appProps} />
        <Route path="/Menu" exact component={Menu} appProps={appProps} />
        <Route path="/Ingredient" exact component={Pantry} appProps={appProps} />
        {/*<AuthenticatedRoute path="/Shopping" exact component={Shopping} appProps={appProps} />*/}

        { /* Finally, catch all unmatched routes */ }
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
