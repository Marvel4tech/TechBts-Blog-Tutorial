import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const EditPost = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

  return (
    <section className=' w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
        <input 
            type="text" 
            placeholder=' Title...' 
            className=' text-4xl outline-none w-full' 
            value={title}
            onChange={() => setTitle (e.target.value)}
        />
        <ReactQuill 
            placeholder='Description...' 
            className=' !text-[4rem] my-3' 
            theme='bubble' 
            value={description}
            onChange={setDescription}
        />
    </section>
  )
}

export default EditPost