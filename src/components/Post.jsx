import React from 'react'
import avatar from "../assets/images/logo.png"
import avatar2 from "../assets/images/logo2.png"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom"
import { ModeCommentOutlined, Share } from '@mui/icons-material'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import RepeatIcon from '@mui/icons-material/Repeat';

function Post() {
    const [isActionDropDownOpen, setIsActionDropDownOpen] = React.useState(false)

    const [isLiked, setIsLiked] = React.useState(true)

    return (
        <div className="w-full border border-gray-300 rounded-sm">
            <div className="border-b border-gray-300 flex justify-between items-center px-4 py-2">
                <Link to="/users/mr3nz1" className="flex space-x-2 items-center ">
                    <img src={avatar2} alt="avatar" className="w-14 h-14 rounded-full" />
                    <span className="font-bold">John Doe</span>
                </Link>

                <div className="relative">
                    <button
                        onClick={() => {
                            setIsActionDropDownOpen(prevIsActionDropDownOpen => !prevIsActionDropDownOpen)
                        }}
                    >
                        <MoreHorizOutlinedIcon />
                    </button>

                    {isActionDropDownOpen &&
                        <div
                            onMouseLeave={() => {
                                setIsActionDropDownOpen(prevIsActionDropDownOpen => !prevIsActionDropDownOpen)
                            }}
                            className="w-32 absolute right-0 sm:left-0 bg-white border border-gray-300 shadow-md rounded-sm flex flex-col text-xs z-10"
                        >
                            <Link to="" className="px-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer py-2">Bika</Link>
                            <Link to="" className="px-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer py-2">Kura mu nshuti</Link>
                            <Link to="" className="px-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer py-2">Ntago kuyibona</Link>
                            <Link to="" className="px-4 hover:bg-gray-200 transition-all duration-300 cursor-pointer py-2">Rega</Link>
                        </div>
                    }
                </div>
            </div>

            <div className="border-b border-gray-300 p-4">
                <h1 className='text-xl'>New Feature ❗❓❕❔</h1>
                <p>Hello Twika!! users, 1st: We are feeling glad to share you the *Report issue* feature on the header bar so that we could easily get in touch with you. 2nd: Now you can udpate your status from the default one "Twika user". 3rd: View your posts by clicking on your avatar pp. 4th: View all posts of a specific personal via clicking on his / her name or pp on the post/comment. Warm regards! Twika Devs Team.</p>
            </div>

            <div className='border-b border-gray-300  p-4 text-gray-500 flex flex-col space-y-4'>
                <div className="flex justify-between items-center">
                    {!isLiked &&
                        <button onClick={() => {
                            setIsLiked(prevIsLiked => !prevIsLiked)
                        }} className="flex space-x-2 cursor-pointer text-red-500 outline-none hover:text-red-600 focus:text-red-600  focus:bg-red-100 hover:bg-red-100 p-2 rounded-full transition-all duration-300"
                        >
                            <FavoriteBorder />
                            <span>20</span>
                        </button>
                    }

                    {isLiked &&
                        <button onClick={() => {
                            setIsLiked(prevIsLiked => !prevIsLiked)
                        }} className="flex space-x-2 cursor-pointer text-red-500 outline-none hover:text-red-600 focus:text-red-600  focus:bg-red-100 hover:bg-red-100 p-2 rounded-full transition-all duration-300"
                        >
                            <Favorite />
                            <span>21</span>
                        </button>
                    }

                    <button className="flex space-x-2 cursor-pointer text-purple-500 outline-none hover:text-purple-600 focus:text-purple-600  focus:bg-purple-100 hover:bg-purple-100 p-2 rounded-full transition-all duration-300">
                        <ModeCommentOutlined />
                            <span>34</span>
                    </button>

                    <button className="flex space-x-2 cursor-pointer text-emerald-500 outline-none hover:text-emerald-600 focus:text-emerald-600  focus:bg-emerald-100 hover:bg-emerald-100 p-2 rounded-full transition-all duration-300">
                        <RepeatIcon />
                            <span>34</span>
                    </button>

                    <button className="cursor-pointer text-blue-500 hover:text-blue-600 outline-none focus:text-blue-600  focus:bg-blue-100 hover:bg-blue-100 p-2 rounded-full transition-all duration-300">
                        <Share />
                    </button>
                </div>

                <div className="flex space-x-2 items-center">
                    <Link to="">
                        <img src={avatar} alt="avatar" className="w-8 h-18 rounded-full" />
                    </Link>

                    <div className="text-xs">
                        <p>Byakunzwe na <Link to="" className="text-blue-500 hover:text-blue-600 hover:underline transition-all duration-300">John</Link> na 10 Byasakajwe na <Link to="" className="text-blue-500 hover:text-blue-600">John</Link> nabandi 10</p>
                        <p>Fri, sept 2022 10:05 am</p>
                    </div>
                </div>
            </div>

            <div className='border-b border-gray-300  p-4 text-gray-500 flex flex-col space-y-4 items-start justify-start'>
                <button className="text-blue-500 hover:text-blue-600 hover:underline transition-all duration-300 text-xs">
                    Reba izindi comment 7
                </button>

                <div className="flex flex-col space-y-4">
                    <div className="flex space-x-2 items-center">
                        <Link to="/users/mr3nz1">
                            <img src={avatar2} alt="avatar" className="w-8 h-18 rounded-full" />
                        </Link>

                        <div className="text-xs">
                            <p>James</p>
                            <p>Thur, sept 2022 10:05 am</p>
                        </div>
                    </div>

                    <div className="flex space-x-2 items-center">
                        <Link to="/users/mr3nz1">
                            <img src={avatar} alt="avatar" className="w-8 h-18 rounded-full" />
                        </Link>

                        <div className="text-xs">
                            <p>Paul</p>
                            <p>Fri, sept 2022 10:05 am</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className=''>
                <input type="text" placeholder="Gira comment utanga..." className='placeholder:text-gray-600 placeholder:text-sm p-4 bg-transparent w-full outline-none' />
            </div>
        </div>
    )
}

export default Post