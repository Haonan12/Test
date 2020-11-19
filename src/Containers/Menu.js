/* eslint-disable */
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import controller from "../Libs/ApiLib";
import {fade, makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import RecipeList from "../Components/RecipeList";
import InputBase from "@material-ui/core/InputBase/InputBase";

export default ({ }) => {

  const [recipe, setRecipe] = React.useState(null);
  const [items, setItems] = React.useState([]);

  const randomRecipe = () => {
    controller.getRandomRecipe()
      .then(response => {
        setRecipe(response)
      })
  }

  console.log(recipe)
  return (
    <div>
      <Container style={{marginTop:'100px', marginBottom:'50px'}}>

        <Button
          onClick={randomRecipe}
          fullWidth
          variant="contained"
          color="primary"
          // className={classes.submit}
          style={{
            marginBottom: '24px',
          }}
        >
          Random Pick an Recipe
        </Button>

        <RecipeList recipeList={recipe} />

      </Container>
    </div>
  );
}
