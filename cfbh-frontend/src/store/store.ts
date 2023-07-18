import { configureStore } from '@reduxjs/toolkit'
import scheduleReducer from './currentScheduleSlice'
import currentLogoReducer from './currentLogoSlice'
import scheduleListReducer from './scheduleListSlice'

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    currentLogo: currentLogoReducer,
    scheduleList: scheduleListReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;