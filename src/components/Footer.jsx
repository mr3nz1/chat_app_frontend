import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="flex flex-col justify-between w-full mt-10">
            {/* <div className="flex justify-center p-6 text-zinc-900 w-full">
                <div className='flex flex-col space-y-2 justify-start items-start'>
                    <h1 className="capitalize font-bold text-2xl">Kora Inshuti Unyuze Kuri Ganira</h1>

                    <p>Ganira irashishikaze, kora inkuru usakaze amafoto, amavideo maze uhatwike! Kora inshuti uhereye ubu!</p>
                    <Link to="" className="px-4 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300">Tangira</Link>
                </div>

            </div> */}

            <div className="w-full flex justify-between items-center px-10 py-4 text-zinc-900 bg-gray-200">
                <p>© 2022 GREAT LAKES NEWS. All rights reserved.</p>
                <div className="">
                    <Link to="/" className="text-2xl font-bold text-gray-900">Ganira</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer