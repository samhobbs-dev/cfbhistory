import { Grid, Paper, Stack } from "@mui/material";
import { useAppDispatch }  from "../store/hooks";
import { NO_TEAM, setScheduleTeamId } from "../store/scheduleSlice";
import { SeasonRecord } from "../type/record";
import TeamLogo from "./TeamLogo";

interface MyProps {
    record: SeasonRecord;
    height: string;
    width: string;
}

const DEBUG_SCHEDULE = false;

const TeamRecord: React.FC<MyProps> = ({ record, height, width }) => {
    const dispatch = useAppDispatch();
    const team = record.team;
    
    return (
        <>
        <Paper
            square
            elevation={0}
            style={{ height: height, width: width, zIndex: 0, fontSize: "21px" }}
            onMouseEnter={() => dispatch(setScheduleTeamId(team.id))}
            onMouseLeave={() => !DEBUG_SCHEDULE && dispatch(setScheduleTeamId(NO_TEAM))}>
            <Grid container height={height} width={width} alignContent="center" alignItems="center">
                <Grid item xs={6}>
                    <TeamLogo teamId={team.id} year={record.year} xy={100}/>
                </Grid>
                <Grid item xs={6} container direction="column" alignContent="center" alignItems="center" height="90%">
                    <Grid item container xs={7} alignContent="center" alignItems="center" width="auto">
                        <b>{team.school}</b>
                    </Grid>
                    <Grid item xs={5}>
                        <div>
                            {record.totalWins + '-' + record.totalLosses}
                            {record.totalTies > 0 ? record.totalTies : ''}
                            {' (' + record.totalConfWins + '-' + record.totalConfLosses}
                            {record.totalConfTies > 0 ? record.totalConfTies + ')' : ')'}
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        </>
    );
}

export default TeamRecord;