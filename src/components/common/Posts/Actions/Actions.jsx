import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import DropDown from '../../../../utilities/DropDown'
import { useNavigate } from 'react-router-dom'

const Actions = ({ postId }) => {
    const [showDrop, setShowDrop] = useState(false)

    const handleClick = () => {
        setShowDrop(!showDrop)
    }

    const navigate = useNavigate(null)

  return (
    <div className=' relative'>
        <button onClick={handleClick}>
            <BsThreeDots className=' text-2xl' />
        </button>
        <DropDown showDrop={showDrop} setShowDrop={setShowDrop} size="w-[7rem]">
            <Button onclick={() => navigate(`/editPost/${postId}`)} title="Edit Story" />
            <Button onclick="" title="Delete Story" />
        </DropDown>
    </div>
  )
}

export default Actions


const Button = ({ click, title }) => {
    return (
        <button className={` p-2 hover:bg-gray-100 hover:text-black/80 w-full text-sm text-left 
          ${title === "Delete Story" ? "text-red-600" : ""}`}>
            {title}
        </button>
    )
}