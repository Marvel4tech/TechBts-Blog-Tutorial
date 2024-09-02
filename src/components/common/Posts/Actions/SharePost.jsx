import React, { useState } from 'react'
import DropDown from '../../../../utilities/DropDown'
import { CiShare1 } from 'react-icons/ci'
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import { BiLink, BiLogoFacebookCircle, BiLogoTwitter, BiLogoLinkedinSquare } from 'react-icons/bi'
import { toast } from 'react-toastify'

const SharePost = () => {
  const [showDrop, setShowDrop] = useState(false)

  const path = window.location.href
  const copyLink = async () => {
    try {
        await navigator.clipboard.writeText(path)
        toast.success("Link has been copied")
        setShowDrop(false)
    } catch (error) {
        toast.error(error.message)
        setShowDrop(false)
    }
  }

  return (
      <div className=' relative'>
          <button onClick={() => setShowDrop(!showDrop)}>
              <CiShare1 className=' text-2xl'/>
          </button>
          <DropDown showDrop={showDrop} setShowDrop={setShowDrop} size="w-[12rem]" className=" border shadow-xl" >
              <Button click={copyLink} title="Copy Link" icon={<BiLink />} />
              <TwitterShareButton url={path} >
                    <Button title="Share on Twitter" icon={<BiLogoTwitter />} isChild={true}/>
              </TwitterShareButton>
              <FacebookShareButton url={path} >
                    <Button title="Share on FaceBook" icon={<BiLogoFacebookCircle />} isChild={true} />
              </FacebookShareButton>
              <LinkedinShareButton url={path} >
                    <Button title="Share on LinkedIn" icon={<BiLogoLinkedinSquare />} isChild={true} />
              </LinkedinShareButton>
          </DropDown>
      </div>
  )
}

export default SharePost


const Button = ({ click, title, icon, children, isChild }) => {
    if (isChild) {
        return (
            <span className=' p-2 hover:bg-gray-200 hover:text-black/80 w-full text-sm text-left flex items-center gap-2 cursor-pointer
            text-gray-500'>
                <span className=' text-[1.2rem]'>{icon}</span>
                {title}
                {children}
            </span>
        )
    } else {
        return (
            <button className=' p-2 hover:bg-gray-200 hover:text-black/80 w-full text-sm text-left flex items-center gap-2 cursor-pointer
            text-gray-500' onClick={click}>
                <span className=' text-[1.2rem]'>{icon}</span>
                {title}
                {children}
            </button>
        );
    }
};