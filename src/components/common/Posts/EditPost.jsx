import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { Blog } from '../../../context/Context'

const EditPost = () => {
    const { updateData } = Blog()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (updateData) {
            setTitle(updateData.title)
            setDescription(updateData.description)
        }
    }, [updateData])

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