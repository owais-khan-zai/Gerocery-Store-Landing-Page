import React from 'react'
import gif from '../assets/loading.gif'

const Loader = () => {
  return (
        <div className='w-full h-full fixed top-0 left-0 z-25 bg-white flex justify-center items-center'>
            <img src={gif} alt="Loader SVG Image" />
         </div>
  )
}

export default Loader
