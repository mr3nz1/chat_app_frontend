import React from 'react'
import Navbar from "../components/Navbar"
import HomeComponent from "../components/Home"
import Sidebar from "../components/Sidebar"
import NewPostModal from '../components/NewPostModal'
import SideNav from "../components/SideNav"

function Home() {
  const [isNewPostModalOpen, setIsNewPostModalOpen] = React.useState(false)

  return (
    <div className={`text-sm text-zinc-900 pb-6`}>
      <Navbar />
      <div className="px-4 sm:px-6 md:px-0">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between space-y-reverse space-y-4 md:space-y-0 space-x-0 md:space-x-10 mt-15 items-start">
          <div className="md:w-1/3 md:sticky md:top-16 hidden md:block pl-4">
            <SideNav />
          </div>
          <div className='w-full pt-20'>
            <HomeComponent />
          </div>
          <div className='w-full md:w-1/2 md:sticky md:top-16 hidden md:block pr-4'>
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

export default Home