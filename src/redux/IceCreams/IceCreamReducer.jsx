import { BUY_ICECREAM } from './IceCreamTypes';

const initialState ={
    numberOfIceCream:20
}


const IceCreamReducer = (state =initialState,action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCream:state.numberOfIceCream-1
            } 
        default:
            return state
    }

}

export default IceCreamReducer
