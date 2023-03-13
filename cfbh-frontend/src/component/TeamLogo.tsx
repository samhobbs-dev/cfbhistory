import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import RecordService from "../api/recordService";
import { logoAdded, selectLogos } from "../state/logoSlice";
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
	maxHeight: XY
}


const TeamLogo: React.FC<MyProps> = ({ teamId, year, isSchedule }) => {
    const [image, setImage] = useState<string>('');
    const [noImage, setNoImage] = useState<boolean>(false);
    const [school, setSchool] = useState<string>('');
    
    const dispatch = useDispatch();

    useEffect(() => {
      RecordService.getTeamAndLogoByYear(teamId,year).then(response => {
            let logoImage = (response as RecordTeam).logo;
            let schoolName = (response as RecordTeam).school;
            if (logoImage !== '') {
                logoImage = S3_LINK + logoImage;
                setImage(logoImage);
            } else {
                setNoImage(true);
                setSchool(schoolName);
            }
            // dispatch(logoAdded({
            //     teamId,
            //     logoImage
            // }));
            // console.log(selectLogos);
        });
    },[dispatch, teamId, year]);
    
    return noImage === false ? (
        <div>
            <img src={image} style={myStyle} alt="logo" height="auto" width="auto"/>
        </div>
    ) : (
        <div>
            {isSchedule ? (<b>{school}</b>) : ''}                
        </div>
    );
};

export default TeamLogo;