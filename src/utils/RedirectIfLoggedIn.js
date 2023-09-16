import { Navigate } from "react-router-dom";

const RedirectIfLoggedIn = ({children})=>{
    if(JSON.parse(localStorage.getItem("user"))){
        return <Navigate to="/home" />
    }
    return children;

}
export default RedirectIfLoggedIn;