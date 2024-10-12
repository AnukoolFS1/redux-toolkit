const store = require('./app/store');
const cakeActions = require('./feature/cakeSlice').cakeActions;
const icecreamAction = require('./feature/icecreamSlice').icecreamAction;
const fetchUser = require('./feature/userSlice').fetchUser
const dispatch = store.dispatch
console.log(store.getState())

const unsubscribe = store.subscribe(()=>console.log(store.getState()))

dispatch(fetchUser())
// dispatch(cakeActions.order())
// dispatch(cakeActions.order())
// dispatch(cakeActions.order())
// dispatch(cakeActions.order())
// dispatch(cakeActions.restock(4))

// dispatch(icecreamAction.order())
// dispatch(icecreamAction.order())
// dispatch(icecreamAction.order())
// dispatch(icecreamAction.order(2))
// dispatch(icecreamAction.restock(5))

// unsubscribe()

