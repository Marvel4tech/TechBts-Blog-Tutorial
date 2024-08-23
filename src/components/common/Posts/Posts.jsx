import React from 'react'
import useFetch from '../../hook/useFetch'
import Loading from '../../Loading/Loading'
import PostCard from './PostCard'

const Posts = () => {
  const { data, loading } = useFetch("posts")

  return (
    <section className=' flex flex-col gap-[2.5rem]'>
        {loading ? <Loading /> : data.localeCompare((post, i) => <PostCard />)}
    </section>
  )
}

export default Posts