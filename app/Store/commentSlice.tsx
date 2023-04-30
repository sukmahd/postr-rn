import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { CommentItem } from '../Types/type'
import { fetchComment } from '../Store/thunk/fetchComment'
import { RootState } from './store'

interface CommentState {
    comments: CommentItem[]
    error: string
    isLoading: boolean
}

const initialState: CommentState = {
    comments: [],
    isLoading: false,
    error: ''
}

const comment = createSlice({
    name: 'feed',
    initialState,
    reducers:{
        addCommentItem: (state, action) => {
            console.log('action', action);
            
            const newComment = action.payload.comment
            state.comments = [newComment, ...state.comments]
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchComment.fulfilled, (state, action) => {
            console.log("fullfilled");
            state.comments = [...action.payload.results]
            state.isLoading = false
        })
        builder.addCase(fetchComment.pending, (state, action) => {
            console.log("pending");
            state.isLoading = true
        })
        builder.addCase(fetchComment.rejected, (state, action) => {
            console.log("rejected");
            state.isLoading = false
            state.error = action.error.message ?? ""
        })
    }
})

export const selectComments = (state: RootState) => state.comment.comments
export const selectCommentError = (state: RootState) => state.comment.error
export const selectCommentLoading = (state: RootState) => state.comment.isLoading

export const { addCommentItem } = comment.actions
export default comment.reducer