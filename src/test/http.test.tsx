import {describe, expect, test} from "vitest";
import {transformAPIResponse} from "../util/http";
import {mealCardData} from "./meal-card.test";

const API_RESPONSE_DATA = [
    {
        "idMeal": "53014",
        "strMeal": "Pizza Express Margherita",
        "strCategory": "Miscellaneous",
        "strArea": "Italian",
        "strInstructions": "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
        "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
        "strIngredient1": "Water",
        "strIngredient2": "Sugar",
        "strIngredient3": "Yeast",
        "strIngredient4": "Plain Flour",
        "strIngredient5": "Salt",
        "strIngredient6": "Olive Oil",
        "strIngredient7": "Passata",
        "strIngredient8": "Mozzarella",
        "strIngredient9": "Oregano",
        "strIngredient10": "Basil",
        "strIngredient11": "Black Pepper",
        "strIngredient12": "",
        "strIngredient13": "",
        "strIngredient14": "",
        "strIngredient15": "",
        "strIngredient16": "",
        "strIngredient17": "",
        "strIngredient18": "",
        "strIngredient19": "",
        "strIngredient20": "",
        "strMeasure1": "150ml",
        "strMeasure2": "1 tsp ",
        "strMeasure3": "15g",
        "strMeasure4": "225g",
        "strMeasure5": "1 1\/2 tsp ",
        "strMeasure6": "Drizzle",
        "strMeasure7": "80g",
        "strMeasure8": "70g",
        "strMeasure9": "Peeled and Sliced",
        "strMeasure10": "Leaves",
        "strMeasure11": "Pinch",
        "strMeasure12": " ",
        "strMeasure13": " ",
        "strMeasure14": " ",
        "strMeasure15": " ",
        "strMeasure16": " ",
        "strMeasure17": " ",
        "strMeasure18": " ",
        "strMeasure19": " ",
        "strMeasure20": " ",
    }
]

describe('http functions', () => {
    test('transform API response to correct format', () => {
        const expectedResponse = [
            {
                id: "53014",
                title: "Pizza Express Margherita",
                altImage: "Pizza Express Margherita",
                imageUrl: "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
                description: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                category: "Miscellaneous",
                area: "Italian",
                instructions: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                ingredients: [
                    '150ml of Water',
                    '1 tsp  of Sugar',
                    '15g of Yeast',
                    '225g of Plain Flour',
                    '1 1/2 tsp  of Salt',
                    'Drizzle of Olive Oil',
                    '80g of Passata',
                    '70g of Mozzarella',
                    'Peeled and Sliced of Oregano',
                    'Leaves of Basil',
                    'Pinch of Black Pepper'
                ],
                isFavourite: false
            }
        ]

        const result = transformAPIResponse(API_RESPONSE_DATA, []);
        expect(result).toStrictEqual(expectedResponse);
    });

    test('transform API response to correct format for favourite recipe', () => {
        const expectedResponse = [
            {
                id: "53014",
                title: "Pizza Express Margherita",
                altImage: "Pizza Express Margherita",
                imageUrl: "https:\/\/www.themealdb.com\/images\/media\/meals\/x0lk931587671540.jpg",
                description: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                category: "Miscellaneous",
                area: "Italian",
                instructions: "1 Preheat the oven to 230\u00b0C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.",
                ingredients: [
                    '150ml of Water',
                    '1 tsp  of Sugar',
                    '15g of Yeast',
                    '225g of Plain Flour',
                    '1 1/2 tsp  of Salt',
                    'Drizzle of Olive Oil',
                    '80g of Passata',
                    '70g of Mozzarella',
                    'Peeled and Sliced of Oregano',
                    'Leaves of Basil',
                    'Pinch of Black Pepper'
                ],
                isFavourite: true
            }
        ]

        const result = transformAPIResponse(API_RESPONSE_DATA, [{...mealCardData, id: "53014"}])
        expect(result).toStrictEqual(expectedResponse);
    });
})