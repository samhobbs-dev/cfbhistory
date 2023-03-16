import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import RecordService from "../api/recordService";
import { Conference } from "../type/conference";
import ConfStandings from "./ConfStandings";

interface MyProps {
    year: number
}

const ConfGrid: React.FC<MyProps> = ({ year }) => {
    const [conferences, setConferences] = useState<Conference[]>([]);
    
    useEffect(() => {
        RecordService.getAllConferenceStandings(year).then(response => {
            let confResponse = response as Conference[];
            confResponse.sort((a,b) => {
                return a.name.localeCompare(b.name);
            });
            setConferences(confResponse);
        });
    }, [year]);

    return (
        <Grid container direction="row" spacing={3} mb={5} justifyContent="center">
            {conferences.map(conf => (
                <Grid item>
                    <ConfStandings conference={conf} />
                </Grid>
            ))}            
        </Grid>
    );
}

export default ConfGrid;