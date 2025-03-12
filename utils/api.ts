import axios from "axios";

const baseURL = process.env.ENDPOINT || 'http://localhost:8000'

export const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'nextjs-app',
    },
})