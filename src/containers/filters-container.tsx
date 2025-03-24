import Filter from "../components/filter";
import {Box, Typography} from "@mui/material";
import {FilterProps} from "../components/types.tsx";

interface props {
    filters: FilterProps[];
}

// TODO it will be integrated API upgrade
const FiltersContainer = ({filters = []}: props) => {
    return <Box my={2}>
        {
            filters?.length > 0 && <>
                <Typography variant="subtitle2" gutterBottom>Filters</Typography>
                {
                    filters.map((filter, index) => (
                        <Filter key={`${filter.type}-${index}`} type={filter.type} filterItems={filter.filterItems} />
                    ))
                }
            </>
        }
    </Box>
}

export default FiltersContainer;