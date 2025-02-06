
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { Link } from "react-router-dom"
import { useNavigate,useParams} from "react-router-dom"
import { FetchUserobj, FunctionUpadteUser } from "../redux1/Action";

const Updateuser = () => {
   const [id,idChange]=useState(0)
   const [name,nameChange]=useState('')
   const [email,emailChange]=useState('')
   const [phone,phonehange]=useState('')
   const [role,roleChange]=useState('staff')
   const {code}=useParams()
 
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const userobj=useSelector((state)=>state.user.userobj)
 
   
   const handleSubmit=(e)=>{
     e.preventDefault()
     const userobj={id, name, email, phone, role}
     dispatch(FunctionUpadteUser(userobj, id))
     navigate('/user')
     console.log(userobj)
   }

   useEffect(()=>{
    dispatch(FetchUserobj(code))
   },[code])

   useEffect(()=>{
    if(userobj){
      idChange(userobj.id)
      nameChange(userobj.name)
      emailChange(userobj.email)
      phonehange(userobj.phone)
      roleChange(userobj.role)
    }
   },[userobj])

   return (
     <div className="card">
             <form action="" onSubmit={handleSubmit}>
       <div className="catd-header">
         <h2>ADD USER</h2>
           <div>
         <div className="card-body">
           <div className="row"></div>
           <div className="col-lg-12"></div>
           <div className="form-group"></div>
           <label htmlFor="">id</label>
           <input type="text" value={id || ''} disabled='disabled' onChange={(e)=>idChange(e.target.value)} className="form-control" />
           <label htmlFor="">Name</label>
           <input type="text" value={name || ''} onChange={(e)=>nameChange(e.target.value)} className="form-control" />
           <label htmlFor="">Email</label>
           <input type="text" value={email || ''} onChange={(e)=>emailChange(e.target.value)} className="form-control" />
           <label htmlFor="">Phone</label>
           <input type="text" value={phone || ''} onChange={(e)=>phonehange(e.target.value)}  className="form-control" />
           <label htmlFor="">Role</label>
           <select name="" id="" value={role} onChange={(e)=>roleChange(e.target.value)} className="form-control">
             <option value="Admin">Admin</option>
             <option value="Staf">Staf</option>
           </select>
           </div>
           <div className="card-footer">
             <button className="btn btn-primary">Submit</button>|
             <Link to={'/user'} className="btn btn-danger">Back</Link>
    </div>
         </div>
       </div>
    </form>
     </div>
   )
 }
 
 
 

export default Updateuser
