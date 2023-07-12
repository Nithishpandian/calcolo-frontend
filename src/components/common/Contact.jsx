import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-[#1f1f1f] text-stone-400  px-4 py-2 md:py-6 text-center mt-16' id='contact'>
    <h1 className='text-3xl font-bold text-white md:text-5xl'>Contact</h1>
    <p className='py-1 text-xl md:text-2xl md:py-2'>Lets Work Together</p>
    <div className='font-bold text-[#5c5c5c] flex justify-center items-center'>
        <a href="mailto:nithishpandiyan75@gmail.com" className='flex items-center justify-center hover:opacity-90 w-fit'>
            <span className=' hover:opacity-80 pt-1 mr-0.5 font-bold text-[#5c5c5c]'><ion-icon name="mail-outline"></ion-icon></span>
            <span className='duration-300 hover:underline'>nithishpandiyan75@gmail.com</span>
        </a>
    </div>
    <div className='flex items-center justify-center mt-2 text-lg md:mt-2'>
        <a href="https://www.instagram.com/_nithish_p_/" target='_blank' rel="noreferrer">
            <span className='duration-300 hover:opacity-70'><ion-icon name="logo-instagram"></ion-icon></span>
        </a>
        <a href="https://www.linkedin.com/in/nithish-p-ba2785200/" target='_blank' rel="noreferrer">
            <span className='px-2 duration-300 hover:opacity-70'><ion-icon name="logo-linkedin"></ion-icon></span>
        </a>
        <a href="https://github.com/Nithishpandian" target='_blank' rel="noreferrer">
            <span className='mr-2 duration-300 hover:opacity-70'><ion-icon name="logo-github"></ion-icon></span>
        </a>
        <a href="https://www.fiverr.com/nithishpandiyan?up_rollout=true" target='_blank' rel="noreferrer">
            <span className='duration-300 hover:opacity-70'>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" className="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <title></title>
                    <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"></path>
                </svg>
            </span>
        </a>
    </div>
</div>
  )
}

export default Contact