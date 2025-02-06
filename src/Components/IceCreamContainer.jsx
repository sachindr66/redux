
import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer (props) {

  return (
    <div>
        <h4>Number of IceCreams:{props.numberOfIceCream}</h4>
        <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  )
}

const mapStateToPrps =state =>{
    return{
        numberOfIceCream:state.iceCream.numberOfIceCream
    }
}

const mapasDispatchToProps =dispatch=>{
    return{
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToPrps, mapasDispatchToProps) (IceCreamContainer)
