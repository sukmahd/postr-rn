import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"


interface UserState {
    users: string[]
    currentUser: string
    location: {
        latitude: number
        longitude: number
    }
}

const initialState: UserState = {
    users: [],
    currentUser: '',
    location: {
        latitude: 0,
        longitude: 0
    }
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser: (state,action) => {
            state.users = [...state.users, action.payload.user]
        },
        setUser: (state, action) => {
            state.currentUser = action.payload.user
        },
        resetUser: (state, action) => {
            state.currentUser = ''
        },
        setLocation: (state, action) => {
            state.location = action.payload.location
        }
    }
})

export const selectCurrentUser = (state: RootState) => state.user.currentUser
export const selectUserLocation = (state: RootState) => state.user.location

export default user.reducer
export const { addUser, setUser, resetUser, setLocation } = user.actions