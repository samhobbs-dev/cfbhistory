import { Box, IconButton, MenuItem, Select, Stack, Switch, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { setUseCurrentLogo } from '../store/currentLogoSlice';

interface MyProps {
    defaultYear: number,
    onChange: any,
    incrementYear: any,
    decrementYear: any
}

const CURRENT_YEAR = 2023;  // Last year with data + 1
const FIRST_YEAR = 1897;

const ConfYear: React.FC<MyProps> = ({ defaultYear, onChange, incrementYear, decrementYear }) => {
    const dispatch = useAppDispatch();
    const [year, setYear] = useState(defaultYear);
    var years = Array.from({ length: CURRENT_YEAR - FIRST_YEAR}, (value, index) => index + FIRST_YEAR);
    function handleChange(event: any) {
        onChange(event.target.value);
    }
    return (
        <div style={{ padding: "10px" }}>
            <Stack spacing={2} direction="row" alignItems="center" width="90vw">
                <Box width="20%"/>
                <Stack spacing={1} direction="row" justifyContent="center" width="60%">
                    <IconButton onClick={decrementYear}>
                        <ArrowLeftIcon/>
                    </IconButton>
                    <Select defaultValue={year} onChange={handleChange} style={{ backgroundColor:"white"}}>
                        {years.map(y => <MenuItem value={y}>{y}</MenuItem>)}
                    </Select>            
                    <IconButton onClick={incrementYear}>
                        <ArrowRightIcon/>
                    </IconButton>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="center" width="20%">
                    <Typography>Current Logos</Typography>
                    <Switch onChange={() => dispatch(setUseCurrentLogo())}/>
                </Stack>
            </Stack>
        </div>
    );
}

export default ConfYear;