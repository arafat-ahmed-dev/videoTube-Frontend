import apiClient from "../api";

// Function to handle user login
export const login = async credentials => {
  try {
    const response = await apiClient.post("/user/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data.message || "Login failed";
  }
};

// Function to handle user registration
export const register = async userData => {
  try {
    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) =>
      formData.append(key, value)
    );

    const response = await apiClient.post("/user/register", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};

// Function to handle user logout
export const logout = async storedData => {
  try {
    const accessToken = storedData?.accessToken;
    const refreshToken = storedData?.refreshToken;
    console.log("Sending logout request with tokens:");
    console.log("Access Token:", accessToken);
    console.log("Refresh Token:", refreshToken);
    const response = await apiClient.post(
      "/user/logout",
      { refreshToken },
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response);
    localStorage.clear(); // Clear all localStorage data after logout
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Logout failed";
  }
};
