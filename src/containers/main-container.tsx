import SearchBar from "../components/search-bar";
import {Alert, Box} from "@mui/material";
import CardResultContainer from "./card-result-container";
import {useState} from "react";
import Spinner from "../components/spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataBySearchText} from "../redux-store/fetched-recipes-slice";
import Brand from "../components/brand";

const MainContainer = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const searchTextSelector = useSelector(state => state.fetchedRecipes.searchText);
    // @ts-ignore
    const fetchedRecipesSelector = useSelector(state => state.fetchedRecipes.recipes);
    // @ts-ignore
    const isLoading = useSelector((state) => state.fetchedRecipes.isLoading)

    // @ts-ignore
    const favouriteRecipesSelector = useSelector(state => state.favouriteRecipes.recipes);

    const [searchWord, setSearchWord] = useState(searchTextSelector);

    const handleSearch = (searchText: string) => {
        setSearchWord(searchText);
        // @ts-ignore
        dispatch(fetchDataBySearchText({searchedWord: searchText, favouriteRecipes: [...favouriteRecipesSelector] }))
    }

    return <>
        <Brand />
        <Box mb={3}>
            <SearchBar inputSearchText={searchWord} handleSearch={handleSearch}/>
        </Box>
        <>
            {
                isLoading ? <Spinner /> : <>
                    {
                        fetchedRecipesSelector && fetchedRecipesSelector.length > 0 && <CardResultContainer searchedWord={searchWord} mealCards={fetchedRecipesSelector} path="/" />
                    }
                    {
                        fetchedRecipesSelector.length === 0 && <Alert severity="info">No recipes found.</Alert>
                    }
                </>
            }

        </>


    </>
}

export default MainContainer;