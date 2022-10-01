import React from 'react'
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import EditProfileComponents from "../components/EditProfile"
import NewPostModal from "../components/NewPostModal"

function EditProfile() {
    const [isNewPostModalOpen, setIsNewPostModalOpen] = React.useState(false)

    return (
        <div className={`text-sm text-zinc-900 pb-6`}>
            <Navbar />
            <div className="md:container md:mx-auto px-4 sm:px-6 md:px-0">
                <div className="w-full flex flex-col-reverse md:flex-row justify-between space-y-reverse space-y-4 md:space-y-0 space-x-0 md:space-x-10 mt-20 items-start">
                    <EditProfileComponents />
                    <div className='w-full md:w-1/2 md:sticky md:top-16 hidden md:block'>
                        <Sidebar setIsNewPostModalOpen={setIsNewPostModalOpen} />
                    </div>
                </div>
            </div>
            {isNewPostModalOpen &&
                <NewPostModal setIsNewPostModalOpen={setIsNewPostModalOpen} />
            }
        </div>
    )
}

export default EditProfile