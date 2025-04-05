import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("authToken");
    const location = useLocation(); 

    if (!token) {
        localStorage.setItem("redirectAfterLogin", location.pathname); 
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute;