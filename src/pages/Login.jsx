import React from 'react'
import Navbar from "../components/Navbar"
import LoginComponent from "../components/Login"
import Footer from "../components/Footer"

function Login() {
  return (
    <div className="text-sm text-zinc-900">
      <Navbar />
      <div className="md:container md:mx-auto md:px-0 mt-10">
        <LoginComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Login