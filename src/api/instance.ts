import axios from "axios";


 export const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
    "API-KEY": "98df3715-f2f7-4d7d-93ca-b5faa140aedb" 
    }
});