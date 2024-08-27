import React, { useEffect, useRef } from 'react'

const DropDown = ({ children, size, showDrop, setShowDrop }) => {
    const dropRef = useRef(null)

    useEffect(() => {
        const clickOutside = (e) => {
            if (!dropRef.current.contains(e.target)){
                setShowDrop(false)
            }
        }
        window.addEventListener("mousedown", clickOutside);
        return () => window.removeEventListener("mousedown", clickOutside);
    }, [])

  return (
    <>
        { showDrop && (
            <div ref={dropRef} className={` shadow-2xl flex flex-col absolute right-0 top-[2rem] bg-white border ${size}`}>
                {children}
            </div>
        )}
    </>
  )
}

export default DropDown