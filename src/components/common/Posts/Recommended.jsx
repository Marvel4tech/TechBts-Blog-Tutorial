import { useEffect } from "react"
import useFetch from "../../hook/useFetch"


const Recommended = ({ post: singlePost }) => {
  const { data } = useFetch("posts")

  let recommendedPost = [];

  useEffect(() => {
    data && data.forEach((post) => {
      const postTags = post.tags;
      const commonTags = postTags.filter((postTag) => {
        singlePost?.tags.includes(postTag)
      })
    })
  }, [])

  return (
    <div>Recommended</div>
  )
}

export default Recommended