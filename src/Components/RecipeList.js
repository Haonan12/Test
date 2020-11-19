/* eslint-disable */
import React from "react";

import Grid from '@material-ui/core/Grid';
import CollapsedRecipeCard from "./CollapsedRecipeCard";

const RecipeList = ({ recipeList }) => {

  if(!recipeList)
    return null;

  return(
    // <MasonryGrid>
    <Grid container spacing={3}>
      {recipeList.map((recipe) => (
        <Grid item xs={12} key={recipe.recipeId}>
          <CollapsedRecipeCard
            recipe={recipe}
          />
        </Grid>
      )
      )}
    </Grid>
    // </MasonryGrid>
  );
}

export default RecipeList;
