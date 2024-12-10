import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Protected({ children , authentication = true }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        console.log("authStatus:", authStatus); // Log auth status
        console.log("authentication prop:", authentication); // Log the authentication prop

        if (authentication && authStatus !== authentication) {
            console.log("Redirecting to /auth/login because the user is not authenticated");
            navigate("/auth/login");
        } else if (!authentication && authStatus === authentication) {
            console.log("Redirecting to / because the user is already authenticated");
            navigate("/");
        } else {
            setLoading(false);
        }
    }, [authStatus, navigate, authentication]);

    return loading ? <h1>Loading...</h1> : <>{children}</>;
}
