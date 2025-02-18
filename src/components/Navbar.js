import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'


const Navbar = () => {

  useGSAP(()=>{
    gsap.fromTo('.navbar',{y : '-100%' , opacity : 0},{y : 0 , opacity : 1, duration : 2})
  })

  return (
    <div className='navbar absolute z-[999] w-full px-[50px] flex justify-between items-center text-[36px] h-[100px] text-white'>
      <div className="nav-logo font-playfair">Renovo</div>
      <div className="nav-links w-[45%] font-popins">
        <ul className='flex text-[18px] justify-between items-center' >
          <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">About</a></li>
          <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Projects</a></li>
          <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Services</a></li>
          <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Blog</a></li>
          <li className='hover:text-[#aaaaaa] transition-colors duration-[0.60s]'><a href="/">Contact</a></li>
          <li><a href="/" className='hover:bg-transparent hover:border-[1px] hover:text-white transition duration-[0.60s`] w-[115px] h-[36px] bg-white text-black inline-block flex items-center justify-center rounded-[5px]'>Login</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
