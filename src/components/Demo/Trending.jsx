/* import React from 'react'
import { Blog } from '../../context/Context'
import { BsGraphUpArrow } from 'react-icons/bs'

const Trending = () => {
  const { data } = Blog()
  const getTrending = data?.sort((a, b) => b.pageViews - a.pageViews)

  return (
    <section className=' border-b border-gray-600'>
        <div className=' size py-[2rem]'>
            <div className=' font-semibold flex items-center gap-3'>
                <span>
                  <BsGraphUpArrow />
                </span>
                <h2>Trending Posts</h2>
            </div>
            <div className=' grid grid-cols-card gap-3'>
                {getTrending.slice(0,6).map((trend, i) => (
                  <Trend trend={trend} key={i} index={i} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Trending


const Trend = () => {
  return (
    <h2>Hello</h2>
  )
} */