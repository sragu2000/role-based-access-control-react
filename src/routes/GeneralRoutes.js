import HomePage from "../pages/HomePage";
import { userRoles as ur } from "../data/userRole";
export const general_routes = [
    {
        path: "/home",
        ele: <HomePage />,
        availability: [ur.customer, ur.admin]
    }
]