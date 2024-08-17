import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../../data'
import Auth from './Auth/Auth'

const DemoHeader = () => {
    const [isActive, setIsActive] = useState(false)
    const [modal, setModal] = useState(true)

    useEffect(() => {
        const scrollMe = () => {
            window.scrollY > 50 ? setIsActive(true) : setIsActive(false)
        }
        window.addEventListener("scroll", scrollMe())
    }, [])

  return (
    <header className={`border-b border-black sticky top-0 z-50 ${isActive ? "bg-white" : "bg-banner"} transition-all duration-500`}>
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
                    <button onClick={() => setModal(true)} className=' hidden text-sm sm:flex items-center gap-5'>
                        Sign In
                    </button>
                    <Auth modal={modal} setModal={setModal} />
                </div>
                <button onClick={() => setModal(true)} className={` bg-black text-white rounded-full px-3 p-2 text-sm 
                font-medium ${isActive ? "bg-green-700" : "bg-black"}`}>
                    Get Started
                </button>
           </div>
        </div>
    </header>
  )
}

export default DemoHeader