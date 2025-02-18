import React, { useEffect, useRef } from 'react'
import './style.css'
import firstImage from '../assests/2.png'
import secondImage from '../assests/3.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const About = () => {

  const aboutRef = useRef(null)
  const aboutElem = gsap.utils.selector(aboutRef)

  useEffect(()=>{
    const h3 = document.querySelector('h3.h3-low-opacity')

    if(h3){
      const h3Text = h3.textContent.split('')
  
      let clutter = ''
      
      h3Text.forEach((elem)=>{
       clutter += `<span>${elem}</span>`
      })
    
      h3.innerHTML = clutter
    }


  },{})

  useEffect(()=>{
    const h3 = document.querySelector('h3.h3-high-opacity')

    if(h3){
      const h3Text = h3.textContent.split('')
  
      let clutter = ''
      
      h3Text.forEach((elem)=>{
       clutter += `<span>${elem}</span>`
      })
    
      h3.innerHTML = clutter
    }


  },{})
  
  

  useEffect(()=>{

    gsap.fromTo(
      aboutElem('.first-image'),
      {x : '-90%', opacity : 0},
      {x : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.first-image'), start : 'top 50%' }}
    )

    gsap.fromTo(
      aboutElem('h3.h3-low-opacity span'),{y : '50%', opacity : 0},{y : 0,opacity : 1,duration : 1,stagger:0.15 ,scrollTrigger :{
        trigger : aboutElem('h3.h3-low-opacity span'), start : 'top 50%',
      }}
    )

    gsap.fromTo(
      aboutElem('h3.h3-high-opacity span'),{y : '50%', opacity : 0},{y : 0,opacity : 1,duration : 1,stagger:0.15 ,scrollTrigger :{
        trigger : aboutElem('h3.h3-high-opacity span'), start : 'top 50%',
      }}
    )

    gsap.fromTo(
      aboutElem('p.left-bio'),
      {y : '50%', opacity : 0},
      {y : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('p.left-bio'), start : 'top 80%' }}
    )

    gsap.fromTo(
      aboutElem('.right-bio'),
      {x : '50%', opacity : 0},
      {x : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.right-bio'), start : 'top 80%' }}
    )

    gsap.fromTo(
      aboutElem('.second-image'),
      {y : '50%', opacity : 0},
      {y : 0 , 
      opacity : 1, 
      duration : 2, 
      scrollTrigger : 
      {trigger : aboutElem('.second-image'), start : 'top 80%' }}
    )

  },[aboutElem])

  return (
    <div ref={aboutRef} className='relative w-screen h-[120vh] overflow-hidden'>
      <div className='first-image absolute top-[15%] left-[3%] w-[22%] h-[500px] bg-white overflow-hidded'>
        <img src={firstImage} alt="" />
      </div>
      <h3 className='h3-low-opacity absolute top-[20%] left-[20%] text-white opacity-[5%] text-[120px] font-playfair'>ABOUT US</h3>
      <h3 className='h3-high-opacity absolute top-[25%] left-[22%] text-white text-[120px] font-playfair'>ABOUT US</h3>
      <p className='left-bio absolute top-[48%] left-[28%] text-white w-[28%] font-popins'>Hi! We are a trusted renovation company with over 10 years of experience. Our mission is to bring your renovation dreams to life, delivering quality and customer satisfaction at every step.</p>
      <div className='right-bio absolute top-[35%] flex flex-col justify-between right-[10%] w-[20%] h-[300px]'>
      <p className='text-white'>We lead a small professional team that will be with you from the idea to the final implementation of the space. Just share your dreams with us. KASALTO will do the rest. Tell us how you see your dream space, we will offer several options for concepts and make an audit of the layout. The designer has knowledge of materials and a professional view of space and color simple by virtue of work experience.</p>
      <a href="/" className='text-white'>Learn More...</a>
      </div>
      <div className='second-image w-[30%] h-[280px] bg-white absolute top-[75%] right-[10%] overflow-hidden'>
        <img src={secondImage} alt="" />
      </div>
    </div>
  )
}

export default About
