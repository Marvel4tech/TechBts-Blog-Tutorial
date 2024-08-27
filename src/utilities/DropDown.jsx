import React from 'react'

const DropDown = ({ children, size, showDrop, setShowDrop }) => {
  return (
    <>
        { showDrop && (
            <div className={` shadow-2xl flex flex-col absolute right-0 top-[2rem] bg-white border ${size}`}>
                {children}
            </div>
        )}
    </>
  )
}

export default DropDown