import { Outlet } from 'react-router-dom';

import MainNavigation from "../components/main-navigation";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    }
});


const RootLayout = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}

export default RootLayout;