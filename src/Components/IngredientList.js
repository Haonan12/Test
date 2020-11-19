/* eslint-disable */
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme =>({
  ingredientList: {
    padding: 0,
    maxWidth: "500px",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  ingredientLine:{
    display: "grid",
    gridTemplateColumns: "1fr 35px 120px .5rem",
    gridGap: "5px",
    borderBottom: `2px dotted ${theme.palette.secondary.main}`
  },
  deleteBtn: {
    padding: "0px",
    width: ".5rem",
    background: "none",
    border: 0
  },
}));

export default ({recipeData, setRecipeData, ...props}) => {
  const classes=useStyles();


  const changeIngredient = (e,i) => {
    let x = [...recipeData.ingredients];
    x[i][e.target.name]=e.target.value;
    let y = {...recipeData}
    y.ingredients = x;
    setRecipeData(y);
  }


  const ingredients = recipeData.ingredients.map((ingredient,i)=>(
    <div className={classes.ingredientLine} key={['ingredient', i].join('_')}>
      <InputBase
        onChange={(e)=>changeIngredient(e,i)}
        name="item"
        value={ingredient.item}
        multiline
        placeholder="Item"

      />
      <InputBase
        onChange={(e)=>changeIngredient(e,i)}
        name="quantity"
        value={ingredient.quantity}
        placeholder="0"
      />
      <InputBase
        onChange={(e)=>changeIngredient(e,i)}
        name="measurement"
        value={ingredient.measurement}
        placeholder="Meas"
      />
    </div>
  ));

  return(
    <ul className={classes.ingredientList}>
      {ingredients}
    </ul>
  );
}
