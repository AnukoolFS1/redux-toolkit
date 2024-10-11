const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../feature/cakeSlice');
const icereamReducer = require('../feature/icecreamSlice');
// const logger = require('redux-logger').createLogger();


const store = configureStore({
    reducer:{
        cake: cakeReducer,
        icecream: icereamReducer
    },
    // middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
})

module.exports = store