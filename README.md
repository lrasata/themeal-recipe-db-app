# The Meal recipe database App

This project allows you to look for your favourite recipes thanks to [TheMealDB API](https://www.themealdb.com/).

This project has been built for training to showcase usage of `React, Redux, Redux toolkit, Redux thunk and React router`.

### Look for a recipe
<img src="./docs/homepage.png" alt="homepage" height="400"><img src="./docs/homepage-mobile.png" alt="homepage-mobile" height="400">

### Read recipe instructions
<img src="./docs/instructions.png" alt="instructions" height="300"><img src="./docs/instructions-mobile.png" alt="instructions-mobile" height="300">

### Add a recipe to the favourites
<img src="./docs/favourites-page.png" alt="favourite" height="250"><img src="./docs/favourite-mobile.png" alt="favourite-mobile" height="250">


## Installation and Setup Instructions

You will need `node` and `npm` installed globally on your machine.

### Prerequisites
Provide the `VITE_THE_MEAL_DB_API_URL` in  `.env`

```
VITE_THE_MEAL_DB_API_URL=https://www.themealdb.com/api
```

Installation:

`npm install`


To Start Server:

`npm run dev`

To Visit App:

`http://localhost:5173/`

To Test:
`npm run test`

## Future improvements
- Add Load More or Pagination to display limited amount of recipes
- Make filters work to narrow down the results
  <img src="./docs/filters.png" alt="filters" height="100">
