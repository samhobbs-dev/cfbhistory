import { Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ConfGrid from "../component/ConfGrid";
import ConfYear from "../component/ConfYear";
import TeamSchedule from "../component/TeamSchedule";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { NO_TEAM } from "../store/currentScheduleSlice";
import Rankings from "../component/Rankings";
import useWindowSize from "../hook/useWindowSize";
import { useEffect, useState } from "react";
import GameService from "../api/gameService";
import { setTeamSchedules } from "../store/scheduleListSlice";
import Schedule from "../type/schedule";
import TeamService from "../api/teamService";
import { setTeamList } from "../store/teamListSlice";
import { Team } from "../type/team";

interface MyProps {
    // year?: number
}

type MyParams = {
    year: string;
}

const SchedulePage: React.FC<MyProps> = () => {    
    const windowSize = useWindowSize();
    const [display, setDisplay] = useState(true);
    const windowWidth = windowSize.width;
    const isWideEnough = windowWidth >= 650;

    const teamId = useAppSelector(state => state.schedule.teamId);
    const { year } = useParams<MyParams>();
    const navigate = useNavigate();
    // TODO error check/exception redirect if it's not a parsable int
    var currentYear: number = parseInt(year as string);
    function setCurrentYear(year: number){
        navigate("../year/"+(year).toString());
    }
    function incrementYear() {
        navigate("../year/"+(currentYear+1).toString());
    }
    function decrementYear() {
        navigate("../year/"+(currentYear-1).toString());
    }
    let isTeam: boolean = teamId !== NO_TEAM;

	const dispatch = useAppDispatch();
	// Call once when initialized
	TeamService.getAllTeamsInYear(currentYear).then(response => {
		dispatch(setTeamList(response as Team[]))
	});
	// GameService.getAllTeamSchedules(currentYear).then(response => {
    //     console.log('calling from schedulepage');
	// 	dispatch(setTeamSchedules(response as Schedule[]))
    useEffect(() => {
        // Update years once current year is changed
        TeamService.getAllTeamsInYear(currentYear).then(response => {
            dispatch(setTeamList(response as Team[]))
        });
    },[currentYear, dispatch])
    return (
        <>
        <ConfYear 
            defaultYear={currentYear}
            onChange={setCurrentYear}
            incrementYear={incrementYear}
            decrementYear={decrementYear}
        />
        <Stack direction="row" justifyContent="center"  paddingLeft={5} paddingRight={5} spacing={2}>
            {isWideEnough &&
            (isTeam ? 
                <TeamSchedule 
                    teamId={teamId}
                    year={currentYear}
                />
                : 
                
                <Stack justifyContent="space-between">
                    <Stack justifyContent="center" position="sticky" top="0">  
                        <Box
                            style={{ height: "50px", width: "200px", backgroundColor: "white" }}
                        >
                            <Typography>
                                Hover over or tap a team to see their schedule.
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            )
            }
            <ConfGrid year={currentYear}/>
            {isWideEnough && 
                <Rankings
                    year={currentYear}
                    height={95}
                    width={150}
                    logoHeight={80}
                />
            }
        </Stack>
        </>
    );
}

export default SchedulePage;