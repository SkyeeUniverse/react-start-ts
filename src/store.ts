import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer, // Menambahkan counter reducer
  },
})

export default store

// Ekspor tipe state dan dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
