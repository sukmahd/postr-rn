import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FeedItem } from '../Types/type'
import {fetchFeed} from '../Store/thunk/fetchFeed'
import { RootState } from './store'

interface FeedState {
    feeds: FeedItem[]
    error: string
    isLoading: boolean

}

const initialState: FeedState = {
    feeds: [],
    isLoading: false,
    error: ''
}

const feed = createSlice({
    name: 'feed',
    initialState,
    reducers:{
        addFeedItem: (state, action) => {
            const newFeed = action.payload.feed
            state.feeds = [newFeed, ...state.feeds]
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchFeed.fulfilled, (state, action) => {
            console.log("fullfilled");
            state.feeds = [...state.feeds, ...action.payload.results]
            state.isLoading = false
        })
        builder.addCase(fetchFeed.pending, (state, action) => {
            console.log("pending");
            state.isLoading = true
        })
        builder.addCase(fetchFeed.rejected, (state, action) => {
            console.log("rejected");
            state.isLoading = false
            state.error = action.error.message ?? ""
        })
    }
})

export const selectFeeds = (state: RootState) => state.feed.feeds
export const selectFeedError = (state: RootState) => state.feed.error
export const selectFeedLoading = (state: RootState) => state.feed.isLoading

export default feed.reducer
export const { addFeedItem } = feed.actions