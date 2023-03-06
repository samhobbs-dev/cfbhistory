import { RecordTeam } from "./recordTeam";

export type SeasonRecord = {
    id: number;
    team: RecordTeam | null;
    year: number;
    division: string;   // Optional
    conference: string;
    totalWins: number;
    totalLosses: number;
    totalTies: number;
    totalConfWins: number;
    totalConfLosses: number;
    totalConfTies: number;
};