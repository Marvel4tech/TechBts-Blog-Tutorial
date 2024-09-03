import React from 'react'
import bgImg from '../../images/pixelcolors.jpg'

const bgStyles = {
  backgroundImage: `url(${bgImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
}

const Banner = () => {

  return (
    <div className=' border-b border-black h-[30vh] md:h-[40vh] lg:h[50vh]' style={bgStyles}>
        <div className=' size items-start'>
            <button className=' btn bg-red-500 text-white !text-[1.2rem] !px-6 !py-3 !mt-[2.5rem]'>Trending</button>
        </div>
    </div>
  )
}

export default Banner