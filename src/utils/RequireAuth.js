import { Navigate } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
const RequireAuth = ({ children, userroles }) => {
    let currentUserRole;
    if (localStorage.getItem("user")) {
        currentUserRole = JSON.parse(localStorage.getItem("user"));
    }
    const location = useLocation();
    if (currentUserRole) {
        if (userroles) {
            if (userroles.includes(currentUserRole)) {
                return children
            } else {
                Swal.fire('Access Denied !', "", 'warning')
                return <Navigate to="/home" />
            }
        } else {
            return children
        }
    } else {
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
}
export default RequireAuth