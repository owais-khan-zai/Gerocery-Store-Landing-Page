import React, { useEffect, useRef } from 'react'
import logo from '../assets/HomePageAssets/logo.svg'
import wish from '../assets/HomePageAssets/icon-heart.svg'
import cart from '../assets/HomePageAssets/icon-cart.svg'
import compare from '../assets/HomePageAssets/icon-compare.svg'
import user from '../assets/HomePageAssets/icon-user.svg'
import menuImg from '../assets/HomePageAssets/banner-menu.png'
import headphone from '../assets/HomePageAssets/icon-headphone.svg'
import { useState } from 'react'
import flag1 from '../assets/HomePageAssets/flag-dt.png'
import flag2 from '../assets/HomePageAssets/flag-fr.png'
import flag3 from '../assets/HomePageAssets/flag-ru.png'
import  menuBanner from '../assets/HomePageAssets/banner-menu.png'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import cat1 from '../assets/HomePageAssets/category-1.svg'
import cat2 from '../assets/HomePageAssets/category-2.svg'
import cat3 from '../assets/HomePageAssets/category-3.svg'
import cat4 from '../assets/HomePageAssets/category-4.svg'
import cat5 from '../assets/HomePageAssets/category-5.svg'
import cat6 from '../assets/HomePageAssets/category-6.svg'
import cat7 from '../assets/HomePageAssets/category-7.svg'
import cat8 from '../assets/HomePageAssets/category-8.svg'
import cat9 from '../assets/HomePageAssets/category-9.svg'
import cat10 from '../assets/HomePageAssets/category-10.svg'
import NavbarCategory from './NavbarCategory'

const Navbar = () => {
  const list = useRef();
  

  const [Switch , setSwitch] = useState(false)
  const listToggle = () => {
  let SwitchBtn = !Switch;
    setSwitch(SwitchBtn);
    if(SwitchBtn){
      list.current.style.display = "flex";
    }
    else{
      list.current.style.display = "none";
    }
  }
// all catoegories ccode 

let animate = useRef();

const messages = [
  "100% secure delivery without any problem",
  "Supper value deals | Save more with coupons",
  "More valuable than any other grocery store"
]
const index = useRef(0);
  useEffect(()=>{
    const animateDiv = animate.current;

    const interval = setInterval(()=>{
      index.current++;
      animateDiv.style.transition = "all 0.5s ease-in-out"
      animateDiv.style.transform = `translateY(-${index.current*24}px)`;

      if(index.current === messages.length){
        setTimeout(()=>{
            animateDiv.style.transition = "none";
            animateDiv.style.transform = "translateY(0)";
            index.current = 0;
        },500)
      }

    },1000)

    return () => clearInterval(interval); 
  },[])

  // vertical loop animation 

  let flagList1 = useRef();
  let flagList2 = useRef();


    const enter1 = ()=>{
      gsap.to(flagList1.current.querySelector("ul"), {
        display: "flex",
        translateY: "0px", 
        opacity: 1,
        duration: 0.2,
      })
    }
    const leave1 = () =>{
      gsap.to(flagList1.current.querySelector("ul"), {
        display: "none",
        translateY: "20px", 
        opacity: 0,
        duration: 0.2,
      })
    }

    const enter2 = ()=>{
      gsap.to(flagList2.current.querySelector("ul"), {
        display: "flex",
        translateY: "0px", 
        opacity: 1,
        duration: 0.2,
      })
    }
    const leave2 = () =>{
      gsap.to(flagList2.current.querySelector("ul"), {
        display: "none",
        translateY: "20px", 
        opacity: 0,
        duration: 0.2,
      })
    }
//  upper ka code flag kko dekhanay ky lie hy 

    let home = useRef() 
// this is the home list 

    let shop1 = useRef(); 
    let shop2 = useRef(); 
    let shop3 = useRef(); 
// this is shop list  
    let vendor = useRef();
// this is vendor list
    let menuList = useRef()
// this is the menu list
    let blogList1 = useRef()
    let blogList2 = useRef()
// this is the blog list
    let pageList = useRef();
// this is the page list
    const EnterHandler = (ele) =>{
       gsap.to(ele, {
          display: "flex",
          opacity: 1,
          translateY: "-5px",
          duration: 0.2, 
      })
    }

    const LeaveHandler = (ele) =>{
       gsap.to(ele, {
          display: "none",
          opacity: 0,
          translateY: "5px",
          duration: 0.2,
      })
    }
    // Drop Down Category Code Start Here

    let dropDown = useRef();

    const [Drop , setDrop] = useState(false);

    const clickDrop = () =>{
      let dropTrue = !Drop;
      setDrop(dropTrue);

      if(dropTrue){
        dropDown.current.style.display = "flex";
      }
      else{
        dropDown.current.style.display = "none";
      }
    }


    // menu open and close function starts here
      const mobileMenu = useRef();
      const backBlack = useRef();
      const menuParentContainer = useRef();
      const allItems = [];

      
    const menuOpenHandler = () =>{
      menuParentContainer.current.style.display = "inline";
      backBlack.current.style.display = "inline";
      gsap.to(mobileMenu.current,{
        left: "0%",
      })
    } 
    const menuCloseHandler = () =>{
      gsap.to(mobileMenu.current,{
        left: "-100%",
      })
      setTimeout(()=>{
        menuParentContainer.current.style.display = "none";
        backBlack.current.style.display = "none";
      },300)
    } 

    const [OpenItem, setOpenItem] = useState(null);

    const toggleItem = (item) =>{
      const ItemText = item.currentTarget.querySelector('span').innerText.toLowerCase()
      
      setOpenItem((previousVal)=>{ return previousVal == ItemText ? null : ItemText });
      // kisi bhi use state  ko set krty hue callback dy do agar os mn kuch bhi name dy kr agaya use kro to wo previous state ki value ko dyta hy jysy setBTn((prev) => { console.log(prev) })
    }

    const [ToggleBtn, setToggleBtn] = useState(false);


    const toggleMiniItem = (item) =>{
      const mainToggleBtn = !ToggleBtn;
      allItems.push(item.currentTarget)
      console.log(allItems)
      // console.log(allItems)
      setToggleBtn(mainToggleBtn)

      if(mainToggleBtn) {
         item.currentTarget.style.height = "fit-content"
      }

      else{
        item.currentTarget.style.height = "22px"
      }

    }    
    
    // menu open and close function end heres's

    // Nichy ka code navbar ki animation ka code hy 
    const fixedNavbar = useRef();
    const topHeadLine = useRef();
    useEffect(() => {
    const el = fixedNavbar.current;

    ScrollTrigger.create({
      trigger: el,
      start: "bottom 4%",
      onEnter: () => {
        el.classList.add("fixed");
        if(window.innerWidth > 1028){
          topHeadLine.current.style.display = 'none'
        }
        gsap.fromTo(
          el,
          { top: "0%", opacity: 0 },
          { top: "0%", opacity: 1, duration: 0.6, ease: "power2.out" }
        );
      },
      onLeaveBack: () => {
        el.classList.remove("fixed");
        if(window.innerWidth > 1028){
          topHeadLine.current.style.display = 'flex'
        }
      },
    });
  }, []);
  return (
    <div ref={fixedNavbar} className='w-full z-999 bg-white  top-0'>
      {/* lg par visible hony wali top line */}
      <div ref={topHeadLine} className='hidden lg:flex px-6 justify-between gap-2 mt-2'>
          <div className='flex text-[0.9rem] text-zinc-500 gap-4 h-fit'>
            <h6 className='capitalize cursor-pointer border-r-1 pr-2'>about us</h6>
            <h6 className='capitalize cursor-pointer border-r-1 pr-2'>my account</h6>
            <h6 className='capitalize cursor-pointer border-r-1 pr-2'>wishlist</h6>
            <h6 className='capitalize cursor-pointer'>order tracking</h6>
          </div>
          <div className='text-s h-[24px] flex flex-col gap-1 overflow-hidden whitespace-nowrap w-[370px]  text-center'>
            <div className='flex flex-col w-full h-full' ref={animate}>
              {messages.map((m, ind)=>{
                return <h6 className='opacity-[0.4] whitespace-nowrap'  key={ind} >{m}</h6>
              })}
              <h6 className='opacity-[0.4] whitespace-nowrap'>{messages[0]}</h6>
            </div>
          </div>
          <div className='flex text-[0.9rem] text-zinc-500 gap-4'>
            <h6 className='cursor-pointer border-r-1 pr-2'>Need help? Call Us:</h6>
            <h6 className='cursor-pointer pr-2 text-[#3BB77E] font-bold'>+1800 900</h6>
            <h6 onMouseEnter={enter1} onMouseLeave={leave1} className='border-r-1 border-l-1 pl-2 pr-2 relative' ref={flagList1}><span className='cursor-pointer '>English<i className="ri-arrow-down-s-line"></i></span>
              <ul className=' flex-col gap-2 absolute top-[100%] left-0 z-99 bg-white p-2 w-26 translate-y-[20px] hidden opacity-[0]'>
                <li className='flex gap-2 text-[0.8rem] items-center  cursor-pointer'><img src={flag1} alt='FLag Image' className='h-3'/> <h6>Germany</h6></li>
                <li className='flex gap-2 text-[0.8rem] items-center cursor-pointer'><img src={flag2} alt='FLag Image' className='h-4'/> <h6>France</h6></li>
                <li className='flex gap-2 text-[0.8rem] items-center cursor-pointer'><img src={flag3} alt='FLag Image' className='h-4'/> <h6>Russia</h6></li>
              </ul>
            </h6>
            <h6 onMouseEnter={enter2} onMouseLeave={leave2} className='relative' ref={flagList2}><span className='cursor-pointer'>USD<i className="ri-arrow-down-s-line"></i></span>
              <ul className=' flex-col gap-2 absolute top-[100%] left-[-70%] z-99 bg-white p-2 w-26 translate-y-[20px] hidden opacity-[0]'>
                <li className='flex gap-2 text-[0.8rem] items-center  cursor-pointer'><img src={flag1} alt='FLag Image' className='h-3'/> <h6>Germany</h6></li>
                <li className='flex gap-2 text-[0.8rem] items-center cursor-pointer'><img src={flag2} alt='FLag Image' className='h-4'/> <h6>France</h6></li>
                <li className='flex gap-2 text-[0.8rem] items-center cursor-pointer'><img src={flag3} alt='FLag Image' className='h-4'/> <h6>Russia</h6></li>
              </ul>
            </h6>
          </div>
      </div>
      {/*  md par visible hony wali top line  */}
      <div className='hidden md:flex lg:hidden w-full bg-[#3BB77E] text-white justify-center items-center py-1'>
          <h4 className='text-md'>Grand opening up to 15% off all items. Onlye 3 days left</h4>
      </div>
      <div className='flex items-center justify-between py-4  w-full px-4 shadow-md lg:hidden'>
        <i onClick={menuOpenHandler} className="ri-menu-line text-[1.6rem] cursor-pointer"></i>
        <img src={logo} alt='Logo' className='w-[9.5em] ml-8 cursor-pointer'/>
        <div className='flex gap-4 '>
            <div className='relative cursor-pointer'>
                <img className='min-w-[1.65rem]' src={wish} alt='WishList'/>
                <div className='bg-[#3BB77E] absolute top-[-5px] right-[-8px] w-5 h-5 rounded-full text-white flex justify-center items-center'>
                    <h6 className='text-[0.8rem]'>4</h6>
                </div>
            </div>
            <div className='relative cursor-pointer'>
                <img className='min-w-[1.65rem]' src={cart} alt='Cart Icon'/>
                <div className='bg-[#3BB77E] absolute top-[-5px] right-[-8px] w-5 h-5 rounded-full text-white flex justify-center items-center'>
                    <h6 className='text-[0.8rem]'>4</h6>
                </div>
            </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div ref={menuParentContainer} className='fixed top-0 left-0  w-full  h-full z-99 hidden'>
          <div ref={backBlack} className='absolute top-0 left-0 w-full h-full opacity-40 hidden bg-black'></div>
          <div ref={mobileMenu} className=' absolute top-0 left-[-100%] bg-white w-[21rem] h-full p-2 py-3'>
              <div className='flex items-center justify-between px-3'>
                  <img src={logo} alt='Website Logo' className='w-35 cursor-pointer'/>
                  <div className='w-6 h-6 flex items-center justify-center cursor-pointer rounded-full bg-[#DEF9EC]'>
                    <i onClick={menuCloseHandler} className="ri-close-line text-zinc-500"></i>
                  </div>
              </div>
              <div className='border-t-1 border-zinc-200 w-full mt-5 flex flex-col justify-center items-center'>
                <div className='scrolling w-[18rem] pr-2  h-[88vh] overflow-y-scroll text-base '>
                  <div className='mt-5 w-full relative'>
                    <input type="text" placeholder='Search for items...' className='outline-none bg-[#F2F3F4] text-sm px-4 py-3 text-black w-full rounded-md '/>
                    <i className="ri-search-line absolute top-1/2 right-2 translate-y-[-50%]"></i>
                  </div>
                  <ul className='mt-4 gap-2 flex flex-col'>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'home' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200  transition-all duration-800`}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer' ><span className='font-semibold'>Home</span><i className="ri-arrow-down-s-line"></i></div>
                      <ul className='flex flex-col gap-1 ml-2 my-2'>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 1</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 2</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 3</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 4</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 5</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Home 6</li>
                      </ul>
                    </li>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'shop' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200  transition-all duration-800`}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Shop</span><i className="ri-arrow-down-s-line"></i></div>
                      <ul className='flex flex-col gap-1 ml-2 my-2 '>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Grid - Right Sidebar</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Grid - Left Sidebar</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop List - Right Sidebar</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop List - Left Sidebar</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - wide</li>
                        <li onClick={toggleMiniItem} className='relative w-full overflow-hidden h-[22px] '><div className='w-full flex justify-between cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><span>Single Product </span><i className="ri-arrow-down-s-line "></i></div>
                          <ul className='flex flex-col gap-1 ml-2 my-2 '>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Product - Right Sidebar</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Product - Left Sidebar</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Product - No Sidebar</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Product - Vendor Infor</li>
                          </ul>
                        </li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - Filter</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - Wishlist</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - Cart</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - Checkout</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop - Compare</li>
                        <li onClick={toggleMiniItem} className='relative w-full overflow-hidden h-[22px] '><div className='w-full flex justify-between cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><span>Shop Invoice</span><i className="ri-arrow-down-s-line "></i></div>
                          <ul className='flex flex-col gap-1 ml-2 my-2 '>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 1</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 2</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 3</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 4</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 5</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Shop Invoice 6</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'vendors' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200 `}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Vendors</span><i className="ri-arrow-down-s-line"></i></div>
                      <ul  className='flex flex-col gap-1 ml-2 my-2 '>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors Grid</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors List</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors Details 01</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors Details 02</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors Details 03</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Vendors Guide</li>
                      </ul>
                    </li>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'mega menu' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200 `}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Mega Menu</span><i className="ri-arrow-down-s-line"></i></div>
                        <ul className='flex flex-col gap-1 ml-2 my-2 '>
                           <li onClick={toggleMiniItem} className='relative w-full overflow-hidden h-[20px] '><div className='w-full flex justify-between cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><span>Women's Fashion </span><i className="ri-arrow-down-s-line "></i></div>
                            <ul className='flex flex-col gap-1 ml-2 my-2 '>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Dresses</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Bluses & Shirts</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Hoodies & SweatShirts</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Women's Sets</li>
                            </ul>
                          </li>
                         <li onClick={toggleMiniItem} className='relative w-full overflow-hidden h-[22px] '><div className='w-full flex justify-between cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><span>Men's Fashion </span><i className="ri-arrow-down-s-line "></i></div>
                              <ul className='flex flex-col gap-1 ml-2 my-2 '>
                                <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Jackets</li>
                                <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Casual Faux Leather</li>
                                <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Genuine Leather</li>
                              </ul>
                          </li>
                          <li onClick={toggleMiniItem} className='relative w-full overflow-hidden h-[22px]'><div className='w-full flex justify-between  cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><span>Technology </span><i className="ri-arrow-down-s-line "></i></div>
                            <ul className='flex flex-col gap-1 ml-2 my-2 '>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Gaming Laptops</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Ultraslim Laptops</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Tablets</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Laptop Accessories</li>
                              <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Tablet Accessories</li>
                            </ul>
                          </li>
                        </ul>
                    </li>
                   <li className={`relative w-full overflow-hidden ${OpenItem == 'blogs' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200 `}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Blogs</span><i className="ri-arrow-down-s-line"></i></div>
                      <ul className='flex flex-col gap-1 ml-2 my-2 '>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Blog Category Grid</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Blog Category List</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Blog Category Big</li>
                        <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Blog Category Wide</li>
                        <li className='relative w-full overflow-hidden h-[22px] cursor-pointer hover:text-[#3BB77E] transition-all duration-200 '><div className='w-full flex justify-between'><span >Blogs </span><i className="ri-arrow-down-s-line "></i></div>
                          <ul className='flex flex-col gap-1 ml-2 my-2 '>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Left Sidebar</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Right Sidebar</li>
                            <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>No Sidebar</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'pages' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200 `}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Pages</span><i className="ri-arrow-down-s-line"></i></div>
                        <ul className='flex flex-col gap-1 ml-2 my-2 '>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>About us</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Contact</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>My Account</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Login</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Rregister</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Forgot Password</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Reset Password</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Purchase Guide</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Privacy Policy</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Terms Of Services</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>404 Page</li>
                        </ul>
                    </li>
                    <li className={`relative w-full overflow-hidden ${OpenItem == 'languages' ? 'h-fit' : 'h-[30px]'} border-b-1 border-zinc-200 `}><div onClick={toggleItem} className='flex justify-between items-center  cursor-pointer'><span className='font-semibold'>Languages</span><i className="ri-arrow-down-s-line"></i></div>
                        <ul className='flex flex-col gap-1 ml-2 my-2 '>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>English</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>French</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>German</li>
                          <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'>Spanish</li>
                        </ul>
                    </li>
                  </ul>
                  <ul className='mt-8 border-1 border-zinc-200 p-5 flex flex-col gap-1 justify-center'>
                    <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><i className="ri-map-pin-line text-[#3BB77E]"></i><span className='ml-1 text-sm'>Online Work</span></li>
                    <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><i class="ri-user-3-line text-[#3BB77E]"></i><span className='ml-1 text-sm'>Login In / Sign Up</span></li>
                    <li className = 'cursor-pointer hover:text-[#3BB77E] transition-all duration-200'><i className="ri-customer-service-line text-[#3BB77E]"></i><span className='ml-1 text-sm'>+92 328-3673707</span></li>
                  </ul>
                    <div className='mt-8'>
                      <h5 className='font-semibold text-lg'>Follow Us</h5>
                      <ul className='flex gap-2 mt-2'>
                                  <li className='w-7 h-7 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-facebook-fill"></i></li>
                                  <li className='w-7 h-7 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-instagram-line"></i></li>
                                  <li className='w-7 h-7 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-twitter-fill"></i></li>
                                  <li className='w-7 h-7 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-github-fill"></i></li>
                                  <li className='w-7 h-7 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-youtube-fill"></i></li>
                      </ul>
                        <h6 className='mt-7 text-zinc-500 text-sm mb-6'>Copyright 2025 &copy; Nest. All rights reserved. Powered by <span className='text-[#3BB77E]'>OwaisTheme</span></h6>
                    </div>  
              </div>
              </div>
          </div>
      </div>
      {/* upper wala code mobile devices ky lie hy  */}

      {/* nichy wala code desktop devices ky lie  */}
      <div className=' items-center justify-between py-6  w-full px-6 border-b-1 border-zinc-200 hidden lg:flex '>
        <img src={logo} alt='Logo' className='w-[9.5em] cursor-pointer mr-2'/>
        <div className='flex gap-4 border-[1px] border-[#3BB77E] rounded-sm px-3 h-[3rem] w-[48%] xl:w-[55%]'>
          <div className='flex items-center  gap-4 relative w-full'>
            <div>
                <div onClick={listToggle} className='flex gap-2 items-center cursor-pointer border-r-1 px-2 '> 
                  <h6 className='text-[0.9rem] font-semibold whitespace-nowrap'>All Categories</h6>
                  <i className="text-[0.9rem] font-semibold mt-[2px] ri-arrow-down-s-line"></i>
                </div>
              <div  ref={list}  className='text-sm absolute top-[100%] z-20 left-[-3%] rounded-lg bg-white border-1 border-zinc-300 px-4 py-3 w-[15rem] hidden flex-col justify-center max-h-[20rem] overflow-hidden '>
                <input type='text' className='border-1 border-[#3BB77E] rounded-sm py-2 px-4 outline-none'/>
                <ul className=' flex flex-col gap-1 mt-3 max-h-[13rem] overflow-auto '>
                  <li className='py-2 bg-zinc-200 px-1 cursor-pointer '>All Categories</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer'>Milks and Dairies</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Wines & Alcohol</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Clothing & Beauty</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Pet Foods & Toy</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Fast Food</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Baking Material</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Vegetables</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Fresh Seafood</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Noddles & Rice</li>
                  <li className='py-2 hover:bg-[#9DDBC9] px-1 cursor-pointer '>Ice cream</li>
                </ul>
              </div>
            </div>
            <input className='w-full outline-none ' type='text' placeholder='Search Items...'/>
            <i className="text-lg ri-search-line cursor-pointer"></i>
          </div>
        </div>
        <div className='flex gap-4 '>
              <div className='flex gap-3 ml-4 cursor-pointer'>
                <div className='relative cursor-pointer'>
                    <img className='min-w-[1.65rem]' src={compare} alt='WishList'/>
                    <div className='bg-[#3BB77E] absolute top-[-5px] right-[-8px] w-5 h-5 rounded-full text-white flex justify-center items-center'>
                        <h6 className='text-[0.8rem]'>3</h6>
                    </div>
                </div>
                    <h5>Compare</h5>
              </div>
              <div className='flex gap-3 cursor-pointer'>
                <div className='relative cursor-pointer'>
                    <img className='min-w-[1.65rem]' src={wish} alt='WishList'/>
                    <div className='bg-[#3BB77E] absolute top-[-5px] right-[-8px] w-5 h-5 rounded-full text-white flex justify-center items-center'>
                        <h6 className='text-[0.8rem]'>4</h6>
                    </div>
                </div>
                    <h5>Wishlist</h5>
              </div>
              <div className='flex gap-3 cursor-pointer'>
                <div className='relative cursor-pointer'>
                    <img className='min-w-[1.65rem]' src={cart} alt='Cart Icon'/>
                    <div className='bg-[#3BB77E] absolute top-[-5px] right-[-8px] w-5 h-5 rounded-full text-white flex justify-center items-center'>
                        <h6 className='text-[0.8rem]'>4</h6>
                    </div>
                </div>
                <h5>Cart</h5>
              </div>
              <div className='flex gap-2 cursor-pointer'>
                <div className='relative cursor-pointer'>
                    <img className='min-w-[1.65rem]' src={user} alt='Cart Icon'/>
                </div>
                <h5>Account</h5>
              </div>
        </div>
      </div>
        <div className='hidden lg:flex w-full border-b-1 border-zinc-200 h-[7.4rem] xl:h-[5rem] items-center py-6  px-6 justify-between'>
          <div onClick={clickDrop} className='bg-[#3BB77E] cursor-pointer relative w-[18vw] py-2 px-2 text-center text-white font-semibold text-md rounded-md xl:flex xl:gap-2 xl:justify-center  xl:w-[15rem]'>
            <i className="ri-box-3-line"></i>
            <h5>All Browser Categories <i className="ri-arrow-down-s-line"></i></h5>
            <div ref={dropDown} className='absolute top-[118%] cursor-default hidden flex-col gap-2 left-0 w-[27rem] p-4 rounded-lg shadow-md z-99 bg-white text-black'>
                <div className='cat1 flex gap-2 cursor-pointer'>
                  <NavbarCategory img={cat1} head="Milks and Dairies" />
                  <NavbarCategory img={cat2} head="Wines & Drinks" />
                </div>
                <div className='cat2 flex gap-2 cursor-pointer'>
                  <NavbarCategory img={cat3} head="Clothing & beauty" />
                  <NavbarCategory img={cat4} head="fresh seadfood" />
                </div>
                <div className='cat3 flex gap-2 cursor-pointer'>
                  <NavbarCategory img={cat5} head="pet foods & toy" />
                  <NavbarCategory img={cat6} head="fast food" />
                </div>
                <div className='cat4 flex gap-2 cursor-pointer'>
                  <NavbarCategory img={cat7} head="Baking material" />
                  <NavbarCategory img={cat8} head="vegetables" />
                </div>
                <div className='cat5 flex gap-2 cursor-pointer'>
                  <NavbarCategory img={cat9} head="fresh fuit" />
                  <NavbarCategory img={cat10} head="bread and juice" />
                </div>
              <div className='Show More mx-auto  w-fit cursor-pointer mt-4'>
                    <i className="ri-add-circle-line mr-1 text-[#3BB77E] text-xl inline-block"></i>
                    <h6 className='text-md inline-block'>Show more...</h6>
              </div>
            </div>
          </div>
          <div className='menuOptions w-[60%] h-full'>
            <ul className='flex w-full gap-7 flex-wrap mt-[-5px] xl:mt-0 xl:flex-nowrap h-full items-center justify-center Items'>
              <li className='cursor-pointer font-semibold text-[17px]'><i className="ri-fire-line text-[#3BB77E] "></i>Deals</li>
              <li onMouseEnter={ () => { 
                EnterHandler(home.current)
                }}
                onMouseLeave={ ()=>{
                  LeaveHandler(home.current)
                }}
                className='flex gap-1 text-[#3BB77E] font-semibold text-[17px] relative'><span className='cursor-pointer whitespace-nowrap'>Home <i className="ri-arrow-down-s-line mt-[0.1rem]"></i></span>
                  <div ref={home} className='bg-white shadow-md absolute text-sm translate-y-[5px] z-99 text-zinc-500 top-[125%] left-0  rounded-lg px-8 py-3 pr-10 hidden opacity-0 flex-col gap-3 whitespace-nowrap'> 
                    <h6 className='cursor-pointer'>Home 1</h6>
                    <h6 className='cursor-pointer'>Home 2</h6>
                    <h6 className='cursor-pointer'>Home 3</h6>
                    <h6 className='cursor-pointer'>Home 4</h6>
                    <h6 className='cursor-pointer'>Home 5</h6>
                    <h6 className='cursor-pointer'>Home 6</h6>
                  </div>
                </li>

              <li className='cursor-pointer font-semibold text-[17px]'>About</li>
              <li onMouseEnter={ () => { 
                EnterHandler(shop1.current)
                }}
                onMouseLeave={ ()=>{
                  LeaveHandler(shop1.current)
                }} className='flex gap-1 font-semibold text-[17px] relative '><span className='cursor-pointer whitespace-nowrap'>Shop <i className="ri-arrow-down-s-line mt-[0.1rem]"></i></span>
                  <div ref={shop1} className='hidden absolute flex-col py-3 z-99 w-[220px] whitespace-nowrap rounded-lg bg-white  top-[125%] left-0 shadow-md text-sm text-zinc-500 gap-3'> 
                    <h6 className='capitalize cursor-pointer px-3'>shop grid - right sidebar</h6>
                    <h6 className='capitalize cursor-pointer px-3'>shop grid - left sidebar</h6>
                    <h6 className='capitalize cursor-pointer px-3'>shop list - left sidebar</h6>
                    <h6 className='capitalize cursor-pointer px-3'>shop list - right sidebar</h6>
                    <h6 className='capitalize cursor-pointer px-3'>shop wide</h6>
                    <h6 onMouseEnter={ () => { 
                    EnterHandler(shop2.current)
                    }}
                    onMouseLeave={ ()=>{
                      LeaveHandler(shop2.current)
                    }}
                   className='capitalize w-full'>
                    <div className='flex px-3 justify-between items-center w-full cursor-pointer'><span >shop product</span> <i className="ri-arrow-right-s-line"></i></div>
                      <div ref={shop2} className='opacity-0 absolute left-[100%] top-[22%] hidden flex-col shadow-md p-4 px-6 rounded-tr-lg rounded-br-lg bg-white gap-3'>
                        <h6 className='cursor-pointer'>Product - right sidebar</h6>
                        <h6 className='cursor-pointer'>Product - left sidebar</h6>
                        <h6 className='cursor-pointer'>Product - no sidebar</h6>
                        <h6 className='cursor-pointer'>Product - vendor info</h6>
                      </div>
                    </h6>
                    <h6 className='capitalize px-3'>shop - filter</h6>
                    <h6 className='capitalize px-3'>shop - Wishlist</h6>
                    <h6 className='capitalize px-3'>shop - cart</h6>
                    <h6 className='capitalize px-3'>shop - checkout</h6>
                    <h6 className='capitalize px-3'>shop - compare</h6>
                    <h6 onMouseEnter={ () => { 
                    EnterHandler(shop3.current)
                    }}
                    onMouseLeave={ ()=>{
                      LeaveHandler(shop3.current)
                    }}
                   className='capitalize w-full'><div className='flex px-3 justify-between items-center w-full cursor-pointer'><span >shop product</span> <i className="ri-arrow-right-s-line"></i></div>
                      <div ref={shop3} className='absolute left-[100%] opacity-0 bg-white hidden flex-col gap-3 top-[70%] p-4 px-6 rounded-tr-lg rounded-br-lg shadow-md'>
                        <h6 className='capitalize cursor-pointer'> shop invoice 1</h6>
                        <h6 className='capitalize cursor-pointer'> shop invoice 2</h6>
                        <h6 className='capitalize cursor-pointer'> shop invoice 3</h6>
                        <h6 className='capitalize cursor-pointer'> shop invoice 4</h6>
                        <h6 className='capitalize cursor-pointer'> shop invoice 5</h6>
                        <h6 className='capitalize cursor-pointer'> shop invoice 6</h6>
                      </div>
                    </h6>
                  </div>
                </li>
              <li onMouseEnter={()=>{EnterHandler(vendor.current)}} onMouseLeave={()=>{LeaveHandler(vendor.current)}} className='flex gap-1 font-semibold text-[17px] relative'><span className='cursor-pointer whitespace-nowrap'>Vendors <i className="ri-arrow-down-s-line mt-[0.1rem]"></i></span>
                <div ref={vendor} className='hidden absolute flex-col z-99 whitespace-nowrap top-[100%] bg-white p-3 shadow-md w-[170px] rounded-lg text-zinc-500 gap-3 text-sm'>
                  <h6 className='Capitalize cursor-pointer'>Vendors Grid</h6>
                  <h6 className='Capitalize cursor-pointer'>Vendors List</h6>
                  <h6 className='Capitalize cursor-pointer'>Vendor Detail 01</h6>
                  <h6 className='Capitalize cursor-pointer'>vendor detail 02 </h6>
                  <h6 className='Capitalize cursor-pointer'>vendor dashboard</h6>
                  <h6 className='Capitalize cursor-pointer'>vendor guide</h6>
                </div>
              </li>
              <li onMouseEnter={()=>{EnterHandler(menuList.current)}} onMouseLeave={()=>{LeaveHandler(menuList.current)}} className='flex gap-1 whitespace-nowrap  relative font-semibold text-[17px]'><span className='cursor-pointer'>Mega menu <i className="ri-arrow-down-s-line mt-[0.1rem]"></i> </span>
                <div ref={menuList} className='bg-white xl:gap-28 xl:p-8 gap-15 z-99 absolute top-[120%] hidden  left-[-570%] p-4 rounded-lg shadow-md'>
                  <div className='flex flex-col text-sm gap-3 text-zinc-500'>
                    <h4 className='capitalize text-xl text-[#3BB77E] mb-3'>fruits & vegetables</h4>
                    <h6 className='capitalize cursor-pointer'>meat & poultry</h6>
                    <h6 className='capitalize cursor-pointer'>fresh vegetables</h6>
                    <h6 className='capitalize cursor-pointer'>herbs & seasonings</h6>
                    <h6 className='capitalize cursor-pointer'>cuts & sprouts</h6>
                    <h6 className='capitalize cursor-pointer'>exotic fruits & vegetables</h6>
                    <h6 className='capitalize cursor-pointer'>Packaged produce</h6>
                  </div>
                  <div className='flex flex-col gap-3 text-sm text-zinc-500'>
                    <h5 className='text-[#3BB77E] text-xl mb-3'>Breakfast & Dairy</h5>
                    <h6 className='capitalize cursor-pointer '>milk & flavoured milk</h6>
                    <h6 className='capitalize cursor-pointer'>butter and margarine</h6>
                    <h6 className='capitalize cursor-pointer'>eggs substitutes</h6>
                    <h6 className='capitalize cursor-pointer'>marmalades</h6>
                    <h6 className='capitalize cursor-pointer'>sourcream</h6>
                    <h6 className='capitalize cursor-pointer'>cream</h6>
                  </div>
                  <div className='flex flex-col gap-3 text-sm text-zinc-500'>
                    <h5 className='text-[#3BB77E] text-xl mb-3'>Meat & Seafood</h5>
                    <h6 className='capitalize cursor-pointer'>breakfast sausage</h6>
                    <h6 className='capitalize cursor-pointer'>dinner sausage</h6>
                    <h6 className='capitalize cursor-pointer'>chicken</h6>
                    <h6 className='capitalize cursor-pointer'>sliced deli meat</h6>
                    <h6 className='capitalize cursor-pointer'>wild caught fillets</h6>
                    <h6 className='capitalize cursor-pointer'>crab and shellfish</h6>
                  </div>
                  <div className='relative w-[310px] p-4 xl:w-[350px]'>
                      <img src={menuBanner} alt='Banner Image' className='absolute top-0 left-0 z-1'/>
                      <div className='relative z-10'>
                        <div className='flex flex-col absolute top-0 right-0 gap-1 justify-center items-center  bg-[#FFD55A] w-18 rounded-full h-18'><h6 className='leading-none text-xl'>25%</h6> <h6 className='leading-none text-lg'>off</h6></div>
                        <div className='h-full flex flex-col justify-between xl:gap-1'>
                          <h6 className='text-md'>HOT DEALS</h6>
                          <h5 className='text-2xl font-semibold'>Don't miss <br/>Trending</h5>
                          <h3 className='text-[#81B13D] text-2xl'>Save to 50%</h3>
                          <button className='bg-[#29A56C] hover:bg-red-400 w-fit px-3 transition-all duration-200 cursor-pointer py-[0.5rem] mt-2 rounded-full text-white'>Shop now</button>
                        </div>
                      </div>
                  </div>
                </div>
              </li>
              <li onMouseEnter={()=>{EnterHandler(blogList1.current)}} onMouseLeave={()=>{LeaveHandler(blogList1.current)}} className='flex gap-1 relative font-semibold text-[17px]'><span className='cursor-pointer whitespace-nowrap'>Blog <i className="ri-arrow-down-s-line mt-[0.1rem]"></i></span>
                <div ref={blogList1} className='absolute whitespace-nowrap top-[120%] text-zinc-500 text-sm py-3 z-99 shadow-md gap-3 hidden flex-col rounded-lg left-0  bg-white'>
                  <h6 className='capitalize cursor-pointer px-4'>blog category grid</h6>
                  <h6 className='capitalize cursor-pointer px-4'>blog category list</h6>
                  <h6 className='capitalize cursor-pointer px-4'>blog category big</h6>
                  <h6 className='capitalize cursor-pointer px-4'>blog category wide</h6>
                  <h6 onMouseEnter={()=>{EnterHandler(blogList2.current)}} onMouseLeave={()=>{LeaveHandler(blogList2.current)}}  className='px-4 capitalize cursor-pointer'><div className='w-full flex justify-between'><span className='cursor-pointer whitespace-nowrap'>Single post</span><i className="ri-arrow-down-s-line mt-[0.1rem] inline-block rotate-270"></i></div>
                    <div ref={blogList2} className='absolute top-[70%] left-[100%] bg-white rounded-lg shadow-md p-3 px-4 hidden flex-col gap-3'>
                      <h6 className='capitalize cursor-pointer'>left sidebar</h6>
                      <h6 className='capitalize cursor-pointer'>right sidebar</h6>
                      <h6 className='capitalize cursor-pointer'>no sidebar</h6>
                    </div>
                  </h6>
                </div>
              </li>
              <li  onMouseEnter={()=>{EnterHandler(pageList.current)}} onMouseLeave={()=>{LeaveHandler(pageList.current)}} className='flex gap-1 font-semibold text-[17px] relative'><span className='cursor-pointer whitespace-nowrap'>Pages <i className="ri-arrow-down-s-line mt-[0.1rem]"></i></span>
                <div ref={pageList} className='absolute bg-white top-[120%] left-0 rounded-lg z-99 shadow-md whitespace-nowrap hidden flex-col gap-3 text-zinc-500  p-3 text-sm'>
                  <h6 className='capitalize cursor-pointer'>about us</h6>
                  <h6 className='capitalize cursor-pointer'>contact</h6>
                  <h6 className='capitalize cursor-pointer'>my account</h6>
                  <h6 className='capitalize cursor-pointer'>login</h6>
                  <h6 className='capitalize cursor-pointer'>register</h6>
                  <h6 className='capitalize cursor-pointer'>forgot password</h6>
                  <h6 className='capitalize cursor-pointer'>reset password</h6>
                  <h6 className='capitalize cursor-pointer'>Purchase guide</h6>
                  <h6 className='capitalize cursor-pointer'>privacy policy</h6>
                  <h6 className='capitalize cursor-pointer'>terms & conditions</h6>
                  <h6 className='capitalize cursor-pointer'>404 pages</h6>
                </div>
              </li>
              <li className='cursor-pointer font-semibold text-[17px]'>Contact</li>
            </ul>
          </div>
          <div className='w-[15vw] flex  xl:w-[9rem] gap-4 justify-end'>
              <img className='w-[2rem]' src={headphone} alt='Headphone Image'/>
              <div className='text-sm'>
                <h6 className='text-[#3BB77E]'>1900 - 888</h6>
                <h6>24/7 Support</h6>
                <h6>Center </h6>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
