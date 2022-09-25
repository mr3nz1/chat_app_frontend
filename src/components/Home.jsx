import React from 'react'
import Post from "./Post"

function Home() {
  return (
        <div className='w-full flex flex-col space-y-4'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Home