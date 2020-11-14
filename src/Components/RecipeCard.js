/* eslint-disable */
import React from "react";
import ExpandedRecipeCard from './ExpandedRecipeCard';
import CollapsedRecipeCard from './CollapsedRecipeCard';

export default function RecipeCard({recipe, setRecipe, attachment, expended, setAttachment, ...props}){
  const isEditable=props.editable;
  console.log(expended);
  return (expended
    ?<ExpandedRecipeCard
      isEditable={isEditable}
      recipe={recipe}
      setRecipe={setRecipe}
      attachment={attachment}
      setAttachment={setAttachment}
    />
    :<CollapsedRecipeCard
      recipe={recipe}
    />
  );
}
