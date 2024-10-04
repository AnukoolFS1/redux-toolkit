const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../feature/cakeSlice');
const icereamReducer = require('../feature/icecreamSlice');


const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icereamReducer
    }
})

module.exports = store