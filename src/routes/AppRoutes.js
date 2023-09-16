import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "../utils/RequireAuth";
import RedirectIfLoggedIn from "../utils/RedirectIfLoggedIn";

// unprotectedRoutes
import { auth_routes } from "./UnProtectedRoutes";
// protectedRoutes
import { admin_routes } from "./AdminRoutes";
import { loan_routes } from "./LoanRoutes";
import { general_routes } from "./GeneralRoutes";
import Nav from "../pages/Nav";

const AppRoutes = () => {
    const protectedRoutes = [
        ...admin_routes,
        ...loan_routes,
        ...general_routes
    ];

    const unprotectedRoutes = [...auth_routes];

    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                {
                    unprotectedRoutes.map((e) => {
                        return (
                            <Route
                                key={e.path}
                                exact
                                path={e.path}
                                element={
                                    <RedirectIfLoggedIn>
                                        {e.ele}
                                    </RedirectIfLoggedIn>
                                }
                                // element={e.ele}
                            />
                        );
                    })
                }

                {
                    protectedRoutes.map((e) => {
                        return (
                            <Route
                                key={e.path}
                                exact
                                path={e.path}
                                element={
                                    <RequireAuth userroles={e?.availability}>
                                        {e.ele}
                                    </RequireAuth>
                                }
                                // element={e.ele}
                            />
                        );
                    })
                }
            </Routes>
        </BrowserRouter>
    );
};
export default AppRoutes;
