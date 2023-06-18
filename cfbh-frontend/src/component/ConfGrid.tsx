import { Box, Grid, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import RecordService from "../api/recordService";
import { Conference } from "../type/conference";
import ConfStandings from "./ConfStandings";
import TeamSchedule from "./TeamSchedule";
import Rankings from "./Rankings";

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
        <div>
            <Stack direction="row" justifyContent="center">
                <TeamSchedule 
                    teamId={2}
                    year={year}
                />
                <Grid container item direction="row" spacing={3} mb={5} justifyContent="center">
                    {conferences.map(conf => (
                        <Grid item>
                            <ConfStandings conference={conf} />
                        </Grid>
                    ))}            
                </Grid>
                <Rankings
                    year={year}
                />
            </Stack>
        </div>
    );
}

export default ConfGrid;