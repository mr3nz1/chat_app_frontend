import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from "react-router-dom"
import avatar from "../assets/images/logo.png"
import banner from "../assets/images/banner.jpg"
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


function EditProfile() {
  return (
    <div className="w-full">
      <div className='w-full px-2 flex justify-between items-center'>
        <div className='flex space-x-4 items-center'>
          <Link to="/" className="p-2 bg-blue-50 text-blue-500 hover:text-blue-600 focus:text-blue-500 hover:bg-blue-100 focus:bg-blue-100 transition-all duration-300 rounded-full">
            <ArrowBackOutlinedIcon />
          </Link>

          <h1 className="text-xl font-bold">Hindura Profile yawe</h1>
        </div>

        <button className="bg-gray-900 text-white outline-none hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300   transition-all duration-300 rounded-full px-4 py-2">Bika</button>
      </div>

      <div className="w-full rounded-sm relative mt-2">
        <div className="w-full rounded-sm bg-gradient-to-b from-white to-gray-500 relative">
          <img src={banner} alt="banner" className="w-full rounded-sm mix-blend-multiply" />

          <div className='absolute top-1/2 w-full justify-center z-20 flex space-x-4 items-center'>
            <button className="p-2 rounded-full outline-none bg-gray-100 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 transition-all duration-300">
              <AddAPhotoOutlinedIcon />
            </button>

            <button className="p-2 rounded-full outline-none bg-gray-100 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 transition-all duration-300">
              <CloseOutlinedIcon />
            </button>
          </div>
        </div>

        <div className="w-32 h-32 rounded-full absolute -bottom-14 left-4 border-4 border-white">
          <div className="w-full h-full rounded-full bg-gray-500 relative">
            <img src={avatar} alt="avatar" className="w-full h-full rounded-full" />

            <div className="w-full h-full flex justify-center items-center absolute z-10 rounded-full top-0 left-0">
              <button className="p-2 rounded-full outline-none bg-gray-100 bg-opacity-50 hover:bg-opacity-100 focus:bg-opacity-100 transition-all duration-300">
                <AddAPhotoOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <form className="flex flex-col space-y-2 mt-20 px-4">
        <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="fullname" className="text-gray-500">Amazina bwite</label>
          <textarea id="fullname" type="text" className="bg-transparent outline-none py-2 w-full resize-none" />
        </div>

        <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="username" className="text-gray-500">Amazina ukoresha</label>
          <textarea id="username" type="text" className='bg-transparent outline-none py-2 w-full resize-none' />
        </div>

        <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="description" className="text-gray-500">Ibyo ushaka ko abantu bakumenyaho</label>
          <textarea id="description" type="text" className='bg-transparent outline-none py-2 w-full resize-none' />
        </div>

        <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="email" className="text-gray-500">Email yawe</label>
          <textarea id="email" type="text" className="bg-transparent outline-none py-2 w-full resize-none" />
        </div>

        {/* <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="password" className="text-gray-500">Ijambo banga</label>
          <textarea type="text" className="bg-transparent outline-none py-2 w-full resize-none" />
        </div>

        <div className="border border-gray-300 p-2 rounded-md focus:border-blue-500 focusable-input-div">
          <label htmlFor="passwordConfirmation" className="text-gray-500">Emeza ijambo banga</label>
          <textarea id="passwordConfirmation" type="text" className="bg-transparent outline-none py-2 w-full resize-none" />
        </div> */}
      </form>
    </div>
  )
}

export default EditProfile