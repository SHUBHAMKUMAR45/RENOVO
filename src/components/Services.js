import React, { useEffect, useRef } from 'react'
import './style.css'
import backgroundImage from '../assests/4.png'
import planImage from '../assests/5.png'
import designImage from '../assests/6.png'
import buildImage from '../assests/7.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Services = () => {

  const serviceRef = useRef(null)
  const serviceElem = gsap.utils.selector(serviceRef)

    useEffect(()=>{
      const h1 = document.querySelector('h5.low-service')
  
      if(h1){
        const h1Text = h1.textContent.split('')
    
        let clutter = ''
        
        h1Text.forEach((elem)=>{
         clutter += `<span>${elem}</span>`
        })
      
        h1.innerHTML = clutter
      }
  
  
    },{})

    useEffect(()=>{
      const h1 = document.querySelector('h1.high-service')
  
      if(h1){
        const h1Text = h1.textContent.split('')
    
        let clutter = ''
        
        h1Text.forEach((elem)=>{
         clutter += `<span>${elem}</span>`
        })
      
        h1.innerHTML = clutter
      }
  
  
    },{})

  useEffect(()=>{

    gsap.fromTo(
      serviceElem('.plan'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : 1, duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : serviceElem('.plan'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      'h5.low-service span',
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : 'h5.low-service span',
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      'h1.high-service span',
      {y : '50%', opacity : 0},
      {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
        trigger : 'h1.high-service span',
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      serviceElem('p.description'),
      {y : '50%', opacity : 0},
      {y : 0, opacity : 1, duration : 1.5, scrollTrigger : {
        trigger : serviceElem('p.description'),
        start : 'top 80%',
      }}
    )

    gsap.fromTo(
      serviceElem('a'),
      {x : '50%', opacity : 0},
      {x : 0, opacity : 1, duration : 1.5, scrollTrigger : {
        trigger : serviceElem('a'),
        start : 'top 80%',
      }}
    )

  },[serviceElem])



  return (
    <div ref={serviceRef} className='relative w-screen h-[130vh]'>
      <img src={backgroundImage} className='w-full h-full absolute top-[0%] right-[0%] object-cover object-center' />
      <h5 className='low-service absolute text-white text-[120px] right-[20%] opacity-[10%] font-playfair'>Services</h5>
      <h1 className='high-service absolute text-white text-[120px] right-[18%] top-[5%] font-playfair'>Services</h1>
      <div className='w-[60%] h-[65%] absolute top-[30%] left-[5%] flex justify-between'>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={planImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>01</h4>
                <h1 className='text-[32px] font-semibold'>Plan</h1>
                <p className='text-justify text-[15px]'>We understand that timelines and budgets are top of mind when considering a home renovation. That’s why our expert team works with you to find the best plan that matches your needs and budgets. In addition, we map out all the important paperwork from permits to board approvals to ensure a smooth process moving forward</p>
            </div>
        </div>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={designImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[0%] font-popins w-full h-[55%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>02</h4>
                <h1 className='text-[32px] font-semibold'>Design</h1>
                <p className='text-justify text-[15px]'>Our in-house interior designers work with you to achieve a luxury design that’s tailored to your personal preferences, at no additional cost. With a keen eye for aesthetics and design principles, our talented designers help you create your dream space. They guide you to make design decisions that inspire you, all while sticking to your budget.</p>
            </div>
        </div>
        <div className='plan w-[32%] relative h-full'>
            <div className='w-full h-[70%] overflow-hidden'><img src={buildImage}/></div>
            <div className='absolute w-full h-[55%] bg-black opacity-[70%] backdrop-blur bottom-[0%]'></div>
            <div className='absolute bottom-[6%] font-popins w-full h-[50%] flex flex-col justify-between text-white p-2'>
                <h4 className='text-[24px]'>03</h4>
                <h1 className='text-[32px] font-semibold'>Build</h1>
                <p className='text-justify text-[15px]'>When you work with KASALTO, you have an experienced project manager overseeing all phases of your renovation project. Our PM’s are educated in construction-related fields like civil engineering and architecture which makes them truly qualified to lead your project.</p>
            </div>
        </div>
      </div>
      <div className='absolute w-[20%] h-[30%] top-[45%] right-[10%] flex flex-col justify-between'>
      <p className='description text-white text-justify '>Our team of skilled professionals specializes in transforming your home or office into a functional and aesthetically pleasing environment. From complete renovations to minor updates, we offer a wide range of services tailored to your unique needs.</p>
      <a href="/" className=' rounded-[5px] w-[150px] h-[35px] flex justify-center items-center bg-white text-black font-popins font-semibold'>Learn More</a>
      </div>
    </div>
  )
}

export default Services
