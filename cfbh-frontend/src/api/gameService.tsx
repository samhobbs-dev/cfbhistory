import axios from 'axios';
import GameStatus from '../type/gameStatus';
import TeamGame from '../type/teamGame';
import { HOST } from './recordService';
import Schedule from '../type/schedule';

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

type ScheduleResponse = {
    teamId: number,
    games: GameResponse[]
}

const GameService = {
    createScheduleGame(r: GameResponse, teamId: number) {
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
        const game: TeamGame = {
            year: r.year,
            week: r.week,
            isPostseasonGame: r.isPostseasonGame,
            gameStatus: gameStatus,
            isCompleted: r.isCompleted,
            isConferenceGame: r.isConferenceGame,
            opponentTeamId,
            teamPoints,
            opponentTeamPoints
        };
        return game;
    },
    createScheduleGames(gr: GameResponse[], teamId: number) {
        const games: TeamGame[] = [];
        gr.forEach(r => {
            const game = this.createScheduleGame(r,teamId);
            games.push(game);
        });
        return games;
    },
    async getAllTeamSchedules(year: number) {
        try {
            const { data: resp } = await axios.get<ScheduleResponse[]>(HOST + '/game/all/' + year);
            const schedules: Schedule[] = [];
            resp.forEach(r => {
                const schedule: Schedule = {
                    teamId: r.teamId,
                    games: this.createScheduleGames(r.games,r.teamId)
                };
                schedules.push(schedule);
            });
            return schedules;
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
    async getTeamGamesForYear(teamId: number, year: number) {
        try {
            const { data: resp } = await axios.get<GameResponse[]>(HOST + '/game/' + teamId, { params: { year }});
            const games: TeamGame[] = [];
            resp.forEach(r => {
                const game = this.createScheduleGame(r,teamId);
                games.push(game);
            });
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
};

export default GameService;