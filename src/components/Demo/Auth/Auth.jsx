import React, { useState } from 'react'
import Modal from '../../../utilities/Modal'
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from 'react-icons/fc'
import { MdFacebook } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Button = ({icon, text, click}) => {
    return(
        <button className=' flex items-center gap-10 sm:w-[20rem] border border-black px-3 py-2 rounded-full'>
            {icon} {text}
        </button>
    )
}

const Auth = () => {
    const [createUser, setCreateUser] = useState(false)
    const [signReq, setSignReq] = useState('')

  return (
    <Modal>
        <section className=' z-50 fixed top-0 bottom-0 left-0 md:left-[10rem] right-0 md:right-[10rem] overflow-auto bg-white shadow-xl'>
           <button className=' absolute top-8 right-8 text-2xl hover:opacity-50'>
                <LiaTimesSolid/>
            </button>
            <div className=' flex flex-col justify-center items-center gap-[3rem]'>
                {signReq === "" ? (
                  <>
                    <h1 className=' text-2xl pt-[5rem]'>{createUser ? "Join TechBTS" : "Welcome Back"}</h1>
                    <div className=' flex flex-col gap-2 w-fit mx-auto'>
                        <div>
                            <Button icon={<FcGoogle className=' text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Google`}/>
                        </div>
                        <div>
                            <Button icon={<MdFacebook className=' text-xl text-blue-600' />} text={`${createUser ? "Sign Up" : "Sign In"} With Facebook`}/>
                        </div>
                        <div>
                            <Button icon={<AiOutlineMail className=' text-xl' />} text={`${createUser ? "Sign Up" : "Sign In"} With Email`}/>
                        </div>
                    </div>
                    <p>
                        {createUser ? "Already have an account" : "No Account"}
                        <button onClick={() => setCreateUser(!createUser)} className=' text-green-600 hover:text-green-700 font-bold ml-1'>
                            {createUser ? "Sign in" : "Create one"}
                        </button>
                    </p>
                  </>
                ) : signReq === "sign-in" ? (
                    <SignIn />
                ) : signReq === "sign-up" ? (
                    <SignUp />
                ) : null }
                <p className='md:w-[30rem] mx-auto text-center mb-[3rem]'>
                    Click "Sign In" to agree to TechBTS's Terms of Service and 
                    acknowledge that TechBTS's Privacy Policy applies to you.
                </p>
            </div>
        </section>
    </Modal>
  )
}

export default Auth