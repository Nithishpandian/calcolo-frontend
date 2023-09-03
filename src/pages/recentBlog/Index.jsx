import React, { useEffect, useState } from 'react'
import RecentBlogComponent from '../../components/common/RecentBlogComponent'
import Navbar from '../../components/common/Navbar'
import { instance } from '../../components/axios/Instance'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getAllBlogs, reset } from '../../features/blog/blogSlice'
import Spinner from '../../components/common/Spinner'

const Index = () => {
  const dispatch = useDispatch()
  const {blogs, isError, isLoading, message} = useSelector(
    (state)=>state.blogs
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(getAllBlogs())

    return () => {
      dispatch(reset())
    }
  }, [dispatch])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
        <Navbar/>
        <div className=' px-40'>
            <h1 className=' px-4 text-left font-roboto font-semibold text-4xl mt-10 mb-6'>Some of the Recent Blog</h1>
            <div className='grid grid-cols-3 place-items-center'>
              {
                blogs?blogs.map((post)=><RecentBlogComponent 
                  id={post._id} 
                  user={post.user} 
                  title={post.title} 
                  content={post.content} 
                  image={post.image.url}
                  createdDate={post.createdAt}
                  updatedDate={post.updatedAt}
                />):"No Blogs Available"
              }
            </div>
        </div>
    </>
  )
}

export default Index