import React from 'react'
import { discover, discoverActions } from '../../data'

const Discover = () => {
  return (
    <div className=' sticky top-[6rem]'>
        <div className=' border-b border-gray-400 pb-7'>
            <h1 className=' font-semibold'>Discover more of what matters to you</h1>
            <div className=' my-2 flex flex-wrap items-center gap-3'>
                {discover.map((item, index) => (
                    <button className=' bg-gray-200 text-sm py-2 px-3 rounded-full' key={index}>{item}</button>
                ))}
            </div>
            <button className=' text-green-600 hover:text-black1 text-sm py-3'>See more topics</button>
        </div>
        <div className=' flex flex-wrap leading-7 items-center gap-3 pt-8'>
            {discoverActions.map((item, i) => (
                <button className=' text-base text-black1' key={i}>{item}</button>
            ))}
        </div>
    </div>
  )
}

export default Discover