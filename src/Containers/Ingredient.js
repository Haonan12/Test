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
import InputBase from "@material-ui/core/InputBase/InputBase";

const useStyles = makeStyles(theme => ({
  ingredient_list: {
    marginBottom: '20px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    width: '100%',
  },
  ingredient_grid: {
    width: '90%',
  },
  ingredient_txt: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  }
}));


export default ({ }) => {

  const classes = useStyles();
  const [ingredients, setIngredient] = React.useState(null);
  const [items, setItems] = React.useState([]);

  // controller.getRecipeListBySearch(searchTxt)
  //   .then(recipeList => {
  //
  //     console.log(recipeList);
  //     setSearchedRecipe(recipeList);
  //   })

  React.useEffect(() => {
    const loadIngedients = () => {
      controller.getAllIngredients()
        .then((ingredients) => {
          const render = [];
          ingredients.meals.forEach(ingredient => {
            render.push(renderIngredient(ingredient))
          })
          setItems(render)
          setIngredient(ingredients);
        })
    }
    loadIngedients();
  }, []);

  const renderIngredient = (ingredient) => {
    return (
      <Container style={{marginTop:'100px', marginBottom:'50px'}}>
        {/*<div className={classes.search}>*/}
        {/*  <InputBase*/}
        {/*    placeholder="Search…"*/}
        {/*    classes={{*/}
        {/*      input: classes.inputInput,*/}
        {/*    }}*/}
        {/*    onChange = {(e) => handleSearchText(e)}*/}
        {/*  />*/}
        {/*  <Button*/}
        {/*    onClick={handleSearch}*/}
        {/*    variant="contained"*/}
        {/*    color="secondary"*/}
        {/*    className={classes.button}*/}
        {/*  >*/}
        {/*    Search*/}
        {/*  </Button>*/}
        {/*</div>*/}
        <Grid container spacing={2}>
          <Grid item className='ingredient_list'>
            <Paper className='ingredient_txt'>

              <Typography variant="h4" color="primary.contrastText">
                {ingredient.strIngredient}
              </Typography>
              {
                ingredient.strDescription ? (
                  <Typography variant="body1" color="textPrimary">
                    {ingredient.strDescription}
                  </Typography>
                ): null
              }
              {
                ingredient.strType ? (
                  <Typography variant="body1" color="textPrimary">
                    {ingredient.strType}
                  </Typography>
                ): null
              }

              {/*<Button className='exam_button' variant="contained" color="primary"*/}
              {/*        onClick={this.turnToQuestionary.bind(this, exam.course)}>*/}
              {/*  Start Questionary*/}
              {/*</Button>*/}
            </Paper>

          </Grid>

        </Grid>
        <br/>
      </Container>
    )
  }
  console.log(items);
  return (
    <div>
      <Paper className="ingredient_list">
        {items? items:
          <Typography variant="body1" color="textPrimary">
            Loading
          </Typography>
        }
      </Paper>
    </div>
  );
}