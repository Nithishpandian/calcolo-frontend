import React, { useEffect, useState } from 'react'
import RecentBlogComponent from '../../components/common/RecentBlogComponent'
import Navbar from '../../components/common/Navbar'
import { instance } from '../../components/axios/Instance'

const Index = () => {
  const [postsData, setPostsData] = useState(null)

  useEffect(()=>{
    instance.get('/blogs')
      .then(response => {
        setPostsData(response.data);
      })
      .catch(e=>console.log(e)) 
  },[postsData])

  if(!postsData) return "Loading..."
  return (
    <>
        <Navbar/>
        <div className=' px-40'>
            <h1 className=' px-4 text-left font-roboto font-semibold text-4xl mt-10 mb-6'>Some of the Recent Blog</h1>
            <div className='grid grid-cols-3 place-items-center'>
              {
                postsData?postsData.map((post)=><RecentBlogComponent 
                  id={post._id} 
                  user={post.user} 
                  title={post.title} 
                  content={post.content} 
                  image={post.image.url}
                  createdDate={post.createdAt}
                  updatedDate={post.updatedAt}
                />):"loading"
              }
            </div>
        </div>
    </>
  )
}

export default Index