import logo from '../assets/logo.png';
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";

const Brand = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box my={3} display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
            <img src={logo} alt="the meal recipe logo" height={300}/>
            <Typography component="h1" variant={ isMobile ? "h5" : "h4"} gutterBottom>
                Let's find your favourite recipes
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                Search in the meal recipe database
            </Typography>
        </Box>
    );
}

export default Brand