import axios from "axios"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"


export const fetchUsersRequest = ()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const featcUserhSucces =users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }

}

export const fetchUsersFailur =error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

export const fetchUsers =()=>{
    return(dispatch)=>{
        dispatch(fetchUsersRequest)
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(response=>{
        const users=response.data
        dispatch(featcUserhSucces(users))
    })
    .catch(error=>{
        const errorMsg = error.message
        dispatch(fetchUsersFailur(errorMsg))
    })
    }
}
