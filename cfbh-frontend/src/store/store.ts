import { configureStore } from '@reduxjs/toolkit'
import scheduleReducer from './scheduleSlice'
import currentLogoReducer from './currentLogoSlice'

export const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    currentLogo: currentLogoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;