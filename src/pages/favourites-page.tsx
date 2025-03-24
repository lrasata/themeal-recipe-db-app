import {useSelector} from "react-redux";
import CardResultContainer from "../containers/card-result-container";
import {Alert} from "@mui/material";

const FavouritesPage = () => {

    // @ts-ignore
    const favouriteRecipesSelector = useSelector((state) => state.favouriteRecipes.recipes);

    return <>
        {
            favouriteRecipesSelector && favouriteRecipesSelector.length > 0 ?
                <CardResultContainer mealCards={favouriteRecipesSelector} path="/favourites" /> :
                <Alert severity="info" sx={{ my: 2}}>No recipe in your favourites</Alert>
        }
    </>
    ;
}

export default FavouritesPage;