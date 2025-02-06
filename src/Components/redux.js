
 const redux = require('redux')
 const createStore = redux.createStore

const BUY_CAKE ='BUU_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake(){
   return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIcceCream(){
    return {
         type:BUY_ICECREAM,
         info:'First redux action'
     }
 }

//(previosState, action)=newState

const initialState ={
    numOfCakes :10,
    numOfIceCreams:10
}

const reducer =(state = initialState,action)=>{
    switch(action, type){
        
        case BUY_CAKE: return{
            ...state,
            numOfCakes:state.numOfCakes -1
        }
        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams:state.numOfIceCreams -1
        }
        default: return state

    }

}

const store = createStore(reducer)
console.log('initial state'. state.getState())
const unscbscribr = store.subscribe(()=> console.log('updayed state',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcceCream())
store.dispatch(buyIcceCream())
store.dispatch(buyIcceCream())
unscbscribr()


