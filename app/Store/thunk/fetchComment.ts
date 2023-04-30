import { createAsyncThunk } from "@reduxjs/toolkit";
import { getComment } from "../../Services";
import { CommentItem } from "../../Types/type";

export const fetchComment = createAsyncThunk<{ results: CommentItem[]}, {id: string ,page: number, limit: number}, { rejectValue: string |undefined, fullfilledMeta: void, rejectedMeta: void }>(
    'comments/fetchComments',
    async (body, thunkApi) => {        
        try {
            let params = '?page=' + body.page + '&limit=' + body.limit
            const response = await getComment(body.id, params)
            
            return thunkApi.fulfillWithValue({results: response.data})
        } catch (error) {
            console.log('error');
            return thunkApi.rejectWithValue(error);
        }
    }
)