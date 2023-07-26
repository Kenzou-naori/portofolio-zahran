import React from 'react';
import {MdNightsStay, MdWbSunny } from 'react-icons/md'
import avatarw from "../assets/UKNw.png";
import avatarb from "../assets/UKNb.png";

// eslint-disable-next-line react/prop-types
const Header = ({darkMode, setDarkMode}) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white ">
        <nav className="flex justify-between items-center p-5 fixed w-full">
        
            
            <div className='flex gap-3 cursor-pointer'>
            {darkMode ? (
                <img src={avatarw} className="w-11 h-6 md:w-11 md:h-6 " />

            ) : (
                <img src={avatarb} className="w-11 h-6 md:w-11 md:h-6 " />

            )

            }
            {/* <h1 className="text-lg ">NaraKen</h1> */}
            </div>

            <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (
                <MdWbSunny className="text-2xl cursor-pointer" />

            ) : (
                <MdNightsStay className="text-2xl cursor-pointer" />

            )

            }
            </div>
        </nav>
    </header>
  )
}

export default Header