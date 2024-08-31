import { useEffect, useState } from "react"
import useFetch from "../../hook/useFetch"
import { readTime } from "../../../utilities/helper"
import moment from "moment/moment"


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
              <div className=" grid grid-cols-card gap-[2rem] my-[3rem]">
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
    const { postImg, desc, created, id: postId, userId } = post;
    const { data } = useFetch("users")

    const { username, userImg } = getUser = data && data.find((user) => user?.id === userId)

    return (
      <div className=" w-full cursor-pointer">
          <img className=" w-full object-cover h-[200px]" src={postImg} alt="post-img" />
          <div className=" flex items-center gap-1 py-1">
              <img className=" w-[2rem] h-[2rem] object-cover rounded-full" src={userImg} alt="user-img" />
              <h3 className=" text-sm capitalize">
                  {username}
              </h3>
          </div>
          <h2 className=" font-extrabold leading-5 line-clamp-2">
              {title}
          </h2>
          <div className=" line-clamp-2 leading-5 text-gray-500 my-3" dangerouslySetInnerHTML={{__html: desc}} />
          <p className=" text-sm text-gray-600">
              {readTime({__html : desc})} min read
              <span className=" ml-3">{ moment(created).format("MMM YY") }</span>
          </p>
      </div>
    )
}