import axios from "axios";

const API_URL = 'https://calcolo-backend-yex2.onrender.com/api/users'

// Register user
const register = async(userData) => {
    const response = await axios.post(API_URL + "/", userData)

    if(response.data){
        sessionStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + "/login", userData)

    if(response.data){
        sessionStorage.setItem("myToken", JSON.stringify(response.data.token))
    }
    return response.data
}

// Logout user
const logout = () => {
    sessionStorage.removeItem("myToken")
}

const authService = {
    register,
    login,
    logout
}

export default authService