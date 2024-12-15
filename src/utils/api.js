import axios from "axios";

const API_URL =
  import.meta.env.VITE_BACKEND_URI || "http://localhost:4000/api/v1";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Export the Axios instance for reuse
export default apiClient;
