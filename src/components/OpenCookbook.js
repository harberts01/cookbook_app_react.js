import React from 'react';
import { CreateRecipeModal } from './Recipe Components/CreateRecipeModal';
import { RecipeList } from './Recipe Components/RecipeList';

export const OpenCookbook = () => {
  


  return (
    <div>
      <CreateRecipeModal/>
        <RecipeList />
    </div>
  );
}

