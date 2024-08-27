import React from 'react'

const DropDown = ({ children, size, showDrop, setShowDrop }) => {
  return (
    <div className=' shadow-2xl flex flex-col absolute right-0 top-[2rem] bg-white border'>
        {children}
    </div>
  )
}

export default DropDown