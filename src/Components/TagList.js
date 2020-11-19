/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme =>({
  tag: {
    margin: theme.spacing(0.2,0.2)
  },
}));

export default ({recipeData, setRecipeData, ...props}) => {
  const tags= recipeData.tag;
  const classes = useStyles();
  if(!tags){
    return;
  }
  return tags.map((tag,i) => (

    <Chip
      key={i}
      label={tag}
      className={classes.tag}
      color="default"
    />
  ));
}



