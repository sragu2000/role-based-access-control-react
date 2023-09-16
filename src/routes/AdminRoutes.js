import StaffPage from "../pages/StaffPage";
import { userRoles as ur } from "../data/userRole";
export const admin_routes = [
    { 
        path: "/staff-details", 
        ele: <StaffPage/>,
        availability:[ur.admin]
    }
]