import { IconButton, MenuItem, Select, Stack } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';

interface MyProps {
    defaultYear: number,
    onChange: any,
    incrementYear: any,
    decrementYear: any
}

const CURRENT_YEAR = 2023;  // Last year with data + 1
const FIRST_YEAR = 1897;

const ConfYear: React.FC<MyProps> = ({ defaultYear, onChange, incrementYear, decrementYear }) => {
    const [year, setYear] = useState(defaultYear);
    var years = Array.from({ length: CURRENT_YEAR - FIRST_YEAR}, (value, index) => index + FIRST_YEAR);
    function handleChange(event: any) {
        onChange(event.target.value);
    }
    return (
        <Stack spacing={1} direction="row">
            <IconButton onClick={decrementYear}>
                <ArrowLeftIcon/>
            </IconButton>
            <Select defaultValue={year} onChange={handleChange}>
                {years.map(y => <MenuItem value={y}>{y}</MenuItem>
                )}
            </Select>            
            <IconButton onClick={incrementYear}>
                <ArrowRightIcon/>
            </IconButton>
        </Stack>
    );
}

export default ConfYear;