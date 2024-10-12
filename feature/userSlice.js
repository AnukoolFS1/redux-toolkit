const createSlice = require('@reduxjs/toolkit').createSlice
const asyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchUser = asyncThunk('users/fetchUser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => result.data.map(e => e.id))
        .catch(err => { throw 'something went wrong' })
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