/* eslint-disable */
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import RouteLink from "./RouteLink";
import { useHistory } from 'react-router-dom';
import TagList from './TagList';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import InputBase from "@material-ui/core/InputBase/InputBase";

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
  },
  input: {
    margin: "0 6px",
    padding: "4px 0",
    color: "#000",
    justifyContent: 'center',
  },
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
        <InputBase
          disabled={true}
          className={classes.input}
          name="title"
          value={recipe.title}
          placeholder="Name"
        />
        <CardMedia
          className={classes.media}
          image={attachment}
          title="Recipe Image"
        />
        <TagList recipeData={recipe}/>
      </CardActionArea>
    </Card>
  );
}
