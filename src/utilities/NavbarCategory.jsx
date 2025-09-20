import React from 'react'

const NavbarCategory = ({img, head}) => {
  return (
    <div className='border-1 border-zinc-200 flex gap-2 items-center p-2 px-3 rounded-md w-[50%]'>
        <img src={img} alt='Category Image' className='w-9'/>
        <h6 className='whitespace-nowrap text-sm'>{head}</h6>
    </div>
  )
}

export default NavbarCategory
