import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/Navbar'
import RecentBlogComponent from '../../components/common/RecentBlogComponent'
import { instance } from '../../components/axios/Instance'

const Index = () => {

  const [postsData, setPostsData] = useState(null)
  const [user, setUser] = useState("")

  useEffect(()=>{
    instance.get('/users/data')
      .then(res=>{
          setUser(res.data)
      })
      .catch(e=>console.log(e))

    instance.get('/blogs')
      .then(response => {
        setPostsData((response.data).filter((post)=>post.user===user.id));
      })
      .catch(e=>console.log(e)) 
  },[postsData])

  if(!postsData) return "Loading..."


  return (
    <>
        <Navbar/>
        <div className=' px-40'>
            <h1 className=' px-4 text-left font-roboto font-semibold text-4xl mt-10 mb-6'>Here Your Blog</h1>
            <div className='grid grid-cols-3 place-items-center'>
              {
                postsData?postsData.map((post)=><RecentBlogComponent 
                  id={post._id} user={post.user} 
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