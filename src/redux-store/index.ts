import { configureStore } from '@reduxjs/toolkit';
import favouriteRecipesReducer from "./favourite-recipes-slice";
import fetchedRecipesReducer from "./fetched-recipes-slice";

const store = configureStore({
    reducer: { fetchedRecipes: fetchedRecipesReducer, favouriteRecipes: favouriteRecipesReducer }
});

export default store;