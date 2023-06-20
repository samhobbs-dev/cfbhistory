import { Box, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ConfGrid from "../component/ConfGrid";
import ConfYear from "../component/ConfYear";
import TeamSchedule from "../component/TeamSchedule";
import { useAppSelector } from "../store/hooks";
import { NO_TEAM } from "../store/scheduleSlice";
import Rankings from "../component/Rankings";

interface MyProps {
    // year?: number
}

type MyParams = {
    year: string;
}

const SchedulePage: React.FC<MyProps> = () => {
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
    return (
        <>
        <ConfYear 
            defaultYear={currentYear}
            onChange={setCurrentYear}
            incrementYear={incrementYear}
            decrementYear={decrementYear}
            />
       {/* {isTeam && (
            <div style={{ position: "fixed", zIndex: 1, bottom: 0}}>
                <TeamSchedule
                    teamId={teamId}
                    year={currentYear}
                />
            </div>
        )} */}
        <Stack direction="row" justifyContent="center"  paddingLeft={5} paddingRight={5} spacing={2}>
            {isTeam ? 
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
                                Hover over a team to see their schedule.
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            }
            <ConfGrid year={currentYear}/>
            <Rankings
                year={currentYear}
            />
        </Stack>
        </>
    );
}

export default SchedulePage;