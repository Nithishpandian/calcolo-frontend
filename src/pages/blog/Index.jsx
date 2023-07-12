import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import BlogComponent from '../../components/blogpage/BlogComponent'
import { useParams } from 'react-router-dom'
import { instance } from '../../components/axios/Instance'

const Index = () => {
  const blogId = useParams()

  const [blogUser, setBlogUser] = useState({
    id: "loading...",
    userName: "loading..."
  })
  const [blogData, setBlogData] = useState({
    title: "Loading",
    content: "loading...",
    image: "Image Loading...",
    user: "users loading...",
  })
  

  useEffect(()=>{
    instance.get(`/blogs/${blogId.id}`)
      .then(res=>{
        setBlogData(res.data)
      })
      .catch(err=>console.log(err))
      
    instance.get(`/users/${blogData.user}`)
      .then(res=>{
        setBlogUser(res.data)
      })
      .catch(err=>console.log(err))
  }, [instance])

  return (
    <>
      <Navbar/>
      <BlogComponent
        blogId={blogId.id}
        title={blogData.title}
        content={blogData.content}
        createdDate={blogData.createdAt}
        updatedDate={blogData.updatedAt}
        image={blogData.image.url}
        blogUserId = {blogUser.id}
        blogUserName = {blogUser.userName}
      />
    </>
  )
}

export default Index