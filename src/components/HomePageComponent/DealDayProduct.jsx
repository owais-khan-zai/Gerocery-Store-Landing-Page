import React, { useEffect, useRef, useState } from "react";

const DealDayProduct = React.forwardRef(({
  img,
  name,
  star,
  rating,
  company,
  realPrice,
  price,
  days
}, ref) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();  // yaha sy hamay abhi ki date milygi like 13 july 2025
    targetDate.setDate(targetDate.getDate() + Number(days)); // target date mn set kr rhy hain day jysy get date() is sy date part milta hy 13 jysy ku os mn hum props wlay days ko mila rhy hain jysy 13 + 440

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now; //yaha hamay difference mil rha hy miliseconds mn difference = 86400000 milliseconds (1 day)

      //     1000 ms → 1 second
      // 1000 * 60 → 1 minute
      // 1000 * 60 * 60 → 1 hour
      // 1000 * 60 * 60 * 24 → 1 day

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / (1000 * 60)) % 60);
      const s = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    }, 1000);

    return () => clearInterval(timer);
  }, [days]);

  return (
    <div ref={ref} className="relative h-[32rem] group lg:h-[32rem] group sm:w-[29rem] md:w-[97%]  ">
      <div className="w-full">
        <img src={img} alt="Daily Best Product" className="rounded-xl w-full h-[25rem] md:h-[24rem]  object-cover" />
      </div>

      {/* ⏱️ Countdown Overlay Box */}
      <div className="countdown group-hover:translate-y-[-7px] transition-all duration-200 absolute top-[38%] md:top-[43%] left-1/2 translate-x-[-50%] flex gap-2 z-10 w-[70%] justify-between">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Min", value: timeLeft.minutes },
          { label: "Sec", value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center w-14 h-14 rounded-md bg-white bg-opacity-60 text-black text-xs"
          >
            <span className="text-lg font-bold text-[#3BB77E]">{item.value < 10 ? `0${item.value}` : item.value}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {/* 🧾 Product Details White Box */}
      <div className="bg-white shadow-md group-hover:shadow-lg group-hover:translate-y-[-7px] transition-all duration-200 absolute bottom-[9%] w-[95%] left-1/2 translate-x-[-50%] px-6 py-4 rounded-xl z-20">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="relative flex items-center">
          <div className="text-gray-300">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill"></i>
            ))}
          </div>
          <div
            className="absolute top-0 left-0 overflow-hidden text-yellow-400"
            style={{ width: `${star}%` }}
          >
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill"></i>
            ))}
          </div>

          <h5 className="text-zinc-500 text-sm ml-2">{rating}</h5>
        </div>
        <h6 className="text-zinc-400 text-sm">
          By <span className="text-[#3BB77E] capitalize">{company}</span>
        </h6>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-2">
            <h3 className="text-[#3BB77E] text-xl font-bold">${realPrice}</h3>
            <h4 className="text-sm text-zinc-400 line-through">${price}</h4>
          </div>
          <div className="bg-[#3BB77E] dailyAddButton flex gap-2 text-white px-3 py-1 rounded-md cursor-pointer hover:translate-y-[-5px] transition-all duration-200 hover:bg-[#3BB77E] hover:text-white  mx-2 mb-2">
            <i className="ri-shopping-cart-2-line "></i>
            <h6>Add to Cart</h6>
          </div>
        </div>
      </div>
    </div>
  );
});

export default DealDayProduct;
