import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface ScheduleState {
    teamId: number
}

export const NO_TEAM: number = -1;

const initialState: ScheduleState = {
    teamId: NO_TEAM
}

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setScheduleTeamId: (state, action: PayloadAction<number>) => {
            state.teamId = action.payload;
        }
    }
});

export const { setScheduleTeamId } = scheduleSlice.actions;
export const selectScheduleTeamId = (state: RootState) => state.schedule.teamId;
export default scheduleSlice.reducer;