import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container mt-3">
            <h6>Only For Customers</h6>
            <Link
                className="mt-2 card btn border border-dark btn-outline-light"
                to="/pay-loan"
            >
                Pay Loan
            </Link>

            <Link
                className="mt-2 card btn border border-dark btn-outline-light"
                to="/apply-loan"
            >
                Apply Loan
            </Link>

            <hr></hr>
            
            <h6>Only For Admin</h6>
            <Link
                className="mt-2 card btn border border-dark btn-outline-light"
                to="/staff-details"
            >
                Staff Details
            </Link>
            
            <hr></hr>

            <h6>For both Admin & Customers</h6>
            <Link
                className="mt-2 card btn border border-dark btn-outline-light"
                to="/loan-schemes"
            >
                Loan Schemes
            </Link>
        </div>
    );
}
export default HomePage;