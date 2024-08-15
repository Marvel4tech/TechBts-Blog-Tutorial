import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data'

const DemoHeader = () => {

  return (
    <header className=' border-b border-black sticky top-0 z-50 bg-banner'>
        <div className=' size h-[70px] flex items-center justify-between'>
           <div>
                <Link className=' font-bold text-[2.5rem]' to={'/'}>TechBTS</Link>
           </div>
           <div className=' flex items-center gap-5'>
                <ul className=' hidden text-sm sm:flex items-center gap-5'>
                    {nav.map((link) => (
                        <li key={link.id}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <div className='relative'>
                    <button className=' hidden text-sm sm:flex items-center gap-5'>
                        Sign In
                    </button>
                </div>
                <button className=' bg-black text-white rounded-full px-3 p-2 text-sm font-medium'>
                    Get Started
                </button>
           </div>
        </div>
    </header>
  )
}

export default DemoHeader