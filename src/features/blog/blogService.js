import axios from "axios";

const API_URL = "https://calcolo-backend-yex2.onrender.com/api/blogs"

// Get all blogs
const getAllBlogs = async()=>{
    const token = sessionStorage.getItem("myToken")
    const config = {
        headers: {
            Authorization: `Bearer ${token.replace(/^"(.+(?="$))"$/, '$1')}`,
        },
    }
    
    const response = await axios.get(API_URL + "/", config)

    return response.data
}

const authService = {
    getAllBlogs
}

export default authService