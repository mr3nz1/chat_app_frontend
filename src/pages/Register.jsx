import React from 'react'
import Navbar from "../components/Navbar"
import RegisterComponent from "../components/Register"
import Footer from "../components/Footer"

function Register() {
  return (
    <div className="text-sm text-zinc-900">
      <Navbar />
      <div className="md:container md:mx-auto md:px-0 mt-10">
        <RegisterComponent />
        <Footer />
      </div>
    </div>
  )
}

export default Register