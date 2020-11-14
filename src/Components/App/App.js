/* eslint-disable */
import React from 'react';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
// import {green} from '@material-ui/core/colors';
// import Counter from '../Counter';
// import Random from '../Random';
// import classes from './App.module.css';
// import SignIn from "../../Containers/SignIn";
// import SignUp from "../../Containers/SignUp";
// import Profile from "../../Containers/Profile";
import Recipes from "../../Containers/Recipes";
import ExpendedRecipeCard from "../../Components/ExpandedRecipeCard"

import {withRouter, useHistory, Route, Switch} from "react-router-dom";
// import AuthenticatedRoute from "../Components/AuthenticatedRoute";
// import UnauthenticatedRoute from "../Components/UnauthenticatedRoute";
import Header from "../../Containers/Header";
// import Home from "../../Containers/Home";
// import NotFound from "../../Containers/NotFound";
// import Menu from '../../Containers/Menu';
// import Pantry from '../../Containers/Pantry';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b6535',
      contrastText: '#fff',
    },
    secondary: {
      main: "#e6b644"
    },
    background: {
      default: "#ede9d2"
    },
    text: {
      disabled: ""
    }
  },
});

const App = () => (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
      <Switch>
        {/* <Route path="/SignIn" exact component={SignIn}/> */}
        {/* <Route path="/SignUp" exact component={SignUp}/> */}
        {/* <Route path="/Profile" exact component={Profile}/> */}
        {/* <Route path="/" exact component={Home}/>*/}
         <Route path="/Recipes" exact component={Recipes}/>
         <Route path="/Recipes/:id" exact component={ExpendedRecipeCard}/>
        {/* <Route path="/Menu" exact component={Menu} /> */}
        {/* <Route path="/Ingredient" exact component={Pantry} /> */}
        {/* <AuthenticatedRoute path="/Shopping" exact component={Shopping} appProps={appProps} /> */}

        { /* Finally, catch all unmatched routes */ }
        {/* <Route component={NotFound} /> */}
      </Switch>
    </MuiThemeProvider>
  </React.Fragment>
);

export default withRouter(App);