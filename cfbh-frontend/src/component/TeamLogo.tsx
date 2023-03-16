import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecordService from "../api/recordService";
import { RecordTeam } from "../type/recordTeam";

export const S3_LINK: string = 'https://cfbh-logos.s3.us-east-2.amazonaws.com/';

interface MyProps {
    teamId: number;
    year: number;
    isSchedule?: boolean;
}

const XY = 100;

const myStyle = {
	maxWidth: XY,
	maxHeight: XY,
    zIndex: -1
}

// Set this to true or false if we want to display copyrighted logos or not
const FETCH_IMAGE = false;

const TeamLogo: React.FC<MyProps> = ({ teamId, year, isSchedule }) => {
    const [image, setImage] = useState<string>('');
    const [noImage, setNoImage] = useState<boolean>(false);
    const [school, setSchool] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      RecordService.getTeamAndLogoByYear(teamId,year).then(response => {
            let logoImage = (response as RecordTeam).logo;
            let schoolName = (response as RecordTeam).school;
            if (FETCH_IMAGE && logoImage !== '') {
                logoImage = S3_LINK + logoImage;
                setImage(logoImage);
            } else {
                setNoImage(true);
            }
            setSchool(schoolName);
            setLoading(false);
        });
    },[teamId, year]);
    
    return loading ? (
        <div>
            <CircularProgress/>
        </div>    
    ) : (noImage === false ? (
            <div>
                <img src={image} style={myStyle} alt="logo" height="auto" width="auto" title={school}/>
            </div>
        ) : (
            <div>
                {isSchedule ? (<b>{school}</b>) : ''}
            </div>
        )
    );
};

export default TeamLogo;