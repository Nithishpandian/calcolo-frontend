import { PhotoIcon } from '@heroicons/react/24/solid'
import Navbar from '../../components/common/Navbar'
// import { TextField } from "@mui/material"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { instance } from '../../components/axios/Instance'

const Index = () => {
    const blogId = useParams()
    const navigate = useNavigate()

    const [image, setImage] = useState("")
    const handleImage = (e)=>{
      const file = e.target.files[0]
      convertToBase64(file)
    }
    const convertToBase64 = (file)=>{
      const reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage(reader.result)
      }
      reader.onerror = error => {
        console.log("Error: ", error);
      }
    }
    const [formData, setFormData] = useState({
        user: "",
        title: "",
        content: "",
    })
    const { title, content, user } = formData
    useEffect(()=>{
      instance.get(`/blogs/${blogId.id}`)
      .then(res=>{
        setFormData(res.data)
      })
      .catch(err=>console.log(err))
    }, [])

    const onChange = (e) => {
        setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()

        instance.put(`/blogs/${blogId.id}`, {title, content, image, user})
          .then(res=>{
            navigate("/")
          })
          .catch(err=>console.log(err))
    }
  return (
    <>
      <Navbar/>
      <div className=" px-80 py-16">
        <h1 className=' font-semibold text-3xl text-stone-800'>Create a blog</h1>
        <form className='py-7' onSubmit={onSubmit}>
          <div className='flex flex-col'>
            <label htmlFor="title" className='font-medium text-xl text-gray-900'>Title</label>
            <input
              type="text"
              name="title"
              id="title"
              className="border border-stone-400 rounded py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
              placeholder="Title"
              value={title}
              onChange={onChange}
            />
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
          </div>
          <div className='flex flex-col mt-3'>
            <label htmlFor="content" className='font-medium text-xl text-gray-900'>Content</label>
            <textarea
              type="text"
              name="content"
              id="content"
              className="border border-stone-400 rounded py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none"
              placeholder="Content"
              rows={3}
              value={content}
              onChange={onChange}
            />
          </div>
          <div className=' mt-3'>
              <label htmlFor="cover-photo" className=" text-xl font-medium text-gray-900">
                Cover photo
              </label>
              <div className="flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                {image===""||image==null?<PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />:<img className='mx-auto h-14 w-20 object-cover' src={image} alt='Blog'/>}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="image"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input 
                        id="image" 
                        name="image" 
                        type="file" 
                        accept='image/'
                        className="sr-only" 
                        onChange={handleImage}
                        required
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
          </div>
          <div className=' mt-4'>
            <button className=' bg-gray-900 rounded text-white font-medium py-1 px-4 mr-3' type='submit'>Update</button>
            <button className=' border border-gray-900 py-0.5 px-4 font-medium rounded' onClick={()=>navigate("/")}>Cancel</button>
          </div>
        </form>
      </div>
      </>
  )
}

export default Index