import axios from "axios";
import { AuthRequest } from "@/models/types";
import { apiClient } from "@/utils/api";


export const setAuthToken = (token: string | null) => {
    if (token) {
        apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("authToken", token);
    } else {
        delete apiClient.defaults.headers.common["Authorization"];
        localStorage.removeItem("authToken");
    }
}


export const login = async (data: AuthRequest) => {
    try {
        const response = await apiClient.post("/account/auth", data);
        return response.data;
    } catch (error) {
        console.error("Login failed: ", error)
        throw error;   
    }
}