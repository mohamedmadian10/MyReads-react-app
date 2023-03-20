import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
        },
        endLoading(state) {
            state.isLoading = false;
        }
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice;