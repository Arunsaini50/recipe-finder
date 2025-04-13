import React from 'react'

const Recipecard = ({ recipe , onClick }) => {
  return (
    <div
    onClick={onClick} 
    className="bg-white rounded-lg shadow-lg overflow-hidden w-64 hover:scale-105 transition-all duration-300">
      <img 
        src={recipe.strMealThumb} 
        alt={recipe.strMeal}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600">{recipe.strArea}</p>
      </div>
    </div>
  )
}

export default Recipecard
