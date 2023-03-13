import { Box, Grid, Paper } from "@mui/material";
import { SeasonRecord } from "../type/record";
import TeamLogo from "./TeamLogo";
import TeamSchedule from "./TeamSchedule";

interface MyProps {
    record: SeasonRecord;
}

const TeamRecord: React.FC<MyProps> = ({ record }) => {
    const team = record.team;
    
    return (
        <><Paper style={{ height: "120px", width: "400px" }}>
            <Grid container spacing={1} height="120px" alignContent="center" alignItems="center" direction="row">
                <Grid item xs={6}>
                    <TeamLogo teamId={team.id} year={record.year} />
                </Grid>
                <Grid item xs={6}>
                    <b>{team.school}</b>
                    <div>
                        {record.totalWins + '-' + record.totalLosses}
                        {record.totalTies > 0 ? record.totalTies : ''}
                        {' (' + record.totalConfWins + '-' + record.totalConfLosses}
                        {record.totalConfTies > 0 ? record.totalConfTies + ')' : ')'}
                    </div>
                </Grid>
            </Grid>
        </Paper>
        <TeamSchedule
            teamId={team.id}
            year={record.year} />
        </>
    );
}

export default TeamRecord;