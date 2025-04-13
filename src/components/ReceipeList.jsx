import React from 'react'
import Recipecard from './Recipecard'

const ReceipeList = ({ recipes , onRecipeClick}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-8">
      {recipes.length > 0 ? (
        recipes.map((recipe, index) => (
          <Recipecard key={index} recipe={recipe} onClick={() => onRecipeClick(recipe)} />
        ))
      ) : (
        <p className="text-gray-800 text-xl font-semibold">No recipes found!</p>
      )}
    </div>
  )
}

export default ReceipeList
