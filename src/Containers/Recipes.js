/* eslint-disable */
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import {  fade, makeStyles } from '@material-ui/core/styles';
import controller from "../Libs/ApiLib";

import RecipeList from "../Components/RecipeList";

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles(theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 1
  },
  search: {
    marginBottom: '20px',
    marginLeft: '35%',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    width: '40%',
  },
  inputInput: {
    border: '2px solid green',
    paddingLeft: theme.spacing(2),
    width: '100%',
  },
  button: {
    marginLeft: theme.spacing(2),
  }
}));

export default function Recipes({ recipeList, setRecipeList, isAuthenticated, handleAddRecipe, handleUpdateRecipe, ...props } ){
  const classes = useStyles();

  React.useEffect(() => {
    async function loadRecipes() {
      // Check recipeList exists, if not fetch recipeList
      controller.getRecipeListBySearch("a")
        .then(recipeList => {

          console.log(recipeList);
          setSearchedRecipe(recipeList);
        })
    }
    loadRecipes();
  }, []);

  const [searchedRecipe, setSearchedRecipe] = React.useState([]);
  const [searchTxt, setSearchTxt] = React.useState('')

  const handleSearchText = (e) => {
    setSearchTxt(e.target.value.trim())
  }

  const handleSearch = () => {
    if (!searchTxt) {
      return false;
    }
    controller.getRecipeListBySearch(searchTxt)
      .then(recipeList => {

        console.log(recipeList);
        setSearchedRecipe(recipeList);
      })

  }

  return(
    <Container style={{marginTop:'100px', marginBottom:'50px'}}>

      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          classes={{
            input: classes.inputInput,
          }}
          onChange = {(e) => handleSearchText(e)}
        />
        <Button
          onClick={handleSearch}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Search
        </Button>
      </div>

      <RecipeList recipeList={searchedRecipe} appProps={props} />

    </Container>
  )
}
