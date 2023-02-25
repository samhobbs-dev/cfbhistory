// Query teams, records, conferences, etc. from CFDB (https://collegefootballdata.com)

// TODO place token elsewhere
export const TOKEN = 'Bearer WXIGJhaBXf3xQfx/Ctrh4seXMLjAojnbQKhpouBKgzZYVVXydpI6jourT5YJ45sA';

const CfdbService = {
    // API calls
    getAllTeamRecordsByYear(year: number) {

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