import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import Preview from './Preview'
import { Blog } from '../../../context/Context'

const Write = () => {
    const [value, setValue] = useState("")
    const { publish } = Blog()

  return (
    <section className=' w-[90%] md:w-[90%] lg:w-[60%] py-[3rem] mx-auto'>
        <input type="text" placeholder='Title' className=' text-4xl w-full outline-none' />
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' className=' write py-5' />
        <div className={`${publish ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500`}>
            <Preview />
        </div>
    </section>
  )
}

export default Write