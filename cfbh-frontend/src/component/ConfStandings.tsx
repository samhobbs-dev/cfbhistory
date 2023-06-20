import { Grid, Paper, Stack } from "@mui/material";
import { Conference } from "../type/conference";
import TeamRecord from "./TeamRecord";

interface MyProps {
    conference: Conference;
    loading: boolean;
}

const divHeight = "50px";
const height = "110px";
const width = "260px";

const ConfStandings: React.FC<MyProps> = ({ conference, loading }) => {
    return (
        <Grid container direction="column">
            <Paper component={Stack} justifyContent="center" square elevation={0} style={{ height: divHeight, width: width, zIndex: 0 }}>
                <b>{conference.name}</b>
            </Paper>
            {conference.divisions.map(div => 
                <>
                    {div.name !== '' && 
                        <Paper component={Stack} justifyContent="center" square elevation={0} style={{ height: divHeight, width: width, background: "lightgray", zIndex: 0 }}>
                            <b>{div.name}</b>
                        </Paper>
                    } 
                    {div.teams.map(team => <TeamRecord record={team} height={height} width={width} loading={loading}/>)}
                </>
            )}
        </Grid>
    );
}

export default ConfStandings;