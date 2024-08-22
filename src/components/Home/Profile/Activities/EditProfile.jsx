import { LiaTimesSolid } from "react-icons/lia"
import Modal from "../../../../utilities/Modal"
import { useEffect, useRef, useState } from "react"
import { toast } from "react-toastify"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../../../../firebaseConfig/firebase"


const EditProfile = ({editModal, setEditModal, getUserData}) => {
    const imgRef = useRef(null)
    const [imageUrl, setImageUrl] = useState("")
    const [form, setForm] = useState({username:"", userImg:"", bio:""})

    const openFile = () => {
        imgRef.current.click()
    }

    useEffect(() => {
        if (getUserData){
            setForm(getUserData)
        } else{
            setForm({username: '', userImg: '', bio: ''})
        }
    }, [getUserData])

    const saveForm = async () => {
        if (form["username"] === "" || form["bio"] === "") {
            toast.error("All fields are required!!!");
            return
        }

        const storageRef = ref(storage, `image/${form.userImg.name}`)
        await uploadBytes(storageRef, form?.userImg)

        const imageUrl = await getDownloadURL(storageRef)

    }

    const btn = " border border-green-600 py-2 px-5 rounded-full text-green-600"

  return (
    <Modal modal={editModal} setModal={setEditModal}>
        <div className=" center w-[95%] md:w-[45rem] bg-white shadow-xl mx-auto my-[1rem] z-10 mb-[3rem] p-[2rem] border">
            <div className=" flex items-center justify-between">
                <h2 className=" font-bold text-xl">Profile Information</h2>
                <button onClick={() => setEditModal(false)} className=" text-xl"><LiaTimesSolid /></button>
            </div>
            <section className=" mt-6">
                <p className=" pb-3 text-gray-500 text-sm">
                    Photo
                </p>
                <div className=" flex gap-[2rem]">
                    <div className=" w-[5rem]">
                        <img className=" min-h-[5rem] min-w-[5rem] object-cover border border-gray-400 rounded-full" 
                          src={imageUrl ? imageUrl : "/profile.png"} alt="profile-pix" 
                        />
                        <input 
                            onChange={(e) => {setImageUrl(URL.createObjectURL(e.target.files[0])); 
                                setForm({...form, userImg: e.target.files[0]})
                                }} 
                            accept="image.png, image/jpg, image/jpeg" 
                            ref={imgRef} type="file" hidden 
                        />
                    </div>
                    <div>
                        <div className=" flex gap-4 text-sm">
                            <button onClick={openFile} className=" text-green-600">Update</button>
                            <button className=" text-red-600">Remove</button>
                        </div>
                        <p className=" w-full sm:w-[20rem] text-gray-500 text-sm pt-2">
                            Recommended: Square JPG, PNG, or Gif, at least 1,000 pixels per side
                        </p>
                    </div>
                </div>
            </section>
            <section className=" pt-[1rem] text-sm">
                <label className=" pb-3 block" htmlFor="">
                    Name*
                </label>
                <input 
                    type="text" placeholder="username..." className=" w-full p-1 outline-none border-b border-black" maxLength={50} 
                    onChange={(e) => setForm({...form, username: e.target.value})}
                    value={form.username}
                />
                <p className=" text-sm text-gray-600 pt-2">
                    Appears on your Profile page, as your byline, and in your responses.10/50
                </p>
                <section className=" pt-[1rem]">
                    <label className=" pb-3 block" htmlFor="">
                        Bio*
                    </label>
                    <input 
                        type="text" placeholder="bio..." className=" w-full p-1 outline-none border-b border-black" maxLength={160} 
                        onChange={(e) => setForm({...form, bio: e.target.value})}
                        value={form.bio}
                    />
                    <p className=" text-sm text-gray-600 pt-2">
                        Appears to your Profile and next to your stories. 42/160
                    </p>
                </section>
            </section>
            <div className=" flex items-center justify-end gap-4 pt-[2rem]">
                <button onClick={() => setEditModal(false)} className={btn}>Cancel</button>
                <button onClick={saveForm} className={`${btn} bg-green-800 text-white`}>Save</button>
            </div>
        </div>
    </Modal>
  )
}

export default EditProfile