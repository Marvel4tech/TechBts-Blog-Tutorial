import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const Write = () => {
    const [value, setValue] = useState("")

  return (
    <section className=' w-[90%] md:w-[90%] lg:w-[60%] py-[3rem] mx-auto'>
        <input type="text" placeholder='Title' className=' text-4xl w-full outline-none' />
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Tell your story...' className=' write py-5' />
    </section>
  )
}

export default Write