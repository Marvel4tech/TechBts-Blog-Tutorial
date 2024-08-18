import React from 'react'

const Banner = () => {
  return (
    <div className=' border-b bg-banner border-black'>
        <div className=' size py-[5rem] flex flex-col items-start gap-[2rem]'>
            <h1 className=' text-5xl sm:text-[4rem] md:text-[6rem] font-normal'>
                Stay Curious.
            </h1>
            <p className=' w-full md:w-[30rem] text-[1.3rem] md:text-[1.5rem] font-medium leading-7'>
                Discover stories, thinking, and expertise from writers on any topic.
            </p>
            <button className=' btn bg-black1 rounded-full text-white !text-[1.2rem] !px-6 !mt-[2.5rem]'>Start Reading</button>
        </div>
    </div>
  )
}

export default Banner