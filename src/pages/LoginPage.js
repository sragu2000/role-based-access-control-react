import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ()=>{
    const [userRole, setUserRole] = useState();
    const navigate = useNavigate();
    const submitLogin = (e)=>{
        e.preventDefault();
        // Your Login logic here...
        localStorage.setItem("user", JSON.stringify(userRole));
        navigate("/home")
    }
    return(
        <div className="container mt-3">
            <form onSubmit={submitLogin}>
                <h6 className="alert alert-success">Login to Bank As,</h6>
                <select required className="form-control" onChange={(e)=>setUserRole(e.target.value)} >
                    <option value="" selected disabled>Select User Role</option>
                    <option value={"Customer"}>Customer</option>
                    <option value={"Admin"}>Admin</option>
                </select>
                <button type="submit" className="mt-4 form-control btn btn-outline-primary">Login</button>
            </form>
        </div>
    );
}
export default LoginPage;