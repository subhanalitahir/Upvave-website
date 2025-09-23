import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Navbar = () => {
  const navLinks = ["Home","About","Contact","More"]
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  return (
    <div>
        <nav>
          <img src="/images/logo-upvave.png" alt="Upvave logo" className='w-30' />
<button
            className="text-4xl font-bold focus:outline-none text-black cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>            <div
        className={`fixed top-0 right-0 h-screen w-[50vw] bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0 nav" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-10">
          <div className="w-full flex justify-end relative bottom-4">
            <button
              className=" text-sm underline"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src='/images/close.svg' alt="close button" className='cursor-pointer' />
            </button>
            
          </div>
          <ul>
            {navLinks.map(
              (link) =>
                isMenuOpen && (
                  <motion.li
                    initial={{ opacity: 0, y: 20 }} // Start faded out and slightly below
                    animate={{ opacity: 1, y: 10 }} // End fully visible and in position
                    className="text-7xl m-2 cursor-pointer hover:font-bold"
                  >
                    {link}
                  </motion.li>
                )
            )}
          </ul>

          {/* Close Button */}
        </div>
      </div>
        </nav>
    </div>
  )
}

export default Navbar