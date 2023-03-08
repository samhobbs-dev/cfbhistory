import axios from "axios";
import GameStatus from "../type/gameStatus";
import TeamGame from "../type/teamGame";
import { HOST } from "./recordService";

type GameResponse = {
    id: number
    year: number,
    week: number,
    isPostseasonGame: boolean,
    homePoints: number;
    awayPoints: number;
    isCompleted: boolean;
    isConferenceGame: boolean;
    homeTeamId: number;
    awayTeamId: number;
}

const GameService = {
    async getTeamGamesForYear(teamId: number, year: number) {
        try {
            const { data: resp } = await axios.get<GameResponse[]>(HOST + '/game/' + teamId, { params: { year }});
            var games: TeamGame[] = [];
            resp.forEach(r => {
                let gameStatus: GameStatus = null;
                let opponentTeamId: number = 0;
                let teamPoints: number = 0;
                let opponentTeamPoints: number = 0;
                // Map if game was won/lost/etc. by team; assume api always returns game w/their id
                if (teamId === r.homeTeamId) {
                    opponentTeamId = r.awayTeamId;
                    teamPoints = r.homePoints;
                    opponentTeamPoints = r.awayPoints;
                    if (r.homePoints > r.awayPoints)
                        gameStatus = 'W';
                    else if (r.homePoints < r.awayPoints)
                        gameStatus = 'L';
                } else if (teamId === r.awayTeamId) {
                    opponentTeamId = r.homeTeamId;
                    teamPoints = r.awayPoints;
                    opponentTeamPoints = r.homePoints;
                    if (r.homePoints < r.awayPoints)
                        gameStatus = 'W';
                    else if (r.homePoints > r.awayPoints)
                        gameStatus = 'L';
                }
                if (r.homePoints === r.awayPoints)
                    gameStatus = 'T';                        
                // null if points were not in response
                var game: TeamGame = {
                    year: r.year,
                    week: r.week,
                    isPostseasonGame: r.isPostseasonGame,
                    gameStatus: gameStatus,
                    isCompleted: r.isCompleted,
                    isConferenceGame: r.isConferenceGame,
                    opponentTeamId,
                    teamPoints,
                    opponentTeamPoints
                }
                games.push(game);
            })
            return games;
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
    ,
    populateAllTeamGamesForYear(year: number/*,teams[]*/) {}
}

export default GameService;