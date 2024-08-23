import React, { useEffect, useRef, useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ReactQuill from 'react-quill'
import TagsInput from 'react-tagsinput'

const Preview = ({ setPublish, description, title }) => {
    const imageRef = useRef(null)
    const handleClick = () => {
        imageRef.current.click()
    }
    const [imageUrl, setImageUrl] = useState("")
    const [tags, setTags] = useState([])

    const [desc, setDesc] = useState("")
    const [preview, setPreview] = useState({title:"", photo:""})
    
    useEffect(() => {
        if(title || description){
            setPreview({...preview, title: title})
            setDesc(description)
        } else {
            setPreview({...preview, title: ""})
            setDesc("")
        }
    }, [title, description])

  return (
   <section className=' absolute inset-0 bg-white z-30'>
        <div className=' size my-2rem'>
            <span className=' absolute right-[1rem] md:right-[5rem] top-[3rem] text-2xl cursor-pointer'>
                <LiaTimesSolid onClick={() => setPublish(false)} />
            </span>
            <div className=' mt-[8rem] flex flex-col md:flex-row gap-10'>
                <div className=' flex-[1]'>
                    <h3 className=' text-2xl'>Story Preview</h3>
                    <div className=' w-full h-[200px] object-cover bg-gray-200 my-3 grid place-items-center cursor-pointer bg-cover 
                    bg-no-repeat' onClick={handleClick} style={{backgroundImage : `url(${imageUrl})`}}>
                        {!imageUrl && `Add Image`}
                    </div>
                    <input 
                        onChange={(e) => {setImageUrl(URL.createObjectURL(e.target.files[0])); setPreview({...preview, photo: e.target.files[0]})}} 
                        ref={imageRef} 
                        type="file" 
                        hidden 
                    />
                    <input 
                        type="text" 
                        placeholder='Title' 
                        className=' outline-none w-full border-b border-gray-300 py-2'
                        value={preview.title}
                        onChange={(e) => setPreview({...preview, title: e.target.value})}
                    />
                    <ReactQuill 
                        theme='bubble' 
                        placeholder='Tell your story...' 
                        className=' py-3 border-b border-gray-300' 
                        value={desc}
                        onChange={setDesc}
                    />
                    <p className=' text-gray-500 pt-4 text-sm'>
                        <span className=' font-bold'>Note:</span> Changes here will affect how your story appears in public places like
                        TechBTS's homepage and in subscribers' inboxes - not the contents of the story itself
                    </p>
                </div>
                <div className=' flex-[1] flex flex-col mb-5 md:mb-0 gap-4'>
                    <h3 className=' text-2xl'>
                        Publish to: {" "} <span className=' font-bold capitalize'>Marvel4Tech</span>
                    </h3>
                    <p>
                        Add or change topics up to 5 so readers will know what your story is about
                    </p>
                    <TagsInput value={tags} onChange={setTags} />
                    <button className=' btn !bg-green-700 text-white !w-fit !rounded-full'>Publish Now</button>
            </div>
            </div>
        </div>
   </section>
  )
}

export default Preview