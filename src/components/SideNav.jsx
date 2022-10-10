import React from 'react'
import { Link } from "react-router-dom"
import avatar from "../assets/images/logo.png"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';

function SideNav() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
        <div className="flex flex-col space-y-2">
            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <HomeIcon />
                </span>
                <Link to="" className="">Ahabanza</Link>
            </div>

            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <ExploreIcon />
                </span>
                <Link to="" className="">Tembera</Link>
            </div>

            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <HomeIcon />
                </span>
                <Link to="" className="">Ibyabaye</Link>
            </div>

            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <HomeIcon />
                </span>
                <Link to="" className="">Ubutumwa</Link>
            </div>

            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <HomeIcon />
                </span>
                <Link to="" className="">Urukuta rwawe</Link>
            </div>

            <div className="flex space-x-3 items-center text-lg px-6 py-3 transition-all duration-300 font-bold rounded-full focus:bg-gray-200 hover:bg-gray-200">
                <span className="">
                    <HomeIcon />
                </span>
                <Link to="" className="">Ibindi</Link>
            </div>
            
            <button to="" className="px-6 py-3 transition-all duration-300 font-bold rounded-full bg-gray-900 text-white focus:bg-black hover:bg-black text-base text-center">Andika</button>
        </div>
    </div>
  )
}

export default SideNav