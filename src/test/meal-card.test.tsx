import { render, screen} from "@testing-library/react";
import { describe, expect, test } from 'vitest'
import MealCard from "../components/meal-card";

export const mealCardData = {
    id: '1',
    title: 'Pizza',
    altImage: 'pizza',
    imageUrl: 'https://test.com/url.jpg',
    description: 'meal card description',
    category: 'meal card category',
    area: 'meal card area',
    instructions: 'instructions',
    ingredients: [
        'ingredient 1', 'ingredient 2'
    ]
}

describe('Meal card component', () => {
    test('renders Meal card component with correct data', () => {

        render(<MealCard {...mealCardData} isFavourite={false} onClickCardAction={()=>{}} cardActionText='Add to favourites'/>);

        const titleElement = screen.getByText('Pizza');
        expect(titleElement).toBeTruthy();

        const descriptionElement = screen.getByText('meal card description');
        expect(descriptionElement).toBeTruthy();

        const categoryElement = screen.getByText('meal card category');
        expect(categoryElement).toBeTruthy();

        const areaElement = screen.getByText('meal card area');
        expect(areaElement).toBeTruthy();

        const addToFavouritesElement = screen.getByText('Add to favourites');
        expect(addToFavouritesElement).toBeTruthy();
    });

    test('renders Meal card component which has been added to favourites', () => {

        render(<MealCard {...mealCardData} isFavourite onClickCardAction={()=>{}} cardActionText='Added to favourites'/>);

        const titleElement = screen.getByText('Pizza');
        expect(titleElement).toBeTruthy();

        const descriptionElement = screen.getByText('meal card description');
        expect(descriptionElement).toBeTruthy();

        const categoryElement = screen.getByText('meal card category');
        expect(categoryElement).toBeTruthy();

        const areaElement = screen.getByText('meal card area');
        expect(areaElement).toBeTruthy();

        const addedToFavouritesElement = screen.getByText('Added to favourites');
        expect(addedToFavouritesElement).toBeTruthy();
    });
})