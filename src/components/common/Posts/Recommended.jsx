import { useEffect, useState } from "react"
import useFetch from "../../hook/useFetch"


const Recommended = ({ post: singlePost }) => {
  const { data } = useFetch("posts")
  const [commonTags, setCommonTags] = useState([])

  useEffect(() => {
    let recommendedPost = [];
    data && data.forEach((post) => {
      const postTag = post.tags;
      const commonTags = postTag.filter((tag) => {
        singlePost?.tags?.includes(tag)
      })

      if (commonTags.length > 0) {
        recommendedPost.push({
          ...post,
          commonTags,
        })
      }
    })
    setCommonTags(recommendedPost)
  }, [data, singlePost])

  console.log(commonTags)

  return (
    <section className=" bg-gray-100">
        <div className=" w-[90%] md:w-[80%] lg:w-[60%] mx-auto py-[3rem]">
            <h2 className=" text-xl font-bold">
              Recommended from Medium
            </h2>
            {commonTags.length < 0 ? (
              <p>No recommended posts found based on your preference</p>
            ) : (
              <div>
                  {commonTags.map((post) => (
                    <Post post={post} key={post.id} />
                  ))}
              </div>
            )}
        </div>
    </section>
  )
}

export default Recommended


const Post = ({ post }) => {
    const { title, username, postImg, desc, created, id: postId, userImg } = post;
    return (
      <div className=" w-full cursor-pointer">

      </div>
    )
}