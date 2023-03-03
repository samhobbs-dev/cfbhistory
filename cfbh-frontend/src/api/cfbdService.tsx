// Query teams, records, conferences, etc. from CFDB (https://collegefootballdata.com)
import axios from "axios";

export const HOST = 'http://localhost:8081'
const CfdbService = {
    // API calls
    getAllTeamRecordsByYear(year: number) {
        return axios.get(HOST + '/record/' + year);
    },
    getConferenceTeamIds(year: number, conference: string) {

    },
    // Group calls
    getAllConferenceStandings(year: number) {

    },
    populateTeamLogos(/*ConferenceYear*/) {
        // Call populateLogos for every team, each making a call to the logoService & backend
    }
}

export default CfdbService;