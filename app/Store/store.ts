import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import feed from './feedSlice'
import comment from './commentSlice'

const middleware: any[] = []

const store = configureStore({
    reducer: {
        feed,
        comment
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store