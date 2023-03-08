import React, { useEffect, useState } from "react";
import RecordService from "../api/recordService";
import { RecordTeam } from "../type/recordTeam";

export const S3_LINK: string = 'https://cfbh-logos.s3.us-east-2.amazonaws.com/';

interface MyProps {
    teamId: number;
    year: number;
}

const XY = 100;

const myStyle = {
	maxWidth: XY,
	maxHeight: XY
}

const MyImage: React.FC<MyProps> = ({ teamId, year }) => {
    const [image, setImage] = useState<string>('');
    const [noImage, setNoImage] = useState<boolean>(false);
    const [school, setSchool] = useState<string>('');

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
        });
    },[teamId, year]);
    
    return (
        <div>
            {noImage === false ? <img src={image} style={myStyle} alt="myLogo" height="auto" width="auto"/> : <b>{school}</b>}      
        </div>
    );
};

export default MyImage;