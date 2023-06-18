import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ConfGrid from "../component/ConfGrid";
import ConfYear from "../component/ConfYear";
import TeamSchedule from "../component/TeamSchedule";
import { useAppSelector } from "../store/hooks";
import { NO_TEAM } from "../store/scheduleSlice";

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
       {isTeam && (
            <div style={{ position: "fixed", zIndex: 1, bottom: 0}}>
                {/* <TeamSchedule
                    teamId={teamId}
                    year={currentYear}
                /> */}
            </div>
        )}
        <ConfGrid year={currentYear}/>
        </>
    );
}

export default SchedulePage;