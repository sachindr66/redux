import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'


const ItemContainer = (props) => {
  return (
    <div>
        <h2>Item -{props.item}</h2>
        <button onClick={props.buyItem} >Buy Cake</button>
    </div>
  )
}

const mapStateToPrps =(state, ownProps)=>{
    const itemState = ownProps.cake
    ? state.cake.numberOfCakes :
    state.iceCream.numberOfIceCream
    return{
        item: itemState
    }
}

const mapasDispatchToProps =(dispatch, ownProps)=>{
    const dispatchFunction = ownProps.cake
     ?()=>dispatch(buyCake())
     :()=>dispatch(buyIceCream())
     return {
        buyItem:dispatchFunction
     }

}

export default connect(null,mapasDispatchToProps) (ItemContainer)
