import React, { useState } from "react";

const DailySellProduct = ({
  deal,
  img,
  hover,
  cat,
  name,
  star,
  rating,
  company,
  realPrice,
  price,
}) => {
  let badgeStyle = "";
  switch (deal?.toLowerCase()) {
    case "hot":
      badgeStyle = "bg-[#F74B81] ";
      break;
    case "sale":
      badgeStyle = "bg-[#F74B81] ";
      break;
    case "new":
      badgeStyle = "bg-[#67BCEE]";
      break;
    default:
      badgeStyle = "bg-[#F59758]";
  }

  return (
    <div className="dailyProduct mt-2 w-full h-[90vw] group  shadow-md rounded-lg border-1 border-zinc-200 relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-100" >
      <div>
      
      {deal && (
        <div
          className={`absolute top-[-3px] left-[-8px] px-6 py-2 rounded-br-[19px] z-80 text-sm font-semibold ${badgeStyle} text-white`}
        >
          {deal}
        </div>
      )}
      <div className="w-full  flex items-center justify-center relative cursor-pointer">
        <img
          src={img}
          alt="Main Products Image"
          className="w-[70%] dailyImage opacity-[1] transtion-all  duration-200 group-hover:opacity-0"
        />
        <img
          src={hover}
          alt="background Hover Image"
          className="w-[70%] dailyImage absolute opacity-0 group-hover:scale-[1.1] transtion-all duration-200 group-hover:opacity-100"
        />
        <div className="absolute z-[100] hidden group-hover:flex gap-3 cursor-default bg-white px-2 py-1 rounded-md text-[#3BB77E] text-lg">
          {/* Icon with tooltip */}
          <div className="relative group">
            <i className="ri-heart-line peer px-2 border-r border-[#3BB77E] cursor-pointer"></i>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#3BB77E] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#3BB77E]">
              Wishlist
            </span>
          </div>

          <div className="relative group">
            <i className="ri-eye-line px-2 border-r border-[#3BB77E] cursor-pointer peer"></i>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#3BB77E] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#3BB77E]">
              Quick View
            </span>
          </div>

          <div className="relative group">
            <i className="ri-share-forward-line px-2 cursor-pointer peer"></i>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#3BB77E] text-white text-xs px-2 py-1 rounded-md whitespace-nowrap hidden peer-hover:block after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-t-[#3BB77E]">
              Share
            </span>
          </div>
        </div>
      </div>
      <div className="p-2 px-4 relative ">
        <h6 className="text-zinc-400 font-semibold text-sm">{cat}</h6>
        <h4 className="text-[1.15rem] font-semibold hover:text-[#3BB77E] cursor-pointer">
          {name}
        </h4>

        {/* grey star background */}
        <div className="relative flex items-center">
          <div className="text-gray-300">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </div>

          {/* Yellow Stars Overlay */}
          <div
            className="absolute top-0 left-0 overflow-hidden text-yellow-400"
            style={{ width: `${star}%` }}
          >
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
          </div>
          <h5 className="text-zinc-500 text-sm ml-2">{rating}</h5>
        </div>
        <h5 className="text-sm">
          By <span className="text-[#3BB77E] cursor-pointer">{company}</span>
        </h5>
      </div>
      <div className="flex flex-col px-4 mt-5 items-start ">
        <h4 className="text-[#3BB77E] text-xl font-bold">${realPrice}</h4>
        <h5 className="font-semibold text-md text-zinc-500 line-through">
          ${price}
        </h5>
      </div>
      </div>
        <div className="bg-[#3BB77E] dailyAddButton flex gap-2 text-white px-3 py-1 rounded-md cursor-pointer hover:translate-y-[-5px] transition-all duration-200 hover:bg-[#3BB77E] hover:text-white  mx-2 mb-2">
            <i className="ri-shopping-cart-2-line "></i>
            <h6>Add to Cart</h6>
        </div>
    </div>
  );
};

export default DailySellProduct;