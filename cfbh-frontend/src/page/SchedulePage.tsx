import ConfGrid from "../component/ConfGrid";
import TeamSchedule from "../component/TeamSchedule";
import { useAppSelector } from "../store/hooks";
import { NO_TEAM } from "../store/scheduleSlice";

interface MyProps {
    year: number
}

const SchedulePage: React.FC<MyProps> = ({ year }) => {
    const teamId = useAppSelector(state => state.schedule.teamId);
    let isTeam: boolean = teamId !== NO_TEAM;
    return (
        <>
        {isTeam && (
            <div style={{ position: "fixed", zIndex: 1, bottom: 0}}>
                <TeamSchedule
                    teamId={teamId}
                    year={year}
                />
            </div>
        )}
        <ConfGrid year={year}/>
        </>
    );
}

export default SchedulePage;