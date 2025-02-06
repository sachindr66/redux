import { connect } from "react-redux";
import { FetchUserList, Removeuser } from "../redux1/Action";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const Userlisting = (props) => {
  useEffect(() => {
    props.loaduser();
  }, []);

  const handledelete = (code) => {
    if (window.confirm("Do you want to remove this user?")) {
      props.removeuser(code);
      setTimeout(() => {
        props.loaduser();
        // alert("User removed successfully")
        toast.success("User removed successfully");
      }, 500);
    }
  };

  return props.user.loading ? (
    <div>
      <h1>Loading....</h1>
    </div>
  ) : props.user.errmessage ? (
    <div>
      <h1>{props.user.errmessage}</h1>
    </div>
  ) : (
    <div>
      <div className="card">
        <div className="card-header">
          <h2>User Listing</h2>
          <Link to={"/user/add"} className="btn btn-success">
            Add User
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((obj,index) => {
                  return (
                    <tr key={index+1}>
                      <td>{index+1}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                      <td>{obj.phone}</td>
                      <td>{obj.role}</td>
                      <td>
                        <Link to={"/user/edit/" + obj.id} className="btn btn-primary">
                          Edit
                        </Link>
                        <button onClick={() =>{ handledelete(obj.id)}} className="btn btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loaduser: () => dispatch(FetchUserList()),
    removeuser: (code) => dispatch(Removeuser(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Userlisting);
