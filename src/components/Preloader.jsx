// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react'

import '../assets/css/style.css'
import {preLoaderAnim} from '../animation/index.js'

const Preloader = () => {
    useEffect(() =>{
        preLoaderAnim()
    },[]);


  return (
    <div className="preloader bg-gray-900 fixed overflow-hidden left-0 right-0 z-50 flex justify-center items-center h-screen w-full">
    <div className="texts-container loader">
    </div>
  </div>
  )
}

export default Preloader
