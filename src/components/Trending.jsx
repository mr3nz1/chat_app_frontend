import React from 'react'
import { Link } from "react-router-dom"

function Trending() {
    return (
        <div className="flex flex-col space-y-2">
            <h1 className="text-xl font-bold">Post zaciye ibintu</h1>

            <div className='flex flex-col space-y-2'>
                <Link to="" className="border-l-2 px-2 border-blue-500 hover:border-l-4 hover:text-blue-600 transition-all duration-300 rounded-sm">
                    Rwandan posts
                </Link>

                <Link to="" className="border-l-2 px-2 border-blue-500 hover:border-l-4 hover:text-blue-600 transition-all duration-300 rounded-sm">
                    Russia
                </Link>

                <Link to="" className="border-l-2 px-2 border-blue-500 hover:border-l-4 hover:text-blue-600 transition-all duration-300 rounded-sm">
                    USA
                </Link>

                <Link to="" className="border-l-2 px-2 border-blue-500 hover:border-l-4 hover:text-blue-600 transition-all duration-300 rounded-sm">
                    Africa
                </Link>

                <Link to="" className="border-l-2 px-2 border-blue-500 hover:border-l-4 hover:text-blue-600 transition-all duration-300 rounded-sm">
                    Fashion
                </Link>
            </div>
        </div>)
}

export default Trending