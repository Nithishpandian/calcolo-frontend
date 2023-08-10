import React, { useEffect } from 'react'
import GeneralBlogComponent from '../common/GeneralBlogComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs, reset } from '../../features/blog/blogSlice'
import Spinner from '../common/Spinner'
import { toast } from 'react-toastify'

const RecentBlogIntro = () => {
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
    <div className=' px-40'>
        <h1 className=' text-center font-roboto font-semibold text-4xl mb-10'>Recent Blog</h1>
        <div className='grid grid-cols-3 gap-y-10 place-items-center'>
            {
              blogs?blogs.map((post, index)=>
                <GeneralBlogComponent 
                  id = {post._id}
                  user={post.user} 
                  title={post.title} 
                  content={post.content} 
                  image={post.image.url}
                  createdDate={post.createdAt}
                  updatedDate={post.updatedAt}
                />)
              :"No Blogs Available"
            }
        </div>
    </div>
  )
}

export default RecentBlogIntro