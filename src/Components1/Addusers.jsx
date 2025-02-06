import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { FunctionAddUser } from "../redux1/Action";


const Addusers = () => {
  const [name,nameChange]=useState('')
  const [email,emailChange]=useState('')
  const [phone,phonehange]=useState('')
  const [role,roleChange]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

  
  const handleSubmit=(e)=>{
    const userobj={name,email,phone,role}
    e.preventDefault()
    dispatch(FunctionAddUser(userobj))
    navigate('/user')
    console.log(userobj)
  }
  return (
    <div className="card">
      <div className="catd-header">
        <h2>ADD USER</h2>
          <div>
            <form action="" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="row"></div>
          <div className="col-lg-12"></div>
          <div className="form-group"></div>
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e)=>nameChange(e.target.value)} className="form-control" />
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={(e)=>emailChange(e.target.value)} className="form-control" />
          <label htmlFor="">Phone</label>
          <input type="text" value={phone} onChange={(e)=>phonehange(e.target.value)}  className="form-control" />
          <label htmlFor="">Role</label>
          <select name="" id="" value={role} onChange={(e)=>roleChange(e.target.value)} className="form-control">
            <option value="SelectRole">SelectRole</option>
            <option value="admin">Admin</option>
            <option value="staff">Staff</option>
          </select>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Submit</button>|
            <Link to={'/user'} className="btn btn-danger">Back</Link>
   </div>
   </form>
        </div>
      </div>
    </div>
  )
}


export default Addusers
