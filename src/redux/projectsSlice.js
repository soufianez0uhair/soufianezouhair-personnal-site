import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import { PROJECTS_API } from "../Api";

const initialState = {
    projects: [],
    status: 'idle',
    error: null
}

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async  (thunkAPI) => {
    try {
        const response = await axios.get(PROJECTS_API);

        return response.data.data.projects;
    } catch(err) {
        if(!err.response) {
            throw err.message;
        }

        throw thunkAPI.rejectWithValue(err.response.data.message);
    }
})

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
    }
})

export default projectsSlice.reducer;
export const selectAllProjects = state  => state.projects.projects;
export const getStatusProjects = state => state.projects.status;
export const getErrorProjects = state => state.projects.error;