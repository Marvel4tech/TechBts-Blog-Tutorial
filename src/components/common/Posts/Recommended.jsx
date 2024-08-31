import { useEffect } from "react"
import useFetch from "../../hook/useFetch"


const Recommended = () => {
  const {data} = useFetch("posts")

  let recommendedPost = [];

  useEffect(() => {
    
  }, [])

  return (
    <div>Recommended</div>
  )
}

export default Recommended