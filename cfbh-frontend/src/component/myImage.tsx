import React from "react";
import RecordService from "../api/recordService";
import { RecordTeam } from "../type/recordTeam";

const S3_LINK: string = 'https://cfbh-logos.s3.us-east-2.amazonaws.com/';

interface MyState {
    image: string;
}

interface MyProps {
    teamId: number;
    year: number;
}

class MyImage extends React.Component<MyProps, MyState> {    
    constructor(props: any) {
        super(props);
        this.state = {
            image: ''
        };
    }

    componentDidMount(): void {        
        this.getImage();       
    }

    async getImage() {
        RecordService.getTeamAndLogoByYear(this.props.teamId,this.props.year).then(response => {
            let logoImage = (response as RecordTeam).logo;
            logoImage = S3_LINK + logoImage;
            this.setState(state => ({
                ...state,
                image: logoImage
            }))            
        });
    }
    
    render() {
        const { image } = this.state;
        return (
            <img src={image} alt="myLogo" height="100px"/>
        );
    }
}

export default MyImage;