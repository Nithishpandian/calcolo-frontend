import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from '../axios/Instance'

const BlogComponent = ({blogId, title, content, image, createdDate, updatedDate, blogUserId, blogUserName}) => {
  const navigate = useNavigate()
  const createdDateFormat = moment(createdDate).format('MMM Do, YYYY')

  const [currentUser, setCurrentUser] = useState({
    id: "loading...",
    userName: "loading..."
  })

  // getting data
  useEffect(()=>{
    instance.get('/users/data')
    .then(res=>{
        setCurrentUser(res.data)
    })
    .catch(e=>console.log(e))    
  }, [])

  const deleteBlog = (e)=>{
    e.preventDefault()
    instance.delete(`/blogs/${blogId}`)
      .then(res=>{
        navigate("/")
      })
  }

  return (
    <div className='py-14 px-24'>
      <h2 className=' font-medium mb-2'>By <span>{blogUserName}</span> / <span>{createdDateFormat}</span>{createdDate!==updatedDate&&<span className=' ml-2 text-stone-600'> (Updated)</span>}</h2>
        <h1 className={`group/item flex items-center justify-between font-poppins text-5xl font-bold`}>
          <span>{title}</span>
          {blogUserId===currentUser.id &&
            <div className="">
              <a href={`/updateblog/${blogId}`} className=' duration-300 hover:text-stone-600 invisible text-5xl group-hover/item:visible'>
                <ion-icon name="create"></ion-icon>
              </a>
              <button className=" ml-5 duration-300 hover:text-stone-600 invisible text-5xl group-hover/item:visible" onClick={deleteBlog}>
                <ion-icon name="trash-sharp"></ion-icon>
              </button>
            </div>
          }
        </h1>
        
      <img className=' mt-5 mb-10 h-[30rem] object-cover w-full' src={image} alt="" loading="lazy" />
      <p className=' text-lg font-roboto px-1'><span className='ml-32'>{content}</span></p>
    </div>
  )
}

export default BlogComponent