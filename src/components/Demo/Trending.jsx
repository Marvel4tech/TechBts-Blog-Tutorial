import React from 'react'
import { Blog } from '../../context/Context'
import { BsGraphUpArrow } from 'react-icons/bs'

const Trending = () => {
  const { postData } = Blog()
  const getTrending = postData?.sort((a, b) => b.pageViews - a.pageViews)

  return (
    <section className=' border-b border-gray-600'>
        <div className=' size py-[2rem]'>
            <div className=' font-semibold flex items-center gap-3'>
                <span>
                  <BsGraphUpArrow />
                </span>
                <h2>Trending Posts</h2>
            </div>
        </div>
    </section>
  )
}

export default Trending