import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
    params: { hl: 'en', gl: 'US' },
    headers: {
        'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_API_KEY,
        'x-rapidapi-host': 'youtube138.p.rapidapi.com'
    }
}

export const fetchDataFromApi = createAsyncThunk('api/fetchDataFromApi', async (url) => {
    // const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    const { data } = await axios.get('http://lrh.nw18.com:81/getTallyServerDetails')
    return data
})

const initialState = {
    data: [],
    searchResults: false,
    selectCategories: 'New',
    mobileMenu: false,
    loading: false,
    error: ''
}

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setMobileMenu: (state, action) => {
            state.mobileMenu = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataFromApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDataFromApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload
            })
            .addCase(fetchDataFromApi.rejected, (state, action) => {
                state.loading = false;
                state.data = []
                state.error = action.error.message
            })
    }
})

export const { setMobileMenu } = apiSlice.actions

export default apiSlice.reducer;