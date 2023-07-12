import React, { useEffect, useState } from 'react'
import GeneralBlogComponent from '../common/GeneralBlogComponent'
import { instance } from '../axios/Instance'

const RecentBlogIntro = () => {
  const [postsData, setPostsData] = useState(null)

  useEffect(()=>{
    instance.get('/blogs')
      .then(response => {
        setPostsData(response.data);
      })
      .catch(e=>console.log(e)) 
  },[postsData])

  if(!postsData) return null

  return (
    <div className=' px-40'>
        <h1 className=' text-center font-roboto font-semibold text-4xl mb-10'>Recent Blog</h1>
        <div className='grid grid-cols-3 gap-y-10 place-items-center'>
            {
              postsData?postsData.map((post, index)=>
                <GeneralBlogComponent 
                  id = {post._id}
                  user={post.user} 
                  title={post.title} 
                  content={post.content} 
                  image={post.image.url}
                  createdDate={post.createdAt}
                  updatedDate={post.updatedAt}
                />)
              :"loading"
            }
        </div>
    </div>
  )
}

export default RecentBlogIntro