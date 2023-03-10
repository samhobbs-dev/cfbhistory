import { Grid } from "@mui/material";
import { Conference } from "../type/conference";
import TeamRecord from "./TeamRecord";

interface MyProps {
    conference: Conference;
}

const ConfStandings: React.FC<MyProps> = ({ conference }) => {
    return (
        <Grid container direction="column">
            {conference.divisions.map(div =>(
                div.teams.map(team => (
                    <TeamRecord record={team}/>
                )
            )))}
        </Grid>
    );
}

export default ConfStandings;