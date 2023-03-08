// Can serve as direct response from backend
type TeamGame = {
    year: number,
    week: number,
    isPostseasonGame: boolean,
    gameStatus: 'W' | 'L' | 'T' | null, // if team w/game won, lost, etc
    isCompleted: boolean;
    isConferenceGame: boolean;
    opponentTeamId: number;
    teamPoints: number;
    opponentTeamPoints: number;
    // TODO indicate home team
}

export default TeamGame;