import {SetStateAction} from "react";
import {FilterItemProps, MealCardProps} from "../components/types";
import { THE_MEAL_DB_API_URL_AREA, THE_MEAL_DB_API_URL_CATEGORIES} from "./constants";

interface MealAPIResponse {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strCategory: string;
    strArea: string;
}

export const transformAPIResponse = (meals: MealAPIResponse[], favouriteRecipes: MealCardProps[]) => {
    const ingredientIndexArray = [...Array(21).keys()].slice(1);


    return meals.map((meal: MealAPIResponse) => ({
        id: meal.idMeal,
        title: meal.strMeal,
        altImage: meal.strMeal,
        imageUrl: meal.strMealThumb,
        description: meal.strInstructions,
        category: meal.strCategory,
        area: meal.strArea,
        instructions: meal.strInstructions,
        ingredients: ingredientIndexArray.map( ingredientIndex => {
            // @ts-ignore
            return `${meal[`strMeasure${ingredientIndex}`]} of ${meal[`strIngredient${ingredientIndex}`]}`;
        }).filter(item => item.trim() !== "of" && !item.includes("null")),
        isFavourite: favouriteRecipes.filter( recipe => recipe.id === meal.idMeal).length === 1
    }))
}

export const fetchDataByFilterType = async (
    setFilters: { (value: SetStateAction<FilterItemProps[]>): void; (arg0: any): void; },
    type: "category" | "area"
) => {
    const url = type === 'category' ? THE_MEAL_DB_API_URL_CATEGORIES : THE_MEAL_DB_API_URL_AREA;

    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then(({meals}) => {
            if (meals && meals.length > 0) {
                setFilters(
                    meals.map((meal : {strCategory?: string, strArea?: string}) => type === 'category' ? {
                            name: meal.strCategory,
                            selected: false
                        } :
                        {
                            name: meal.strArea,
                            selected: false
                        }
                ));
            }
        });
}