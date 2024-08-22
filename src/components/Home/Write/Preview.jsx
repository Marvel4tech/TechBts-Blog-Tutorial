import React, { useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ReactQuill from 'react-quill'

const Preview = () => {
    const imageRef = useRef(null)
    const handleClick = () => {
        imageRef.current.click()
    }
    const [imageUrl, setImageUrl] = useState("")

  return (
   <section className=' absolute inset-0 bg-white z-30'>
        <div className=' size my-2rem'>
            <span className=' absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
                <LiaTimesSolid />
            </span>
            <div className=' mt-[8rem] flex flex-col md:flex-row gap-10'>
                <div className=' flex-[1]'>
                    <h3>Story Preview</h3>
                    <div className=' w-full h-[200px] object-cover bg-gray-200 my-3 grid place-items-center cursor-pointer bg-cover 
                    bg-no-repeat' onClick={handleClick} style={{backgroundImage : `url(${imageUrl})`}}>
                        {!imageUrl && `Add Image`}
                    </div>
                    <input onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))} ref={imageRef} type="file" hidden />
                    <input type="text" placeholder='Title' className=' outline-none w-full border-b border-gray-300 py-2' />
                    <ReactQuill theme='bubble' placeholder='Tell your story...' className=' py-3 border-b border-gray-300' />
                    <p className=' text-gray-500 pt-4 text-sm'>
                        <span className=' font-bold'>Note:</span> Changes here will affect how your story appears in public places like
                        TechBTS's homepage and in subscribers' inboxes - not the contents of the story itself
                    </p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Preview