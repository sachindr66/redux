// import { configureStore,combineReducers } from "@reduxjs/toolkit";
// import { Reducer } from "./Reducer";
// import {thunk}  from "redux-thunk";
// import logger from "redux-logger";

// const rootreducer=combineReducers({user:Reducer})
// const Store= configureStore({reducer:rootreducer,middleware:[thunk,logger]})

// export default Store/

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import logger from "redux-logger";

// Combine reducers
const rootReducer = combineReducers({ user: Reducer });

// Configure store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
