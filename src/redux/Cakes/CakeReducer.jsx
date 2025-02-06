import { BUY_CAKE } from "./CakeType"

const initialState ={
    numberOfCakes : 12
}

const cakeReucer =( state =initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{
                ...state,
                numberOfCakes :state.numberOfCakes -1
            }
            default: return state
    }

}
export default cakeReucer