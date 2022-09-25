import React from 'react'
import avatar from "../assets/images/logo.png"
import banner from "../assets/images/banner.jpg"
import { Link } from "react-router-dom"
import { ModeCommentOutlined } from '@mui/icons-material'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Post from "../components/Post"

function User() {
  return (
    <div className="w-full rounded-md flex flex-col space-y-4">
      <div className='flex space-x-4 py-2 items-center'>
        <Link to="/" className="p-2 bg-blue-50 text-blue-500 hover:text-blue-600 focus:text-blue-500 hover:bg-blue-100 focus:bg-blue-100 transition-all duration-300 rounded-full">
          <ArrowBackOutlinedIcon />
        </Link>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold">mr3nz1</h1>
          <p className='text-xs'>Yasakaje post 13</p>
        </div>
      </div>

      <div className="w-full rounded-sm relative mt-2">
        <div className="w-full rounded-sm bg-gradient-to-b from-white to-gray-500">
          <img src={banner} alt="banner" className="cursor-pointer w-full rounded-sm mix-blend-multiply" />
        </div>
        <img src={avatar} alt="avatar" className="cursor-pointer w-32 h-32 rounded-full absolute -bottom-14 left-4 border-4 border-white" />
      </div>

      <div className='flex justify-end items-center space-x-2 my-4 px-2'>
        <button className="text-purple-500 outline-none hover:text-purple-600 focus:text-purple-600 hover:bg-purple-100 focus:bg-purple-100 p-2 rounded-full transition-all duration-300">
          <ModeCommentOutlined />
        </button>

        <button className="text-blue-500 outline-none hover:text-blue-600 focus:text-blue-600 hover:bg-blue-100 focus:bg-blue-100 p-2 rounded-full transition-all duration-300">
          <MoreHorizOutlinedIcon />

        </button>

        <button className="bg-gray-900 text-white outline-none hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300   transition-all duration-300 rounded-full px-4 py-2">Kurikirana</button>
      </div>

      <div className='px-2 flex flex-col space-y-2'>
        <h1 className="text-xl font-bold">mr3nz1</h1>

        <div className='text-sm'>
          <p>Frontend Developer | Freelancer | WordPress Developer since 2019 | JavaScript | VUE 💚 | Career Tips | writing my journey on my 40+https</p>
        </div>

        <div className="w-full flex space-x-4">
          <div className="flex space-x-1">
            <span className="font-bold">470</span>
            <span className="text-gray-600 font-light">Bamukurikirana</span>
          </div>

          <div className="flex space-x-1">
            <span className="font-bold">14K</span>
            <span className="text-gray-600 font-light">Akurikirana</span>
          </div>
        </div>

        <div to="" className='flex space-x-2 items-center'>
          <img src={avatar} alt="avatar" className="w-8 h-18 rounded-full" />
          <Link to="" className="outline-none hover:underline focus:underline">Akurikiranwa na Joseph</Link>
        </div>
      </div>

      <div className="flex flex-col space-y-2 rounded-sm">
        <div className="p-4 bg-gray-100">
          <p className="text-xl font-bold">Posts</p>
        </div>

        <div className="flex flex-col space-y-4">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
}

export default User