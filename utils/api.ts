// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

// const createApiClient = () => {
//     const baseURL = process.env.ENDPOINT || 'http://localhost:8000'

//     const client = axios.create({
//         baseURL,
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });

//     client.interceptors.request.use(
//         (config) => {
//             const token = localStorage.getItem('access_token');
//             if (token && config.headers) {
//                 config.headers['Authorization'] = `Bearer ${token}`;
//             }
//             return config;
//         },
//         (error) => Promise.reject(error)
//     );

    
// }