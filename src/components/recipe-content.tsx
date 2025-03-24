import {Card, CardMedia, Divider, Typography} from "@mui/material";
import {RecipeContentProps} from "./types";

const RecipeContent = ({ingredients, instructions, imageUrl, altImage}: RecipeContentProps) => (
    <>
        <Card>
            <CardMedia
                component="img"
                alt={altImage}
                height="140"
                image={imageUrl}
            />
        </Card>
        <Typography variant="h5" component="div" mt={2} mb={3}>Ingredients</Typography>
        {
            ingredients.map((ingredient: string, index: number) => (
                <Typography gutterBottom key={`${index}-${ingredient}`}>
                    {ingredient}
                </Typography>
            ))
        }
        <Divider sx={{ my: 2 }} />
        <Typography variant="h5" component="div" my={3}>Instructions</Typography>
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>{instructions}</Typography>
    </>
)

export default RecipeContent;