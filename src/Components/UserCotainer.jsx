import React, { useEffect } from 'react'
import { fetchUsers } from '../redux'
import { connect } from 'react-redux'

const UserCotainer = ({userData,fetchUsers}) => {

    useEffect(()=>{
        fetchUsers()
    },[fetchUsers])

    return userData.loading ?(
        <h2>Loading</h2>
    ): userData.error ? (
        <h2>{userData.error}</h2>
    ):(
        <div>
            <h2>user list</h2>
            <div>
                {userData && userData.users && userData.users.map(user =>  
                <p key={user.id} >
                    <h4>
                       {user.name}
                    </h4>
                       {user.email}
                       </p>   )}
            </div>
        </div>
    )

 
}

const mapStateToProps = state=>{
    return{
        userData:state.user
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        fetchUsers:()=> dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (UserCotainer)
