import { Link, useNavigate } from "react-router-dom"

const Nav = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login", { replace: true });
    }
    let currentUserRole;
    if (localStorage.getItem("user")) {
        currentUserRole = JSON.parse(localStorage.getItem("user"));
    }
    return (
        <div className="container mt-3">
            {
                currentUserRole &&
                <div>
                    <div className="alert alert-info fw-bold">Logged in as {" " + currentUserRole}</div>
                    <Link className="me-3 btn btn-light border border-dark" to="/home">
                        Home
                    </Link>
                    <button className="me-3 btn btn-light border border-dark" onClick={logout}>
                        Logout
                    </button>
                </div>
            }

        </div>
    )
}

export default Nav