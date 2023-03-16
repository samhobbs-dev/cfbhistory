import { Grid, Paper } from "@mui/material";
import { Conference } from "../type/conference";
import TeamRecord from "./TeamRecord";

interface MyProps {
    conference: Conference;
}

const ConfStandings: React.FC<MyProps> = ({ conference }) => {
    return (
        <Grid container direction="column">
            <Paper style={{ height: "50px", width: "300px", zIndex: 0 }}>
                <b>{conference.name}</b>
            </Paper>
            {conference.divisions.map(div => 
                <>
                <>
                    {div.name !== '' && 
                        <Paper style={{ height: "50px", width: "300px", background: "lightgray", zIndex: 0 }}>
                            <b>{div.name}</b>
                        </Paper>
                    }                    
                </>
                <>
                    {div.teams.map(team => <TeamRecord record={team} />)}
                </>
                </>
            )}
        </Grid>
    );
}

export default ConfStandings;