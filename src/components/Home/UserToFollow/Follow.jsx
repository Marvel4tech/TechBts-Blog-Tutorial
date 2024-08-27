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

    </div>
  )
}

export default Follow