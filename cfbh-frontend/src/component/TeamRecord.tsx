import { CircularProgress, Grid, Stack } from "@mui/material";
import { useAppDispatch }  from "../store/hooks";
import { setScheduleTeamId } from "../store/scheduleSlice";
import { SeasonRecord } from "../type/record";
import TeamLogo from "./TeamLogo";

interface MyProps {
    record: SeasonRecord;
    height: string;
    width: string;
    loading: boolean;
}

const TeamRecord: React.FC<MyProps> = ({ record, height, width, loading }) => {    
    const dispatch = useAppDispatch();
    const team = record.team;
    
    return loading ? (
        <Stack
            style={{ height: height, width: width, zIndex: 0, fontSize: "21px", backgroundColor: "white" }}
            alignContent="center" alignItems="center" justifyContent="center"
        >
            <CircularProgress/>
        </Stack>
        ) : (
        <>
        <Stack
            style={{ height: height, width: width, zIndex: 0, fontSize: "21px", backgroundColor: "white" }}
            onMouseEnter={() => dispatch(setScheduleTeamId(team.id))}
            // onMouseLeave={() => !DEBUG_SCHEDULE && dispatch(setScheduleTeamId(NO_TEAM))}
            >
            <Grid container height={height} width={width} alignContent="center" alignItems="center">
                <Grid item xs={6}>
                    <Stack alignItems="center" alignContent="center" justifyContent="center">
                        <TeamLogo teamId={team.id} year={record.year} xy maxHeight={100}/>
                    </Stack>
                </Grid>
                {/* TODO replace container with more manual text centering */}
                <Grid item xs={6} container direction="column" alignContent="center" alignItems="center" height="90%">
                    <Grid item container xs={7} alignContent="center" alignItems="center" width="auto">
                        {team.school.length >= 20 ?
                        <b style={{fontSize: "18px"}}>{team.school}</b>
                        : <b>{team.school}</b>
                        }
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
        </Stack>
        </>
    );
}

export default TeamRecord;