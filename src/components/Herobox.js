import React from "react";
import './style.css'
import Image1 from "../assests/1.png";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";

const Herobox = () => {

  const heroboxRef = useRef(null)
  const heroboxElem = gsap.utils.selector(heroboxRef)

  useEffect(()=>{

    const h1 = document.querySelector('.h1-high-opacity')

    if(h1){
      const h1Text = h1.textContent.split('')
  
  
      var clutter = ''
      h1Text.forEach(function(elem){
        clutter += `<span>${elem}</span>`
      })
      
      h1.innerHTML = clutter
    }


  },[])

  useEffect(()=>{

    const h1 = document.querySelector('.h1-low-opacity')

    if(h1){
      const h1Text = h1.textContent.split('')
  
  
      var clutter = ''
      h1Text.forEach(function(elem){
        clutter += `<span>${elem}</span>`
      })
      
      h1.innerHTML = clutter
    }


  },[])



  useEffect(()=>{

    gsap.fromTo(
      heroboxElem('.herobox-image'),
      {x : '100%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo(
      heroboxElem('.h2'),
      {x : '-80%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo('.h1-high-opacity span',{y : '50%',opacity : 0}, {y : 0, opacity : 1,duration : 1, stagger : 0.15})
    gsap.fromTo('.h1-low-opacity span',{y : '50%',opacity : 0}, {y : 0, opacity : 1,duration : 1, stagger : 0.15})

    gsap.fromTo(
      heroboxElem('.bio'),
      {x : '-80%', opacity : 0},
      {x : 0, opacity : 1, duration : 2}
    )

    gsap.fromTo(
      heroboxElem('.white-btn'),
      {y : '80%', opacity : 0},
      {y : 0, opacity : 1, duration : 2}
    )

    
    gsap.fromTo(
      heroboxElem('.blur-box'),
      {y : '80%', opacity : 0},
      {y : 0, opacity : 1, duration : 2}
    )

  })


  return (
    <div ref={heroboxRef} className="herobox w-screen h-[110vh] relative bg-[#202020]">
      <div className="herobox-image absolute right-[-5%] w-[85%] h-full">
        <img src={Image1} className="w-full h-full object-cover" />
      </div>
      <div className="blur-box w-[70vw] h-[25%] flex items-center justify-center absolute top-[70%] right-[90px]">
        <div className=" bg-[#323232] w-full h-full backdrop-blur-[17px] absolute opacity-[60%]"></div>
        <div className="w-full px-10 h-full flex items-center absolute justify-between font-popins">
          <div className="w-[300px] text-white">
            <p>
              We specialize in comprehensive home renovations, from design to
              construction, delivering quality materials and expert
              craftsmanship to enhance your home’s value.
            </p>
          </div>

          <div className="w-[300px] h-[80px] font-popins flex flex-col justify-between text-white">
            <h4 className="font-semibold">Craftsmanship</h4>
            <p>Unmatched attention to detail in every renovation project</p>
          </div>
          <div className="w-[300px] h-[80px] font-popins flex flex-col justify-between text-white">
            <h4 className="font-semibold">Durability</h4>
            <p>High-Quality materials designed to last through years of wear</p>
          </div>
        </div>
      </div>
      <div className="w-[40%] h-full absolute">
        <h2 className="h2 text-white font-playfair text-[40px] absolute top-[28%] left-[50px]">Home</h2>
        <h1 className="h1-low-opacity text-white font-playfair text-[128px] absolute top-[30%] left-[20px] opacity-10">Renovation</h1>
        <h1 className="h1-high-opacity text-white font-playfair text-[128px] absolute top-[35%] left-[50px]">Renovation</h1>
        <p className="bio text-white font-popins w-[230px] text-[15px] absolute top-[65%] left-[50px]">Transforming your space with expert renovation services that add value and style</p>
        <a className="white-btn inline-block w-[210px] h-[36px] bg-white text-black absolute top-[80%] flex items-center justify-center font-popins rounded-[5px] font-semibold left-[50px]" href="/">Get a Free Quote</a>
        <div className="w-[150px] h-[50px] flex items-center justify-between absolute top-[92%] left-[50px] text-white">
        <CiFacebook className="text-[30px] "/>
        <CiInstagram className="text-[30px] " />
        <CiLinkedin className="text-[30px] " />
        <CiYoutube className="text-[30px] " />
        </div>
      </div>
    </div>
  );
};

export default Herobox;
