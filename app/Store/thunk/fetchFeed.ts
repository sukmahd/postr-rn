import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFeeds } from "../../Services";
import { FeedItem } from "../../Types/type";

export const fetchFeed = createAsyncThunk<{ results: FeedItem[]}, {page: number, limit: number}, { rejectValue: string |undefined, fullfilledMeta: void, rejectedMeta: void }>(
    'feeds/fetchFeeds',
    async (body, thunkApi) => {        
        try {
            let params = '?page=' + body.page + '&limit=' + body.limit + '&sortBy=createdAt&order=desc'
            const response = await getFeeds(params)
            
            return thunkApi.fulfillWithValue({results: response.data})
        } catch (error) {
            console.log('error');
            return thunkApi.rejectWithValue(error);
        }
    }
)