import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface LogoState {
    teamId: string,
    logoImage: string
}

const initialState: LogoState[] = [];

const logoSlice = createSlice({
    name: 'logos',
    initialState,
    reducers: {
        logoAdded(state, action) {
            state = state.slice();
            state.push(action.payload);
        }
    }
});

export const { logoAdded } = logoSlice.actions;
export const selectLogos = (state: RootState) => state.logos.payload;