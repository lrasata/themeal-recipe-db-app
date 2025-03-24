import {ReactElement} from "react";

export interface RecipeContentProps {
    ingredients: string[];
    instructions: string;
    imageUrl: string;
    altImage: string;
}

export interface DialogProps {
    open: boolean;
    onClose: (value: string) => void;
    title: string;
    recipeContent?: RecipeContentProps;
}

export interface FilterItemProps{
    name: string;
    selected: boolean;
    onClick?: () => void;
}

export interface FilterProps {
    type: string;
    filterItems: FilterItemProps[]
}

export interface MealCardProps {
    id: string;
    imageUrl: string;
    altImage: string;
    title: string;
    description: string;
    category: string;
    area: string;
    onClickOpenDetails?: () => void;
    onClickCardAction?: () => void;
    ingredients: string[];
    instructions: string;
    cardActionIcon?: ReactElement;
    cardActionText?: string;
    isFavourite?: boolean;
}