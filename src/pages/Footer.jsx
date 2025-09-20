import React, { useEffect, useRef } from 'react'
import logo from '../assets/HomePageAssets/logo.svg'
import appStore from '../assets/HomePageAssets/app-store.jpg'
import playStore from '../assets/HomePageAssets/google-play.jpg'
import payment from '../assets/HomePageAssets/payment-method.png'
import FooterCompo from '../components/HomePageComponent/FooterCompo'
import call from '../assets/HomePageAssets/phone-call.svg'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Footer = () => {

    let block1 = useRef();
    let block2 = useRef();
    let block3 = useRef();
    let block4 = useRef();
    let block5 = useRef();
    let block6 = useRef();
    let last = useRef();
    let mainContainer = useRef();

    
    useEffect(()=>{
        let blocks = [block1.current, block2.current, block3.current, block4.current, block5.current, block6.current]

        const ctx = gsap.context(()=>{
            let tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: mainContainer.current,
                        start: "-50% top",
                        // markers: true,
                    }
                    });
    
            blocks.forEach((block, i)=>{
                tl.from(block,{
                    y: 100,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                },'a')
            })
    
            tl.from(last.current,{
                opacity: 0,
            })

        },mainContainer.current)

        return ()=> ctx.revert();
    },[])

  return (
    <div ref={mainContainer} className='px-4 lg:px-6 mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 '>
            <div ref={block1} className='w-[60%] lg:w-[230px]'>
                <img className='w-[10.5rem] ' src={logo} alt='Logo Image' />       
                    <ul className='flex flex-col gap-1'>
                        <li className='text-lg mt-2'>Awesome grocery store website template</li>
                        <li className='mt-2'><i className="text-[#3BB77E] mr-2 text-lg ri-map-pin-line"></i> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-customer-service-line"></i>+92 3283673707</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-share-forward-line"></i>khanowaiszai@gmail.com</li>
                        <li><i className="text-[#3BB77E] mr-2 text-lg ri-timer-line"></i>10:00 - 18:00, Mon-Sat</li>
                    </ul>
            </div>
            <div ref={block2} className='block1'>
                <h4 className='text-2xl font-semibold'>Company</h4>
                <FooterCompo item1="about us" item2="delivery information" item3="privacy policy" item4="terms & condition" item5="support center" item6="careers" item7="contact us"/> 
            </div>
            <div ref={block3} className='block2'>
                <h4 className='text-2xl font-semibold'>Account</h4>
                <FooterCompo item1="sign in" item2=" view cart" item3="my wishlist" item4="track my order" item5="help ticket" item6="shipping details" item7="compare products"/> 
            </div>
            <div ref={block4} className='block3'>
                <h4 className='text-2xl font-semibold'>Corporate</h4>
                <FooterCompo item1="become a vendor" item2="amiliate program" item3="promotions" item4="accessibility" item5="our supplies" item6="farm careers" item7="farm business"/> 
            </div>
            <div ref={block5} className='block4'>
                <h4 className='text-2xl font-semibold'>Popular</h4>
                <FooterCompo item1="milk & flavoured milk" item2="butter and margarine" item3=" eggs susbstitute" item4="marmadeles" item5="sour cream and dips" item6="tea & konbucha" item7="cheese" /> 
            </div>
            <div ref={block6} className='block5 flex flex-col gap-2'>
                <h4 className='text-2xl font-semibold'>Install App</h4>
                <h5 className='mt-2'>From app store to Google Play</h5>
                <div className='mt-4 flex flex-col gap-2'>
                    <img src={playStore} alt="Google Store"  className='w-35 hover:translate-y-[-5px] transition-all duration-200 cursor-pointer'/>
                    <img  src={appStore} className='w-35 hover:translate-y-[-5px] transition-all duration-200 cursor-pointer' alt="App Store" />
                </div>
                <h5>Secured Payment Gateways</h5>
                <img src={payment} alt="Payment Method" className='w-48'/>
            </div>
        </div>
        <div ref={last} className='mt-8 py-4 border-t-[1px] border-[#3BB77E] flex justify-between lg:items-center'>
            <div>
                <h5 className='w-[70%] text-zinc-400 text-sm'>&copy; 2025, <span className='text-[#3BB77E]'>Nest</span> - HTMl Ecommerce Template All Rights reserved</h5>
            </div>
            <div className='hidden lg:flex lg:flex-col'>
                <div className='flex  items-center gap-2'>
                    <img src={call} alt='Call Icon' className='w-7'/>
                    <div >
                        <h5 className='text-[#3BB77E] font-bold text-xl'>+92 328-3673707</h5>
                        <h6 className='text-zinc-500 text-sm'>Working 24/7</h6>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={call} alt="Call Icon" className='w-7'/>
                    <div >
                        <h5  className='text-[#3BB77E] font-bold text-xl'>+92 318-5598060</h5>
                        <h6 className='text-zinc-500 text-sm'>Customer Support 24 Hours</h6>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:flex-col'>
                <div className='flex items-center  gap-2'>
                    <h5 className='font-semibold'>Follow Us</h5>
                    <ul className='flex gap-1'>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-facebook-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-instagram-line"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-twitter-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-github-fill"></i></li>
                        <li className='w-6 h-6 cursor-pointer bg-[#3BB77E] rounded-full flex items-center justify-center text-white'><i className="ri-youtube-fill"></i></li>
                    </ul>
                </div>

                <p className='text-zinc-400 text-sm'>Up to 15% discount on your first subscribe</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
