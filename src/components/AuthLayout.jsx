import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // If authentication is required but the user is not logged in
        if (authentication && authStatus !== true) {
            console.log("Redirecting to /auth/login because the user is not authenticated");
            navigate("/auth/login");
        }
        // If authentication is not required but the user is logged in
        else if (!authentication && authStatus === true) {
            console.log("Redirecting to / because the user is already authenticated");
            navigate("/");
        } else {
            setLoading(false); // If no redirect needed, continue rendering the children
        }
    }, [authStatus, navigate, authentication]);

    return loading ? <h1>Loading...</h1> : <>{children}</>;
}


// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { decode } from "jwt-decode"; // Updated import statement

// export default function Protected({ children, authentication = true }) {
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(true);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const token = localStorage.getItem("accessToken") || document.cookie.split('; ').find(row => row.startsWith('accessToken=')).split('=')[1];

//         if (token) {
//             try {
//                 const decodedToken = decode(token); // Updated to use named import
//                 // Check if the token is expired
//                 if (decodedToken.exp * 1000 < Date.now()) {
//                     throw new Error("Token expired");
//                 }
//                 setIsAuthenticated(true);
//             } catch (error) {
//                 console.log("Invalid token:", error.message);
//                 navigate("/auth/login");
//             }
//         } else {
//             console.log("No token found, redirecting to /auth/login");
//             navigate("/auth/login");
//         }
//         setLoading(false);
//     }, [navigate]);

//     return loading ? <h1>Loading...</h1> : <>{children}</>;
// }