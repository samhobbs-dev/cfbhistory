import axios from "axios";
import { Team } from "../type/team";
import { HOST } from "./recordService";

type TeamResponse = {
    id: number;
    fullName: string;
    school: string;
    mascot: string;
    // Ignoring logos[]
}

type FullTeamResponse = {
    id: number;
    fullName: string;
    school: string;
    mascot: string;
    // Backend will fetch team's logo for specified year
    logo: string;
}

const TeamService = {    
    async getAllTeamsInYear(year: number) {
        try {
            const { data: resp } = await axios.get<Team[]>(HOST + '/team/all/' + year);
            return resp;
        } catch (error) {            
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    },
    async getTeamAndLogoByYear(teamId: number, year: number) {
        try {
            const { data: logo } = await axios.get(HOST + '/logo/image/' + teamId, { params: { year } }); 
            
            const { data: r } = await axios.get<TeamResponse>(HOST + '/team/' + teamId);
            var teamRecord: Team = {
                id: r.id,
                fullName: r.fullName,
                school: r.school,
                mascot: r.mascot,
                logo: logo
            }
            return teamRecord;
        } catch (error) {            
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        }
    }
}
export default TeamService;