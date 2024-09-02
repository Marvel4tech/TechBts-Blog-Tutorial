import React from 'react'
import ReactQuill from 'react-quill'

const EditPost = () => {
  return (
    <section className=' w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]'>
        <input type="text" placeholder=' Title...' className=' text-4xl outline-none w-full' />
        <ReactQuill placeholder='Description...' className=' !text-[4rem] my-3' theme='bubble' />
    </section>
  )
}

export default EditPost