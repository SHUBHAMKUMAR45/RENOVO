import React, { useEffect, useRef } from "react";
import './style.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {

    const contactRef = useRef(null)
    const contactElem = gsap.utils.selector(contactRef)

    useEffect(()=>{
          const h1 = document.querySelector('h1.h1-low')
      
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
          const h1 = document.querySelector('h1.h1-high')
      
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
                'h1.h1-low span',
                {y : '50%', opacity : 0},
                {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
                  trigger : 'h1.h1-low span',
                  start : 'top 80%',
                }}
              )
          
              gsap.fromTo(
                'h1.h1-high span',
                {y : '50%', opacity : 0},
                {y : 0, opacity : '80%', duration : 1.5, stagger : 0.15, scrollTrigger : {
                  trigger : 'h1.h1-high span',
                  start : 'top 80%',
                }}
              )

              gsap.fromTo(
                contactElem('.short-description'),
                {x : '-50%', opacity : 0},
                {x : 0, opacity : 1, duration : 1.5, stagger : 0.15, scrollTrigger : {
                  trigger : contactElem('.short-description'),
                  start : 'top 80%',
                }}
              )

              gsap.fromTo(
                contactElem('.form'),
                {x : '50%', opacity : 0},
                {x : 0, opacity : 1, duration : 1.5, stagger : 0.15, scrollTrigger : {
                  trigger : contactElem('.form'),
                  start : 'top 80%',
                }}
              )
        })


  return (
    <div ref={contactRef} className='w-scree h-[120vh] relative'>
        <h1 className='h1-low absolute left-[5%] top-[5%] font-playfair text-white text-[100px] opacity-[10%]'>CONTACT</h1>
        <h1 className='h1-high absolute left-[8%] top-[10%] font-playfair text-white text-[100px]'>CONTACT</h1>

        <div className='w-[30%] h-[40%] absolute left-[5%] top-[40%] flex flex-col justify-between'>
            <p className='short-description font-popins text-white'>Our offices are open in several parts of the world. We can also review your request online. Leave your details and our consultant will contact you within a few hours. We are wating for your orders.</p>
            <div className='short-description w-full text-white font-popins'>
                <h4 className='font-bold'>Chapter Tri-State Area</h4>
                <p className='font-medium my-1'>(202) 296-5426</p>
                <p className='font-medium my-1'>244, 9th Ave, New York, NY 10001</p>
            </div>
            <div className='short-description w-full text-white font-popins'>
                <h4 className='font-bold'>Chapter Miami</h4>
                <p className='font-medium my-1'>(308) 174-2734</p>
                <p className='font-medium my-1'>355, NW 40th St, Miami, FL 34129
                </p>
            </div>
        </div>

        <div className='form w-[40%] h-[60%] absolute top-[30%] right-[10%] flex flex-col justify-between'>
            <input type="text" placeholder='Name :' className='px-5 h-[60px] border-b-[2px] text-white font-popins outline-0 bg-transparent ' />
            <input type="email" placeholder='Email :' className='px-5 h-[60px] border-b-[2px] text-white font-popins outline-0 bg-transparent ' />
            <input type="number" placeholder='Phone Number :' className='px-5 h-[60px] border-b-[2px] text-white font-popins outline-0 bg-transparent ' />
            <textarea rows={8} cols={10} placeholder='Tell us more about your project :' className='bg-transparent outline-0 text-white font-popins px-5 border-b-2'></textarea>
            <a href="/" className=' w-[150px] h-[40px] bg-white text-black font-popins font-semibold flex items-center rounded-[5px] justify-center'>Submit</a>
        </div>
    </div>
  )
}

export default Contact
