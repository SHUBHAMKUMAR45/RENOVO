import React, { useEffect, useRef } from "react";
import BackgroundImage from '../assests/18.png'
import { AiOutlineMail } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

  const footerRef = useRef(null)
  const footerElem = gsap.utils.selector(footerRef)

  useEffect(()=>{

    gsap.fromTo(
      footerElem('.left-section'),
      {x : '-50%', opacity : 0},
      {x : 0, opacity : '80%', duration : 1.5, scrollTrigger : {
        trigger : footerElem('.left-section'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      footerElem('.middle-section'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5,stagger : 0.15, scrollTrigger : {
        trigger : footerElem('.middle-section'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      footerElem('.right-section'),
      {x : '50%', opacity : 0},
      {x : 0, opacity : '80%', duration : 1.5, scrollTrigger : {
        trigger : footerElem('.right-section'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      footerElem('.endline'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5, scrollTrigger : {
        trigger : footerElem('.endline'),
        start : 'top 90%',
      }}
    )
  })

  return (
    <div ref={footerRef} className='w-screen h-[80vh] relative'>
      <img src={BackgroundImage} className='w-full h-full object-cover absolute' alt="img"/> 
      <div className='left-section w-[30%] h-[25%] absolute top-[20%] left-[5%] flex flex-col justify-between'>
        <h2 className='font-playfair text-white text-[40px]'>Begin a Fresh Journey</h2>
        <p className='text-white font-popins'>Join our newsletter to stay up to date!</p>
        <div className='w-full h-[40%] py-2 flex items-center border-b-2'>
            <AiOutlineMail className='text-white text-[30px]' />
            <input type="text" placeholder='Email Address' className='w-full text-white font-popins px-5 bg-transparent h-full outline-0' />
        </div>
      </div>
      <div className='w-[10%] h-[40%] flex flex-col justify-between absolute right-[40%] top-[20%] text-white font-popins '>
        <h3 className='middle-section font-semibold'>Pages</h3>
        <p className="middle-section ">About US</p>
        <p className="middle-section ">Services</p>
        <p className="middle-section ">How It Works</p>
        <p className="middle-section ">Projects</p>
        <p className="middle-section ">Blog</p>
        <p className="middle-section ">FAQs</p>
      </div>

      <div className='right-section w-[25%] text-right h-[40%] flex flex-col justify-between absolute right-[5%] top-[20%] text-white font-popins '>
        <h3 className='font-medium text-[25px]'>License number </h3>
        <p>NY- 624690</p>
        <p>NJ- 13VH13212400</p>
        <p>FL- CBC1267423</p>
        <p>Westchester Country- WC-37416-H24</p>
        <p>Southampton- L006804</p>
        <p>CT- HIC.0672343</p>
        <div className='w-full h-[50px] flex justify-end items-center text-[25px]'>
        <SlSocialFacebook className='mx-2' />
        <SiInstagram  className='mx-2'/>
        <TiSocialLinkedin className='mx-2' />
        <SlSocialYoutube className='mx-2' />
        <BsTwitterX className='mx-2' />
        </div>
      </div>

      <div className='endline w-full h-[20%] absolute bottom-[5%] flex items-center justify-center'>
        <p className='text-white font-popins '>All Rights Reserved 2025 | @Developed by SHUBH </p>
      </div>
    </div>
  )
}

export default Footer
