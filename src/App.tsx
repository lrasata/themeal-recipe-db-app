import './App.css'

import ErrorPage from "./pages/error-page";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/homepage";
import FavouritesPage from "./pages/favourites-page";
import RootLayout from "./pages/root-layout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'favourites', element: <FavouritesPage/>}
        ],
    }
]);

function App() {

    return (<RouterProvider router={router}/>)
}

export default App
