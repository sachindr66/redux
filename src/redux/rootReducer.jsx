import { combineReducers } from "redux";
import cakeReucer from "./Cakes/CakeReducer";
import IceCreamReducer from "./IceCreams/IceCreamReducer";
import UserReducer from "./User/UserReducer";
import { todoReducer } from "./Practice/PrcaticeType";


const rootReducer = combineReducers( {
    cake:cakeReucer,
    iceCream:IceCreamReducer,
    user:UserReducer,
    todo:todoReducer

})

export default rootReducer
