import { render, screen} from "@testing-library/react";
import { describe, expect, test } from 'vitest'
import Dialog from "../components/dialog";

const dialogData = {
    id: '1',
    title: 'Pizza',
    recipeContent: {
        instructions: 'instructions',
        ingredients: [
            'ingredient 1', 'ingredient 2'
        ],
        altImage: 'pizza',
        imageUrl: 'https://test.com/url.jpg',
    }
}

describe('Dialog component', () => {
    test('renders dialog component with correct data', () => {

        render(<Dialog open={true} title={dialogData.title} onClose={() => {}} recipeContent={dialogData.recipeContent} />);

        const titleElement = screen.getByText('Pizza');
        expect(titleElement).toBeTruthy();

        const dialogElement = screen.getByRole('dialog');
        expect(dialogElement).toBeTruthy();

        const closeElement = screen.getByTestId('CloseIcon');
        expect(closeElement).toBeTruthy();

    });

})