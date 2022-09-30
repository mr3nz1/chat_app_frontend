import React from 'react'
import avatar from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import avatar2 from "../assets/images/logo2.png"
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Trending from "./Trending"

function Sidebar(props) {
  const { setIsNewPostModalOpen } = props

  const handleOpenNewPostModal = () => {
    document.body.classList.add('overflow-hidden');
    setIsNewPostModalOpen(prevIsNewPostModalOpen => !prevIsNewPostModalOpen)
  }

  const handleCloseNewPostModal = () => {
    document.body.classList.add('overflow-hidden');
    setIsNewPostModalOpen(prevIsNewPostModalOpen => !prevIsNewPostModalOpen)
  }

  return (
    // w-full md:w-96 h-96  I might add this later
    <div className='w-full bg-gray-100 rounded-sm py-2 px-6'>
      <div className="flex items-center space-x-2 border-b border-gray-300 py-4">
        <img src={avatar} alt="avatar" className="w-14 h-14 rounded-full" />
        <div className='text-sm flex flex-col space-y-1 justify-start items-start'>
          <h1 className="font-bold text-xl">mr3nz1</h1>
          <Link to="/users/mr3nz1/edit" className="p-1 text-blue-500 bg-blue-100 rounded-full hover:text-blue-600 hover:bg-blue-100 transition-all duration-300">
            <ManageAccountsOutlinedIcon />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 border-b border-gray-300">
        <div className=''>
          <p>Inshuti 40</p>
          <p>Post 6</p>
        </div>
        <Link onClick={handleOpenNewPostModal} to="" className="px-4 py-2 font-bold bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 flex items-center space-x-1">
          Andika
        </Link>
      </div>

      <div className="py-4">
        <Trending />
      </div>


      <div className="py-4 flex flex-col space-y-2">
        <h1 className="text-xl font-bold">Abantu ushobora kuba uzi</h1>

        <div className="flex flex-col space-y-2">
          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-2 items-center">
              <img src={avatar2} alt="avatar2" className="w-10 h-10 rounded-full" />
              <Link to="" className="hover:underline font-bold">mr3nz1</Link>
            </div>
            <button className="bg-gray-900 text-white outline-none hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300   transition-all duration-300 rounded-full px-4 py-2">Kurikirana</button>
          </div>

          <div className="flex justify-between items-center py-2">
            <div className="flex space-x-2 items-center">
              <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
              <Link to="" className="hover:underline font-bold">mr3nz1</Link>
            </div>
            <button className="bg-gray-900 text-white outline-none hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300   transition-all duration-300 rounded-full px-4 py-2">Kurikirana</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar