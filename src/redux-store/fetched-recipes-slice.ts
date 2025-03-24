import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {MealCardProps} from "../components/types";
import {THE_MEAL_DB_API_URL} from "../util/constants";
import {transformAPIResponse} from "../util/http";

const initialFetchedRecipesState = {
    searchText: '',
    recipes: [],
    isLoading: false,
    error: null,
};

export const fetchDataBySearchText = createAsyncThunk(
    'recipes/fetchDataBySearchText',
    async ( arg: {searchedWord: string, favouriteRecipes: MealCardProps[]}, { rejectWithValue }) => {
        const url = `${THE_MEAL_DB_API_URL}search.php?s=${arg.searchedWord}`;

        try {
            return await fetch(url).then((res) => {
                return res.json();
            }).then(({meals}) => {
                if (meals && meals.length > 0) {
                    return {
                        searchText: arg.searchedWord,
                        recipes: transformAPIResponse(meals, arg.favouriteRecipes)
                    }
                } else {
                    return {
                        searchText: arg.searchedWord,
                        recipes: []
                    }
                }
            });

        } catch (err) {
            return rejectWithValue('Oops unable to fetch recipes from API');
        }
    }
)

const fetchedRecipesSlice = createSlice({
    name: 'fetchedRecipes',
    initialState: initialFetchedRecipesState,
    reducers: {
        updateToFavourites(state, action) {
            // @ts-ignore
            state.recipes = [...state.recipes].map((recipe: MealCardProps)  => (
                recipe.id !== action.payload.id ? recipe : { ...recipe, isFavourite: !recipe.isFavourite }
            ));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataBySearchText.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchDataBySearchText.fulfilled, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.recipes = action.payload.recipes;
            // @ts-ignore
            state.searchText = action.payload.searchText;
        })
        builder.addCase(fetchDataBySearchText.rejected, (state, action) => {
            state.isLoading = false
            // @ts-ignore
            state.error = action.error.message
        })
    },
});

export const fetchedRecipesActions = fetchedRecipesSlice.actions;

export default fetchedRecipesSlice.reducer;