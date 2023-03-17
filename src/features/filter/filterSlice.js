const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filter: "all",
    search: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        selectedFilters: (state, action) => {
            state.filter = action.payload;
        },
        searchQuery: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice.reducer;
export const { searchQuery, selectedFilters } = filterSlice.actions;
