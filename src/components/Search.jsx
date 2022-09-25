import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import forest from "../assets/images/forest.jpg"
import Trending from "../components/Trending"

function Search() {
    return (
        <div className='w-full'>
            <div className="w-full flex space-x-4 justify-between items-center">
                <form className="w-full">
                    <div className="flex space-x-2 w-full bg-gray-100 items-center rounded-full">
                        <span className="pl-4 text-gray-400">
                            <SearchOutlinedIcon />
                        </span>
                        <input type="text" placeholder="Shakisha muri Ganira" className='bg-transparent w-full py-4 pr-4 outline-none' />
                    </div>
                </form>

                <button className="text-gray-500 p-1 outline-none hover:bg-gray-100 focus:bg-gray-100 rounded-full">
                    <SettingsOutlinedIcon />
                </button>
            </div>

            <div className="relative bg-gradient-to-b from-white to-gray-500 mt-2">
                <img src={forest} alt="forest" className="rounded-sm mix-blend-multiply" />
                <div className="absolute bottom-2 left-2 text-white">
                    <p className="text-sm font-light">Nyungwe national park</p>
                    <h1 className="text-2xl">Tembera u Rwanda</h1>
                </div>
            </div>

            <div className='mt-4 px-4'>
                <Trending />
            </div>
        </div>
    )
}

export default Search