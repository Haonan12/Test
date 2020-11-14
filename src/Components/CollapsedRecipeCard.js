/* eslint-disable */
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import RouteLink from "./RouteLink";
import { useHistory } from 'react-router-dom';
import RecipeBasicInfo from './RecipeComponents/RecipeBasicInfo';
import TagList from './RecipeComponents/TagList';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import RecipeDefault from "./RecipeDefault.jpg";

const useStyles = makeStyles(theme=>({
  card:{
    maxWidth: theme.breakpoints.values.sm,
    margin: "9px auto"
  },
  content:{
    paddingTop: 0,
  },
  media: {
    height: theme.spacing(30),
    opacity: 0.5,
  },
  link: {
    textDecoration: 'none'
  }
}));

export default ({ recipe }) => {
  const classes = useStyles();
  const attachment = recipe.attachment;
  const history = useHistory();

  const handleOpenCard = () =>
    history.push({
      pathname: `/Recipes/${recipe.recipeId}`,
      state: { detail: recipe },
    });

  return(
    <Card className={classes.card} raised>
      <CardActionArea onClick={handleOpenCard}>
        <CardMedia
          className={classes.media}
          image={attachment ? attachment :RecipeDefault}
          title="Recipe Image"
        />
        <RecipeBasicInfo recipeData={recipe}/>
        <TagList recipeData={recipe}/>
      </CardActionArea>
    </Card>
  );
}
