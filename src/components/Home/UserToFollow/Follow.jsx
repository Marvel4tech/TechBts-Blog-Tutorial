import { useState } from "react"
import useFetch from "../../hook/useFetch"
import { Blog } from "../../../context/Context"


const Follow = () => {
    const { data, loading } = useFetch("users")
    const { currentUser } = Blog()
    const [count, setCount] = useState(5)

    const users = data && data?.slice(0, count).filter((user) => user.userId !== currentUser?.uid)

  return (
    <div>
        {data && users?.map((user, i) => {
          /*const {username, bio, userImg, userId} = user;*/
          return (
            <div key={i} className=" flex items-start gap-2 my-4">
                <div className=" flex-1 flex items-center gap-2 cursor-pointer">
                    <img src={user.userImg} alt="userImg" className=" w-[3rem] h-[3rem] cursor-pointer object-cover gap-2" />
                </div>
                <div className=" flex flex-col gap-1">
                    <h2 className=" font-bold capitalize">
                      {user.username}
                    </h2>
                    <span className=" leading-4 text-gray-500 text-sm line-clamp-2">
                      {user.bio || "This user has no bio"}
                    </span>
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default Follow