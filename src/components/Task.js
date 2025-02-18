import React, { useEffect, useRef } from 'react'
import Image from '../assests/8.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Task = () => {

    const taskRef = useRef(null)
    const taskElem = gsap.utils.selector(taskRef)

    useEffect(()=>{

        gsap.fromTo(taskElem('.first-image'),
        {x : '-50%', opacity : 0},
        {x : 0, opacity : 1,duration : 2, scrollTrigger : { trigger : taskElem('.first-image'), start : 'top 50%' }})


        gsap.fromTo(taskElem('h1.heading'),
        {y : '50%', opacity : 0},
        {y : 0, opacity : 1,duration : 2, scrollTrigger : { trigger : taskElem('h1.heading'), start : 'top 50%' }})

        gsap.fromTo(taskElem('.points'),
        {x : '50%', opacity : 0},
        {x : 0, opacity : 1,duration : 2,stagger : 0.20, scrollTrigger : { trigger : taskElem('.points'), start : 'top 50%' }})

        gsap.fromTo(taskElem('.number'),
        {y : '50%', opacity : 0},
        {y : 0, opacity : 1,duration : 2,stagger : 0.20, scrollTrigger : { trigger : taskElem('.number'), start : 'top 80%' }})

    },[taskElem])



    return (
    <div ref={taskRef} className='w-screen h-[110vh] text-white relative'>
        <div className='first-image w-[40%] h-[80%] bg-white absolute top-[15%] left-[5%] overflow-hidden'>
            <img src={Image} className='w-full h-full object-center object-cover' alt='img' />
        </div>
        <div className='w-[45%] h-[60%] flex flex-col justify-between absolute top-[15%] right-[5%]'>
            <h1 className='heading text-[50px] w-[80%] font-playfair'>Our company will help to solve the following tasks</h1>
            <div className='points w-[70%] h-[50px] flex items-center justify-between'>
                <div className='w-[80px] h-[2px] bg-white'></div>
                <p className='w-[80%]'>Develop a layout that meets the requirements of the SNIP and coordinate it.</p>
            </div>

            <div className='points w-[70%] h-[50px] flex items-center justify-between'>
                <div className='w-[80px] h-[2px] bg-white'></div>
                <p className='w-[80%]'>Save your nerves and time with communicating with contractors or choosing materials.</p>
            </div>

            <div className='points w-[70%] h-[50px] flex items-center justify-between'>
                <div className='w-[80px] h-[2px] bg-white'></div>
                <p className='w-[80%]'>Prevent unnecessary costs associated wth alterations.</p>
            </div>

            <div className='points w-[70%] h-[50px] flex items-center justify-between'>
                <div className='w-[80px] h-[2px] bg-white'></div>
                <p className='w-[80%]'>Generate an accurate estimate for furniture, materials and construction work.</p>
            </div>

            <div className='points w-[70%] h-[50px] flex items-center justify-between'>
                <div className='w-[80px] h-[2px] bg-white'></div>
                <p className='w-[80%]'>Fully implement a design project at the highest level of expectations.</p>
            </div>
        </div>

        <div className='w-[40%] h-[15%] absolute bottom-[5%] right-[10%] flex justify-between'>
            <div className='number w-[30%] h-full flex flex-col items-center justify-center'><h1 className='digit text-[70px] font-playfair'>748</h1><p className='font-popins text-[20px]'>Home</p></div>
            <div className='number w-[30%] h-full flex flex-col items-center justify-center'><h1 className='text-[70px] font-playfair'>854</h1><p className='font-popins text-[20px]'>Kitchen</p></div>
            <div className='number w-[30%] h-full flex flex-col items-center justify-center'><h1 className='text-[70px] font-playfair'>916</h1><p className='font-popins text-[20px]'>Bathrooms</p></div>
        </div>
    </div>
  )
}

export default Task
