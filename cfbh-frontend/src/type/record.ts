import { Team } from "./team";

export type SeasonRecord = {
    id: number;
    team: Team;   // | null;
    year: number;
    division: string;   // No division name means empty string
    conference: string;
    totalWins: number;
    totalLosses: number;
    totalTies: number;
    totalConfWins: number;
    totalConfLosses: number;
    totalConfTies: number;
};