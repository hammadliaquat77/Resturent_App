import React from 'react'
import Button from './FooterButton'

import { useSelector } from 'react-redux'

function Footer() {

    const darkMode = useSelector((state)=> state.darkMode.darkMode);

    return (
        <section>
            <footer className={`${darkMode ? "bg-gray-800" : "bg-gray-100"} p-8`}>
                <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">

                    {/* Left Red Box Section */}
                    <div className="bg-red-500 text-white p-6 rounded-lg w-full md:w-1/4">
                        <img src="logo.svg" alt="Logo" className="mb-4" />
                        <p className="font-bold mb-2">
                            Tuesday - Saturday: 12:00pm - 23:00pm
                        </p>
                        <p className="font-bold underline mb-6">Closed on Sunday</p>
                        <p className="font-bold">5 star rated on TripAdvisor</p>
                    </div>

                    {/* About Section */}
                    <div className={`w-full md:w-1/6 ${darkMode ? "text-white" : "text-gray-700"}`}>
                        <h3 className="text-lg font-bold border-b-4 border-yellow-400 pb-1 mb-4">About</h3>
                        <ul className={`space-y-2 ${darkMode ? "text-white" : "text-gray-700"} `}>
                            <li>Fredoka One</li>
                            <li>Special Dish</li>
                            <li>Reservation</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Menu Section */}
                    <div className={`w-full md:w-1/6 ${darkMode ? "text-white" : "text-gray-700"}`}>
                        <h3 className="text-lg font-bold border-b-4 border-yellow-400 pb-1 mb-4">Menu</h3>
                        <ul className={`space-y-2 ${darkMode ? "text-white" : "text-gray-700"} `}>
                            <li>Steaks</li>
                            <li>Burgers</li>
                            <li>Coctails</li>
                            <li>Bar B Q</li>
                            <li>Desserts</li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className={`w-full md:w-1/4  ${darkMode ? "text-white" : "text-gray-700"}`}>
                        <h3 className="text-lg font-bold border-b-4 border-yellow-400 pb-1 mb-4">Newsletter</h3>
                        <p className={`mb-4 ${darkMode ? "text-white" : "text-gray-700"} `}>Get recent news and updates.</p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className={`p-3 rounded-lg border border-gray-300 flex-1 ${darkMode ? "bg-gray-700 text-white" : "bg-white"} focus:outline-none focus:border-red-500`}
                            />
                            <button
                                type="submit"
                                className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Footer Bar */}
                <div className={`border-t border-yellow-400 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-700 font-semibold text-sm`}>
                    <p className={`${darkMode ? "text-white" : "text-gray-700"}`}>© {new Date().getFullYear()} TasteNest | All shawonetc3 Themes</p>
                    <div className="flex space-x-6 mt-2 md:mt-0">

                      <Button/>

                    </div>
                </div>
            </footer>

        </section>
    )
}

export default Footer