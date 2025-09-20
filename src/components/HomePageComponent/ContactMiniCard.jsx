import React from 'react'

const ContactMiniCard = ({img, head1, head2}) => {
  return (
    <div className='bg-[#F4F6FA] flex gap-4 items-center p-5 rounded-lg group xl:px-2 xl:py-6 xl:gap-2 cursor-pointer'>
        <img src={img} alt="Icon Image" className='w-15 xl:w-13 group-hover:translate-y-[-5px] transition-all duration-200'/>
        <div>
            <h5 className='text-lg font-semibold'>{head1}</h5>
            <h6 className='text-md text-zinc-500'>{head2}</h6>
        </div>
    </div>
  )
}

export default ContactMiniCard
