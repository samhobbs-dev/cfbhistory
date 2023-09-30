import axios from 'axios';
import { Team } from '../type/team';
import { HOST } from './recordService';

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
    }
};
export default TeamService;