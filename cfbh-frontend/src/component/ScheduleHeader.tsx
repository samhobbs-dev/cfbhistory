import { useState, useEffect } from "react";
import RecordService from "../api/recordService";
import { RecordTeam } from "../type/recordTeam";
import { Typography } from "@mui/material";

interface MyProps {
    teamId: number;
    year: number;
}

const ScheduleHeader: React.FC<MyProps> = ({ teamId, year }) => {
    const [school, setSchool] = useState<string>('');
    useEffect(() => {
        RecordService.getTeamAndLogoByYear(teamId,year).then(response => {
            let schoolName = (response as RecordTeam).school;
            setSchool(schoolName);
          });
      },[teamId, year]);
    return school !== '' ? (
        <>
        <Typography>{school}</Typography>
        <Typography>Schedule</Typography>
        </>
    ) : <></>;
}

export default ScheduleHeader;