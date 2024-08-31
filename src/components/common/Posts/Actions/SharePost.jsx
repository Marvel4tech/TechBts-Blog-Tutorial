import React, { useState } from 'react'
import DropDown from '../../../../utilities/DropDown'
import { CiShare1 } from 'react-icons/ci'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { BiLink, BiLogoFacebookCircle, BiLogoTwitter, BiLogoLinkedinSquare } from 'react-icons/bi'

const SharePost = () => {
  const [showDrop, setShowDrop] = useState(false)

  return (
      <div className=' relative'>
          <button onClick={() => setShowDrop(!showDrop)}>
              <CiShare1 className=' text-2xl'/>
          </button>
          <DropDown showDrop={showDrop} setShowDrop={setShowDrop} size="w-[12rem]" className=" border shadow-xl" >
              <Button click={""} title="Copy Link" icon={<BiLink />} />
              <Button click={""} title="Share on Twitter" icon={<BiLogoTwitter />} />
              <Button click={""} title="Share on FaceBook" icon={<BiLogoFacebookCircle />} />
              <Button click={""} title="Share on LinkedIn" icon={<BiLogoLinkedinSquare />} />
          </DropDown>
      </div>
  )
}

export default SharePost


const Button = ({ click, title, icon }) => {
    return (
        <button className=' p-2 hover:bg-gray-200 hover:text-black/80 w-full text-sm text-left flex items-center gap-2 cursor-pointer
        text-gray-500'>
            <span className=' text-[1.2rem]'>{icon}</span>
            {title}
        </button>
    )
}