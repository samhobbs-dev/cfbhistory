import { Box, CircularProgress, Grid, Stack } from "@mui/material";
import { useAppDispatch }  from "../store/hooks";
import { setScheduleTeamId } from "../store/scheduleSlice";
import { SeasonRecord } from "../type/record";
import TeamLogo from "./TeamLogo";
import useWindowSize from "../hook/useWindowSize";

interface MyProps {
    record: SeasonRecord;
    height: number;
    width: number;
    loading: boolean;
    fontSize: number;
}

const TeamRecord: React.FC<MyProps> = ({ record, height, width, loading, fontSize }) => {   
    const windowSize = useWindowSize();
    const windowWidth = windowSize.width;
    const isWellWideEnough = windowWidth >= 600;
    const isWideEnough = windowWidth >= 1000;
    
    const dispatch = useAppDispatch();
    const team = record.team;
    const logoHeight = height - 10;
    var shrinkFont: boolean = false;
    if (isWideEnough) {
        if (team.school.length > 20)
            shrinkFont = true;
    } else {
        if (team.school.length >= 16)
            shrinkFont = true;
    }

    return loading ? (
        <Stack
            style={{ height: height, width: width, zIndex: 0, fontSize: fontSize, backgroundColor: "white" }}
            alignContent="center" alignItems="center" justifyContent="center"
        >
            <CircularProgress/>
        </Stack>
        ) : (
        <>
        <Stack
            style={{ height: height, width: width, zIndex: 0, fontSize: fontSize, backgroundColor: "white" }}
            onMouseEnter={() => dispatch(setScheduleTeamId(team.id))}
            >
            <Grid container height={height} width={width} alignContent="center" alignItems="center">
                <Grid item xs={isWideEnough ? 6 : 4}>
                    <Stack alignItems="center" alignContent="center" justifyContent="center">
                        <TeamLogo teamId={team.id} year={record.year} xy maxHeight={logoHeight}/>
                    </Stack>
                </Grid>
                {/* TODO replace container with more manual text centering */}
                <Grid item xs={isWideEnough ? 6 : 8} container direction="column" alignContent="center" alignItems="center" height="90%">
                    <Grid item container xs={7} justifyContent="center" alignContent="center" alignItems="center" width="auto">
                        <b style={{ fontSize: shrinkFont ? fontSize - 3 : fontSize }}>
                            {team.school}
                        </b>
                    </Grid>
                    <Grid item xs={5}>
                        <Box fontSize={fontSize}>
                            {record.totalWins + '-' + record.totalLosses}
                            {record.totalTies > 0 ? record.totalTies : ''}
                            {' (' + record.totalConfWins + '-' + record.totalConfLosses}
                            {record.totalConfTies > 0 ? record.totalConfTies + ')' : ')'}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
        </>
    );
}

export default TeamRecord;