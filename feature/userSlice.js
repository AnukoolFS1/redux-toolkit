const createSlice = require('@reduxjs/toolkit').createSlice
const asyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUser = asyncThunk('users/fetchUser', () => {
    return fetch('https://jsonplaceholder.typicode.com/user4654')
        .then(result => result.json())
        .then(result => result.map(e => e.id))
        .catch(result => { throw 'something went wrong' })
})

const userSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = ''
        }
        )
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser