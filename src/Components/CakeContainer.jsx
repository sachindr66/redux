import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'
import HooksCakecontainer from './HooksCakecontainer'


const CakeContainer = (props) => {
  return (
    <div>
        <HooksCakecontainer/>
        <h1>Number of cake {props.numberOfCakes}</h1>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToPrps =state =>{
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToPrps = dispatch =>{
    return{
        buyCake: ()=> dispatch(buyCake())
    }
}

export default  connect(
    mapStateToPrps,
    mapDispatchToPrps,

)(CakeContainer)
