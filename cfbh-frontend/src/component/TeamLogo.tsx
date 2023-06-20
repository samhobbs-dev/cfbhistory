import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import RecordService from "../api/recordService";
import { RecordTeam } from "../type/recordTeam";
import { useAppSelector } from "../store/hooks";

export const S3_LINK: string = 'https://cfbh-logos.s3.us-east-2.amazonaws.com/';

interface MyProps {
    teamId: number;
    year: number;
    maxHeight: number;
    maxWidth?: number;
    xy?: boolean;
    isSchedule?: boolean;
    fontSize?: string;
}

// Set this to true or false if we want to display copyrighted logos or not
const FETCH_IMAGE = true;
const CURRENT_YEAR = 2022;

const TeamLogo: React.FC<MyProps> = ({ teamId, year, maxHeight, maxWidth, xy, isSchedule, fontSize }) => {
    const useCurrentLogo = useAppSelector(state => state.currentLogo.useCurrentLogo);
    const searchYear = useCurrentLogo ? CURRENT_YEAR - 1 : year;

    const [image, setImage] = useState<string>('');
    const [noImage, setNoImage] = useState<boolean>(false);
    const [school, setSchool] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    if (xy) {
        maxWidth = maxHeight;
    }

    useEffect(() => {
        setLoading(true);
        RecordService.getTeamAndLogoByYear(teamId,searchYear).then(response => {
            let logoImage = (response as RecordTeam).logo;
            let schoolName = (response as RecordTeam).school;
            if (FETCH_IMAGE && logoImage !== '') {
                logoImage = S3_LINK + logoImage;
                setImage(logoImage);
                setNoImage(false);
            } else {
                setNoImage(true);
            }
            setSchool(schoolName);
            setLoading(false);
        });
    },[teamId, searchYear]);
    
    return loading ? (
        <div>
            <CircularProgress/>
        </div>    
    ) : (noImage === false ? (
            <div>
                <img src={image} style={{ maxHeight: maxHeight, maxWidth: maxWidth, zIndex: -1, display: "flex" }} alt="logo" height="auto" width="auto" title={school}/>
            </div>
        ) : (
            <div>
                {isSchedule ? (
                    fontSize? (
                        <b style={{ fontSize: fontSize, display: "flex" }}>{school}</b>
                    ) : <b style={{ display: "flex" }}>{school}</b>
                ) : ''}
            </div>
        )
    );
};

export default TeamLogo;