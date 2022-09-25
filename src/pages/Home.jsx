import React from 'react'
import Navbar from "../components/Navbar"
import HomeComponent from "../components/Home"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="text-sm text-zinc-900 pb-6">
      <Navbar />
      <div className="md:container md:mx-auto px-4 sm:px-6 md:px-0">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between space-y-reverse space-y-4 md:space-y-0 space-x-0 md:space-x-10 mt-20">
          <HomeComponent />
          <div className='w-full h-screen md:w-1/2 md:sticky md:top-16'>
            <Sidebar />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home