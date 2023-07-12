import React from 'react'
import IntroImg from "../../assets/images/blogFrontImg.png"

const Intro = () => {
  return (
    <div className=' pt-[7.5rem] pb-[8.7rem] px-32 grid grid-cols-2 items-center justify-center'>
        <div className='group'>
            <h1 className=' flex flex-col font-roboto text-7xl'>
                <span>Create a</span>
                <span>unique and beautiful</span>
                <span>blog easily</span>
            </h1>
            <h2 className=' mt-8 mb-5 text-stone-700'>Create a beautiful blog that fits your style. Save the moments that matter. Calcolo lets you safely store thousands of posts, photos, and more. Whatever you're publishing. Whoever your audience is, Calcolo makes it simple to get started.</h2>
            <a href="/createblog">
                <button className='group/button overflow-hidden relative bg-[#1d1e1f] text-white py-2 px-5 rounded font-medium'>
                    <div className="duration-300 group-hover/button:-translate-y-8 ">Create</div>
                    <div className="absolute invisible duration-300  group-hover/button:-translate-y-6 group-hover/button:visible">Create</div>
                </button>
            </a>
        </div>
        <div className='flex justify-center'>
            <img src={IntroImg} alt="" />
        </div>
    </div>
  )
}

export default Intro