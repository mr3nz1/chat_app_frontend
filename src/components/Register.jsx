import React from 'react'
import img from "../assets/images/phone.png"
import playstore from "../assets/images/playstore.png"
import appstore from "../assets/images/appstore.png"
import { Link } from "react-router-dom"


function Register() {
    const [formData, setFormData] = React.useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    })

    const [errors, setErrors] = React.useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    })

    function handleChange(e) {
        const { name, value } = e.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        // validate before submiting
        console.log(formData)
    }

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <img src={img} alt="app_image" className="hidden md:flex" />

                <div className="flex flex-col items-center justify-center space-y-2 md:mt-0 w-full">
                    <div className="flex flex-col space-y-4 border border-gray-200 rounded-sm p-4 sm:w-96">
                        <div className="text-center flex flex-col space-y-2">
                            <h1 className='text-xl text-gray-900 text-serif uppercase font-bold'>GANIRA</h1>
                            <p className='text-base text-gray-500'>Iyandikishe kugira ngo ubone inkuru, amafoto nibirikubera hirya no hino.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                            <input name="fullname" onChange={handleChange} type="text" placeholder='Amazina yawe yuzuye' className='px-4 py-3 rounded-sm bg-gray-100 text-xs border border-gray-200 outline-none focus:border-0 focus:border-l-4 focus:border-blue-500 transition-all duration-300' required />
                            <input name="username" onChange={handleChange} type="text" placeholder='Izina uzajya ukoresha' className='px-4 py-3 rounded-sm bg-gray-100 text-xs border border-gray-200 outline-none focus:border-0 focus:border-l-4 focus:border-blue-500 transition-all duration-300' required />
                            <input name="email" onChange={handleChange} type="email" placeholder='Email' className='px-4 py-3 rounded-sm bg-gray-100 text-xs border border-gray-200 outline-none focus:border-0 focus:border-l-4 focus:border-blue-500 transition-all duration-300' required />
                            <input name="password" onChange={handleChange} type="password" placeholder='Ijambo banga' className='px-4 py-3 rounded-sm bg-gray-100 text-xs border border-gray-200 outline-none focus:border-0 focus:border-l-4 focus:border-blue-500 transition-all duration-300' required />
                            <input name="passwordConfirmation" onChange={handleChange} type="password" placeholder='Emeza ijambo banga' className='px-4 py-3 rounded-sm bg-gray-100 text-xs border border-gray-200 outline-none focus:border-0 focus:border-l-4 focus:border-blue-500 transition-all duration-300' required />
                            <button type="submit" className='bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white text-xs py-3 outline-none rounded-sm focus:border focus:border-blue-500 focus:bg-white focus:text-blue-500'>Tanga</button>
                        </form>
                    </div>

                    <div className="border border-gray-200 rounded-sm p-4 sm:w-96 text-xs">
                        <p>Ufite konti? <Link to="/login" className='text-blue-500'>Injira</Link></p>
                    </div>

                    <div className="flex justify-center space-x-2 p-4 sm:w-96">
                        <img src={appstore} className="w-28" alt="app store" />
                        <img src={playstore} className="w-28" alt="play store" />
                    </div>
                </div>
            </div>

            <div className='flex justify-center w-full'>
                <p className="">Byakozwe na <span className='text-xl text-gray-900 text-serif uppercase font-bold'>GANIRA</span></p>
            </div>
        </>
    )
}

export default Register