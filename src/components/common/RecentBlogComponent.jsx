import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { instance } from '../axios/Instance';

const RecentBlogComponent = ({id ,user, title, content, image, createdDate, updatedDate}) => {
  const createdDateFormat = moment(createdDate).format('MMM Do, YYYY')
  const [userName, setUserName] = useState("")

  useEffect(()=>{
    instance.get(`/users/${user}`)
      .then(res=>{
        setUserName(res.data)
      })
      .catch(err=>console.log(err))
  }, [userName])

  return (
    <div className=' group grid grid-rows-2 gap-y-2 w-96 shadow-xl rounded-md'>
        <div className=' overflow-hidden'>
            <img src={image} className=' duration-300 group-hover:scale-110 group-hover:grayscale rounded-t w-96 h-64 object-cover' alt="" loading='lazy' />
        </div>
        <div className=" pt-1.5 pb-6 px-5">
            <h1 className=' text-3xl font-medium hover:text-stone-600'><a href={`/blogs/${id}`}>{title}</a></h1>
            <h2 className=' text-sm font-medium my-1'>By <span>{userName.userName}</span> / <span>{createdDateFormat}</span>{createdDate!==updatedDate&&<span className=' ml-2 text-stone-600'> (Updated)</span>}</h2>
            <h2 className=' text-stone-700'>{content.slice(0,210)}...</h2>
        </div>
    </div>
  )
}

export default RecentBlogComponent