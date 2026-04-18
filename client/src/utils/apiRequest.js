import axios from "axios"

const apiBaseUrl = (import.meta.env.VITE_API_ENDPOINT || "http://localhost:3000").replace(/\/+$/, "");

const apiRequest = axios.create({
    baseURL: apiBaseUrl,
    withCredentials: true,
});

export default apiRequest
