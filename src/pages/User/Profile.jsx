import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // For navigation after logout
import AvatarImage from "../../components/Material Ui/Avatar";
import { logout } from "../../utils/auth/authService";
import { logout as logoutRedux } from "../../store/Slice/AuthSilce";

const Profile = () => {
  const user = useSelector(state => state.auth?.userData?.user); // Access the user data
  const dispatch = useDispatch(); // Redux dispatch function
  const navigate = useNavigate(); // Navigate function
  console.log(user);
  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }
  const handleLogout = async () => {
    try {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      if (!storedData) {
        console.error("No user data found in localStorage.");
        return;
      }

      const result = await logout(storedData); // Logout API call
      console.log("Logout result:", result);

      localStorage.removeItem("userData"); // Remove only specific keys
      dispatch(logoutRedux());
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 text-black">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-2xl">
        <div className="flex flex-col items-center">
          <AvatarImage
            src={user?.avatar || "/default-avatar.png"} // Fallback to a default image
            alt={user?.fullName || "Default Avatar"}
            size="large"
            className="border-4 border-indigo-500 shadow-lg"
          />

          <h1 className="text-3xl font-semibold mt-4 text-gray-800">
            {user.fullName}
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Username:{" "}
            <span className="font-semibold text-indigo-600">
              {user.username}
            </span>
          </p>
          <p className="text-gray-600 mt-2 text-lg">
            Email:{" "}
            <span className="font-semibold text-indigo-600">{user.email}</span>
          </p>
        </div>
        <div className="mt-6 relative">
          <img
            src={user.coverImage}
            alt="Cover"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded-md shadow-md">
            Cover Image
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-200 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
