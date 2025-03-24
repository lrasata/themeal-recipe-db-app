import { render, screen} from "@testing-library/react";
import { describe, expect, test } from 'vitest'
import RecipeContent from "../components/recipe-content";

const mealCardData = {
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

describe('Recipe content component', () => {
    test('renders Recipe component with correct data', () => {

        render(<RecipeContent ingredients={mealCardData.ingredients} instructions={mealCardData.instructions} imageUrl={mealCardData.imageUrl} altImage={mealCardData.altImage}/>);

        const instructionsElement = screen.getByText('instructions');
        expect(instructionsElement).toBeTruthy();

        const ingredient1Element = screen.getByText('ingredient 1');
        expect(ingredient1Element).toBeTruthy();

        const ingredient2Element = screen.getByText('ingredient 2');
        expect(ingredient2Element).toBeTruthy();

        const altImageElement = screen.getByAltText('pizza')
        expect(altImageElement).toBeTruthy();

    });

})