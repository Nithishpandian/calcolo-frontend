import axios from "axios";


export const token = localStorage.getItem("myToken")
export const instance = axios.create({
    baseURL: 'https://calcolo-backend-yex2.onrender.com/api',
    headers: {'Authorization': 'Bearer '+token},
});