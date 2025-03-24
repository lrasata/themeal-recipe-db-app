import {IconButton, InputAdornment, OutlinedInput} from "@mui/material";
import {KeyboardEvent, SetStateAction, useEffect, useRef, useState} from "react";
import {Close, Search} from "@mui/icons-material";

interface SearchBarProps {
    inputSearchText: string;
    handleSearch: (searchText: string) => void;
}

const DEBOUNCE_TIME = 700;

const SearchBar = ({inputSearchText, handleSearch}: SearchBarProps) => {
    const [inputValue, setInputValue] = useState(inputSearchText);
    const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClearInput = () => {
        setInputValue("");
    }

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    }

    const handleOnClickSearch = () => {
        handleSearch(inputValue);
    };

    const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            handleSearch(inputValue);
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedInputValue(inputValue);
        }, DEBOUNCE_TIME);
        return () => clearTimeout(timeoutId);
    }, [inputValue]);

    useEffect(() => {
        handleSearch(debouncedInputValue)
    }, [debouncedInputValue]);

    return <OutlinedInput
        value={inputValue}
        fullWidth
        onChange={handleInputChange}
        endAdornment={
            <InputAdornment position="end">
                {
                    inputValue !== '' && <IconButton onClick={handleClearInput}><Close/></IconButton>
                }
                <IconButton onClick={handleOnClickSearch}>
                    <Search/>
                </IconButton>
            </InputAdornment>
        }
        placeholder="Enter a meal or an ingredient. ex: rice"
        ref={inputRef}
        autoFocus={false}
        onKeyDown={(event) => handleOnKeyDown(event)}
    />


}

export default SearchBar;
