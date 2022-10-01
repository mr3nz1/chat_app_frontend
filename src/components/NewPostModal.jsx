import React from 'react'
import avatar from "../assets/images/logo.png"
import { Close } from '@mui/icons-material'

function NewPostModal(props) {
    const { setIsNewPostModalOpen } = props

    const handleCloseNewPostModal = () => {
        document.body.classList.remove('overflow-hidden');
        setIsNewPostModalOpen(prevIsNewPostModalOpen => !prevIsNewPostModalOpen)
    }
    
    return (
        <div className='w-screen h-screen fixed top-0 left-0 bg-gray-500 bg-opacity-50 z-20 overflow-hidden flex items-start justify-center fade'>
            <div className="w-full md:w-1/2 h-screen md:h-auto md:mt-10 bg-white md:rounded-md p-4 md:shadow-md">
                <div className="w-full">
                    <button onClick={handleCloseNewPostModal} className="p-1 hover:bg-gray-100 focus:bg-gray-100 rounded-full">
                        <Close />
                    </button>
                </div>

                <form className="flex space-x-2  items-start mt-2">
                    <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                    <div className="w-full">
                        <textarea name="" id="" rows="5" className="px-2 py-1 w-full bg-transparent outline-none placeholder:text-gray-600 resize-none" placeholder='Ibyo ushaka kwandika...' />
                        <div className="border-t border-gray-500 mt-2 p-2 flex justify-between items-center">
                            <div>
                                <p>Hatwike wimanukire</p>
                            </div>
                            <button className="bg-gray-900 text-white outline-none hover:text-gray-900 focus:text-gray-900 hover:bg-gray-300 focus:bg-gray-300 transition-all duration-300 rounded-full px-4 py-2">Postinga</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPostModal