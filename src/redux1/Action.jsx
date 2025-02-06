import axios from "axios"
import { ADD_USER, DELET_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST, UPDATE_USER } from "./Actiontype"

export const makerequest = () => {
 return{
    type:MAKE_REQUEST
 }
}

export const failquest = (err) => {
    return{
       type:FAIL_REQUEST,
       payload:err

    }
   }

   export const getuserlist = (data) => {
    return{
       type:GET_USER_LIST,
       payload:data
    }
   }

   export const deletuser = () => {
    return{
       type:DELET_USER,
    }
   }

   export const adduser = () => {
    return{
       type:ADD_USER,
    }
   }

   export const updateuser = () => {
    return{
       type:UPDATE_USER,
    }
   }

   export const getuserobj = (data) => {
    return{
       type:GET_USER_OBJ,
       payload:data
    }
   }

   export const FetchUserList=()=>{
    return(dispatch)=>{
        // setTimeout(()=>{
            dispatch(makerequest())
            axios.get("http://localhost:8000/user")
            .then(res=>{
                const userlist=res.data
                dispatch(getuserlist(userlist))
            }).catch(err=>{
                dispatch(failquest(err.message))
            })

        // },2000)
    }}


        export const Removeuser=(code)=>{
            return(dispatch)=>{
                // setTimeout(()=>{
                    dispatch(makerequest())
                    axios.delete("http://localhost:8000/user/"+code)
                    .then(res=>{
                        dispatch(deletuser())
                    }).catch(err=>{
                        dispatch(failquest(err.message))
                    })
        
                // },2000)
       
    }
   }

   export const FunctionAddUser=(data)=>{
    return(dispatch)=>{
        // setTimeout(()=>{
            dispatch(makerequest())
            axios.post("http://localhost:8000/user/",data)
            .then(res=>{
                dispatch(adduser(res.data))
                alert('user added succesfully')
            }).catch(err=>{
                dispatch(failquest(err.message))
            })

        // },2000)

}
}


export const FunctionUpadteUser=(data,code)=>{
    return(dispatch)=>{
        // setTimeout(()=>{
            dispatch(makerequest())
            axios.put("http://localhost:8000/user/"+code,data)
            .then(res=>{
                dispatch(updateuser())
                alert('user update succesfully')
            }).catch(err=>{
                dispatch(failquest(err.message))
            })

        // },2000)

}
}


export const FetchUserobj=(code)=>{
    return(dispatch)=>{
        // setTimeout(()=>{
            dispatch(makerequest())
            axios.get("http://localhost:8000/user/"+code)
            .then(res=>{
                const userlist=res.data
                dispatch(getuserobj(userlist))
            }).catch(err=>{
                dispatch(failquest(err.message))
            })

        // },2000)
    }}