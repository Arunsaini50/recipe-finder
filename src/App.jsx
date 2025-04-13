import { useState,useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ReceipeList from "./components/ReceipeList";
import axios from "axios";
import RecipeModal from "./components/RecipeModal";


function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchInitialRecipes = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      const data = response.data.meals;

      // Random 4 select karenge
      const randomRecipes = data.sort(() => 0.5 - Math.random()).slice(0, 4);

      setRecipes(randomRecipes);
    } catch (error) {
      console.error("Error fetching initial recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchInitialRecipes();
  }, []);


  const handleSearch = async () => {
    if (!search.trim()) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = response.data.meals;
      setRecipes(data || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    }
    setLoading(false);
  };

  const handleReset = () => {
    setSearch("");
    fetchInitialRecipes();
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-200 p-4">
      <Header />
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        handleSearch={handleSearch} 
      />

      <div className="flex justify-center">
        <button 
          onClick={handleReset}
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-pink-600 transition-all duration-300"
        >
          Show Random Recipes
        </button>
      </div>

      {loading ? (
        <p className="text-center text-xl text-gray-700 my-8">Loading recipes...</p>
      ) : (
        <ReceipeList recipes={recipes} onRecipeClick={handleRecipeClick}/>
      )}

<RecipeModal
        recipe={selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
}

export default App;
