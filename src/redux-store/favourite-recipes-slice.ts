import {createSlice} from '@reduxjs/toolkit';

const initialFavouriteRecipesState = {recipes: [] };

const favouriteRecipesSlice = createSlice({
    name: 'favouriteRecipes',
    initialState: initialFavouriteRecipesState,
    reducers: {
        saveFavouriteRecipes(state, action) {
            // @ts-ignore
            state.recipes = [...state.recipes, action.payload];
        },
        removeFromFavouriteRecipes(state, action) {
            // @ts-ignore
            state.recipes = [...state.recipes].filter((recipe) => recipe.id !== action.payload.id);
        },
    },
});

export const favouriteRecipesActions = favouriteRecipesSlice.actions;

export default favouriteRecipesSlice.reducer;