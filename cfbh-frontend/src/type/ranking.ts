type Ranking = {
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

export default Ranking;