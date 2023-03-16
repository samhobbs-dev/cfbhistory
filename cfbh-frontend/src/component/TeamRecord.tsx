import { Grid, Paper } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { NO_TEAM, setScheduleTeamId } from "../store/scheduleSlice";
import { SeasonRecord } from "../type/record";
import TeamLogo from "./TeamLogo";

interface MyProps {
    record: SeasonRecord;
}

const TeamRecord: React.FC<MyProps> = ({ record }) => {
    const dispatch = useAppDispatch();
    const team = record.team;
    
    return (
        <>
        <Paper 
            style={{ height: "120px", width: "300px", zIndex: 0 }}
            onMouseEnter={() => dispatch(setScheduleTeamId(team.id))}
            onMouseLeave={() => dispatch(setScheduleTeamId(NO_TEAM))}>
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
        </>
    );
}

export default TeamRecord;