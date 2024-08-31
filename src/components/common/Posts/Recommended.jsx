import { useEffect } from "react"
import useFetch from "../../hook/useFetch"


const Recommended = ({ post }) => {
  const { data } = useFetch("posts")

  let recommendedPost = [];

  useEffect(() => {
    data && data.forEach((post) => {
      const postTag = post.tags;
    })
  }, [])

  return (
    <div>Recommended</div>
  )
}

export default Recommended