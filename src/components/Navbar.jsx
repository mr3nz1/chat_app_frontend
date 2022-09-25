import React from 'react'
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'

function Navbar() {
  return (
    <nav className='w-full flex justify-between items-center px-6 py-2 bg-white border-b border-gray-200 text-sans fixed top-0 z-20'>
        <div className="">
            <Link to="/" className="text-2xl font-bold text-gray-900">Ganira</Link>
        </div>

        <form className='hidden md:flex-1'>
            <div className='flex bg-gray-100 rounded-full'>
                <input placeholder='Shaka inshuti' className="bg-transparent w-full pl-2 outline-none" />
                <button className="px-2 py-1 rounded-r-full hover:bg-gray-300">
                    <SearchIcon />
                </button>
            </div>
        </form>

        <div className="flex space-x-4 items-center">
            <Link to="" className="hidden md:flex hover:underline transition-all duration-300">Ubufasha</Link>
            <Link to="" className="hidden md:flex hover:underline transition-all duration-300">Amabwiriza</Link>
            <Link to="/login" className='px-4 py-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white rounded-full'>Injira Ku Buntu</Link>
        </div>
    </nav>
  )
}

export default Navbar