import {Chip} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import {FilterItemProps} from "./types";

const FilterItem = ({name, selected, onClick}: FilterItemProps) => {
    return (
        <>
            {
                selected ? <Chip icon={<CheckIcon />} label={name} variant="outlined" color="success" onClick={onClick}/> :
                    <Chip icon={<AddIcon />} label={name} variant="outlined" onClick={onClick} />
            }
        </>
    )
}

export default FilterItem;