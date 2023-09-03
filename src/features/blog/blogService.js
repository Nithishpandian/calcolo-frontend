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

// Featured blog
const featuredBlogs = async() => {
    const token = sessionStorage.getItem("myToken")
    const config = {
        headers: {
            Authorization: `Bearer ${token.replace(/^"(.+(?="$))"$/, '$1')}`,
        },
    }
    const user = await axios.get("https://calcolo-backend-yex2.onrender.com/api/users/data", config)
    const userId = user.data.id
    const allBlogs = await getAllBlogs()
    const response = allBlogs.filter((post)=>post.user===userId)
    return response
}  


const authService = {
    getAllBlogs,
    featuredBlogs,
}

export default authService