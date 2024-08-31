import { useState } from "react"
import Input from "../../../utilities/Input"
import { MdKeyboardArrowLeft } from "react-icons/md"
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../../../firebaseConfig/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

const SignUp = ({ setSignReq, setModal }) => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (form[("username", "email", "password", "rePassword")] === "") {
            toast.error("All fields are required")
        } else if (form["password"] !== form["rePassword"]) {
            toast.error("Your passwords are not matching!!")
            return;
        } else {
            const {user} = await createUserWithEmailAndPassword(auth, form.email, form.password);

            const ref = doc(db, "users", user.uid)
            const userDoc = await getDoc(ref)

            if(!userDoc.exists()) {
                await setDoc(ref, {
                    userId: user.uid,
                    username: form.username,
                    email: form.email,
                    userImg: "",
                    bio: "",
                    created: Date.now(),
                })
                navigate('/')
                toast.success('User has been created')
                setModal(false)
            }
        }
    }

  return (
    <div className=" size mt-[6rem] text-center">
        <h1 className=" text-3xl">Sign Up with email</h1>
        <p className=" w-full sm:w-[25rem] mx-auto py-[3rem]">
            Enter the email address associalted with your acoount and we'll send a magic link to your inbox
        </p>
        <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
            <Input form={form} setForm={setForm} type="text" title="username" />
            <Input form={form} setForm={setForm} type="email" title="email" />
            <Input form={form} setForm={setForm} type="password" title="password" />
            <Input form={form} setForm={setForm} type="password" title="rePassword" />
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