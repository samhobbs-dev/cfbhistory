import { useState, useEffect } from "react";
import { Team } from "../type/team";
import { Typography } from "@mui/material";
import TeamService from "../api/teamService";
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface MyProps {
    teamId: number;
    year: number;
}

const ScheduleHeader: React.FC<MyProps> = ({ teamId, year }) => {
    const [school, setSchool] = useState<string>('');
	var teams = useAppSelector(state => state.teamList.teamList);

    useEffect(() => {
        var team = teams.find(t => t.id === teamId);
        if (team !== undefined)
            setSchool(team.school);
        // TeamService.getTeamAndLogoByYear(teamId,year).then(response => {
        //     let schoolName = (response as Team).school;
        //     setSchool(schoolName);
        //   });
      },[teams, teamId, year]);
    return school !== '' ? (
        <>
        <Typography>{school}</Typography>
        <Typography>Schedule</Typography>
        </>
    ) : <></>;
}

export default ScheduleHeader;