import axios from "axios"

const apiRequest = axios.create({
    baseURL: "https://lamapin.onrender.com",
    withCredentials: true,
});

export default apiRequest
