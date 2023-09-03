import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import RecentBlogComponent from '../../components/common/RecentBlogComponent'
import { useDispatch, useSelector } from 'react-redux'
import { featuredBlogs, reset } from '../../features/blog/blogSlice'
import Spinner from '../../components/common/Spinner'
import { toast } from 'react-toastify'

const Index = () => {
  const dispatch = useDispatch()
  const {blogs, isError, isLoading, message} = useSelector(
    (state)=>state.blogs
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(featuredBlogs())

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
            <h1 className=' px-4 text-left font-roboto font-semibold text-4xl mt-10 mb-6'>Here's your blog</h1>
            <div className='grid grid-cols-3 place-items-center'>
              {
                blogs?blogs.map((post)=><RecentBlogComponent 
                  id={post._id} user={post.user} 
                  title={post.title} 
                  content={post.content} 
                  image={post.image.url}
                  createdDate={post.createdAt}
                  updatedDate={post.updatedAt}
                />):"You have created No blogs"
              }
            </div>
        </div>
    </>
  )
}

export default Index