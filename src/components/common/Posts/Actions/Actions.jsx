import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import DropDown from '../../../../utilities/DropDown'

const Button = ({ click, title }) => {
    return (
        <button className={` p-2 hover:bg-gray-100 hover:text-black/80 w-full text-sm text-left 
          ${title === "Delete Story" ? "text-red-600" : ""}`}>
            {title}
        </button>
    )
}

const Actions = () => {
  return (
    <div className=' relative'>
        <button>
            <BsThreeDots className=' text-2xl' />
        </button>
        <DropDown>
            <Button onclick="" title="Edit Story" />
            <Button onclick="" title="Delete Story" />
        </DropDown>
    </div>
  )
}

export default Actions