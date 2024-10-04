const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 20
}

const cakeSlice = createSlice({
    name: "cakes",
    initialState,
    reducers:{
        order:(state, action) => {
            if(action.payload){
                state.numOfCakes -= action.payload
            }else{
                state.numOfCakes--
            }
        },
        restock:(state, action)=>{
            state.numOfCakes += action.payload
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;