import Input from "../../../utilities/Input"
import { MdKeyboardArrowLeft } from "react-icons/md"

const SignUp = ({ setSignReq }) => {
  return (
    <div className=" size mt-[6rem] text-center">
        <h1 className=" text-3xl">Sign Up with email</h1>
        <p className=" w-full sm:w-[25rem] mx-auto py-[3rem]">
            Enter the email address associalted with your acoount and we'll send a magic link to your inbox
        </p>
        <form className=" flex flex-col gap-4">
            <Input type="text" title="username" />
            <Input type="email" title="email" />
            <Input type="password" title="password" />
            <Input type="password" title="rePassword" />
            <button className=" px-4 py-1 rounded-full text-sm bg-green-700 hover:bg-green-800 text-white w-fit mx-auto">
                Sign Up
            </button>
        </form>
        <button  onClick={() => setSignReq('')} className=" flex items-center text-sm text-green-600 hover:text-green-700 mx-auto mt-5">
            <MdKeyboardArrowLeft /> All sign up Options
        </button>
    </div>
  )
}

export default SignUp