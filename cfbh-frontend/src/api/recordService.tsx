import axios from "axios";
import { SeasonRecord } from "../type/record";
import { RecordTeam } from "../type/recordTeam";

type GetRecordsResponse = {
    data: RecordResponse[];
};

type RecordResponse = {
    id: number;
    teamId: number;
    year: number;
    division: string;   // Optional
    conference: string;
    totalWins: number;
    totalLosses: number;
    totalTies: number;
    totalConfWins: number;
    totalConfLosses: number;
    totalConfTies: number;
}

type RecordTeamResponse = {
    id: number;
    fullName: string;
    school: string;
    mascot: string;
    // Ignoring logos[]
}

type LogoResponse = {

}

// TODO strict typing & async requests?
export const HOST = 'http://localhost:8081'
const RecordService = {
    // API calls
    async getAllTeamRecordsByYear(year: number) {
        try {
            const { data: resp } = await axios.get<GetRecordsResponse>(HOST + '/record/' + year);
            return resp;
        } catch (error) {
            return 'error';
        }
    },
    getConferenceTeamIds(year: number, conference: string) {

    },
    // Group calls
    async getAllConferenceStandings(year: number) {
        // Get all team records, organize everything into conferences & divisons, & sort        
        try {
            const { data: resp } = await axios.get<RecordResponse[]>(HOST + '/record/' + year);
            var allRecords: SeasonRecord[] = [];
            resp.forEach(r => {
                var record: SeasonRecord = {
                    id: r.id,
                    team: null,
                    year: r.year,
                    division: r.division,
                    conference: r.conference,
                    totalWins: r.totalWins,
                    totalLosses: r.totalLosses,
                    totalTies: r.totalTies,
                    totalConfWins: r.totalConfWins,
                    totalConfLosses: r.totalConfLosses,
                    totalConfTies: r.totalConfTies
                }

                allRecords.push(record);
            });
            
            return allRecords;
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
            const response = await axios.get(HOST + '/logo/' + teamId, { params: { year } });               
            let logoBlob = new Blob(
                [response.data],                    
                { type: response.headers['content-type'] }
            ); 
            
            const { data: r } = await axios.get<RecordTeamResponse>(HOST + '/team/' + teamId);
            var teamRecord: RecordTeam = {
                id: r.id,
                fullName: r.fullName,
                school: r.school,
                mascot: r.mascot,
                logo: logoBlob
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
    },
    populateTeamLogos(/*ConferenceYear*/) {
        // Call populateLogos for every team, each making a call to the logoService & backend
    }
}

export default RecordService;