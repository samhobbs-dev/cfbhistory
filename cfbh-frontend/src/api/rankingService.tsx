import axios from 'axios';
import { HOST } from './recordService';

type RankingResponse = {
    id: number;
    teamId: number;
    year: number;
    week: number;
    ranking: number;
    isPostseasonGame: boolean;
    poll: string;
    conference: string;
    firstPlaceVotes: number | null;
    points: number | null;
}

const RankingService = {
    async getFinalAPRankingsByYear(year: number) {
        try {
            const { data: resp } = await axios.get<RankingResponse[]>(HOST + '/ranking/' + year + '/final/ap');
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

export default RankingService;