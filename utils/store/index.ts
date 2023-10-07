import { configureStore } from '@reduxjs/toolkit'
import registerReducer from './reducers/registerReducer'

export const store = configureStore({
  reducer: {
    registerData: registerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch