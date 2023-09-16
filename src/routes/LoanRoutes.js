import ApplyLoanPage from "../pages/ApplyLoanPage";
import PayLoanPage from "../pages/PayLoanPage";
import LoanSchemes from "../pages/LoanSchemePage";
import { userRoles as ur } from "../data/userRole";
export const loan_routes = [
    { 
        path: "/apply-loan", 
        ele: <ApplyLoanPage/>,
        availability:[ur.customer]
    },
    { 
        path: "/pay-loan", 
        ele: <PayLoanPage/>, 
        availability:[ur.customer]
    },
    { 
        path: "/loan-schemes", 
        ele: <LoanSchemes/>, 
        availability:[ur.customer, ur.admin]
    }
]