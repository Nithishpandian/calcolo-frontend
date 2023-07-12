import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Index"
import FeaturedBlogPages from "./pages/featuredBlog/Index"
import RecentBlogPage from "./pages/recentBlog/Index";
import RegisterPage from "./pages/auth/RegisterPage";
import CreateBlogPage from "./pages/createBlog/Index";
import UpdateBlogPage from "./pages/updateBlog/Index";
import BlogPage from "./pages/blog/Index"
import LoginPage from "./pages/auth/LoginPage";
import ProtectRoute from "./pages/auth/ProtectRoute";

function App() {
  return (
    <Routes>
      <Route path="/auth/register" element={<RegisterPage/>}/>
      <Route path="/auth/login" element={<LoginPage/>}/>
      <Route element={<ProtectRoute/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/featuredblog" element={<FeaturedBlogPages/>}/>
        <Route path="/recentblog" element={<RecentBlogPage/>}/>
        <Route path="/createblog" element={<CreateBlogPage/>}/>
        <Route path="/updateblog/:id" element={<UpdateBlogPage/>}/>
        <Route path="/blogs/:id" element={<BlogPage/>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
