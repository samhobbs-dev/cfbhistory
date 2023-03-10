import { RecordTeam } from "./recordTeam";

export type SeasonRecord = {
    id: number;
    team: RecordTeam;   // | null;
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