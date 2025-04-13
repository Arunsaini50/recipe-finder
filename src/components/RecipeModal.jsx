import React from 'react'
import { motion, AnimatePresence } from "framer-motion";


const RecipeModal = ({ recipe, onClose }) => {
    if (!recipe) return null;
    

  return (
    <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
        className="bg-white p-6 rounded-2xl shadow-2xl max-w-lg w-full relative"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9, rotate: -20 }}
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl"
        >
          &times;
        </motion.button>

        <motion.img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-64 object-cover rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        <h2 className="text-2xl font-bold mt-4">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-600">{recipe.strCategory} | {recipe.strArea}</p>

        <h3 className="text-lg font-semibold mt-4">Instructions</h3>
        <p className="text-gray-700 text-sm mt-2 max-h-40 overflow-auto">{recipe.strInstructions}</p>
      </motion.div>
    </motion.div>
  </AnimatePresence>
  )
}

export default RecipeModal
