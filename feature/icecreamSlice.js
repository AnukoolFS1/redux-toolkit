const { cakeActions } = require('./cakeSlice');
const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 20
}

const icecreamSlice = createSlice({
    name: "ice cream",
    initialState,
    reducers:{
        order:(state, action) => {
            if(action.payload){
                state.numOfIceCream -= action.payload
            }else{
                state.numOfIceCream--
            }
        },
        restock:(state, action)=>{
            state.numOfIceCream += action.payload
        }
    },
    extraReducers:(builder) => {
        builder.addCase(cakeActions.order, (state) => {
            state.numOfIceCream--
        })
    }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamAction = icecreamSlice.actions;