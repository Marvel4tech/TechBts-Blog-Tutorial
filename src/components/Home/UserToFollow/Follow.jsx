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
          const {username, bio, userImg, userId} = user;
          return (
            <div key={i} className=" flex items-start gap-2 my-4">
                <div className=" flex-1 flex items-center gap-2 cursor-pointer">
                    <img src={userImg} alt="userImg" />
                </div>
            </div>
          )
        })}
    </div>
  )
}

export default Follow