import React from 'react'

const ProductCategoryComponent = ({img, head,star,rating,price,realPrice}) => {
  return (
    <div className='border-1 group border-zinc-300 flex gap-3 xl:gap-2 rounded-lg overflow-hidden p-2 py-4 items-center cursor-pointer'>
      <img src={img} alt="Cards Image" className='w-25 group-hover:translate-y-[-5px] transition-all duration-200'/>
      <div>
        <h4 className='font-semibold text-lg  leading-5 capitalize'>{head}</h4>
        {/* grey star background */}
            <div className='relative flex items-center'>
                <div className="text-gray-300 text-sm">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </div>

                {/* Yellow Stars Overlay */}
                <div
                    className="absolute top-0 left-0 overflow-hidden text-sm text-yellow-400"
                    style={{ width: `${star}%` }}
                >
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                </div>
                <h5 className='text-zinc-500 text-sm ml-2'>{rating}</h5>
            </div>
        <div className='flex gap-2 items-center'>
            <h4 className='text-[#3BB77E] font-bold text-xl'>${realPrice}</h4>
            <h5 className='text-zinc-500 line-through'>${price}</h5>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryComponent
