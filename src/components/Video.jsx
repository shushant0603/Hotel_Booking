import React,{useEffect,useRef} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../stylesheets/Video.css'
gsap.registerPlugin(ScrollTrigger)
const Video = () => {
  const innerDivRef = useRef(null)
  useEffect(() => {
    // GSAP ScrollTrigger animation for the inner div
    gsap.fromTo(
      innerDivRef.current,
      { width: '60%', height: '50%' }, // Initial size and position
      {
        width: '90%', // Final width
        height: '90%',
        y:"3vh", // Final height
        // y: window.innerHeight / 2 - (window.innerHeight * 0.7) / 2, // Center vertically
        duration: 3.5,
        ease: 'linear',
        scrollTrigger: {
          trigger: innerDivRef.current, // Element to trigger the animation
          start: 'top center', // Start when the top of the div reaches the center of the viewport
           // Start when the top of the div reaches the center of the viewport
          end: '+=500',
          // End when the div is fully centered in the viewport
          scrub: true,
           // Smoothly animate as you scroll
        },
      }
    )
  }, [])

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center relative">
      <div
           ref={innerDivRef}
       className="w-[80%] h-[70%] bg-[#eae6e5] rounded-[50px] shadow-lg flex align-center absolute top-0 -translate-y-1/7">
        {/* Content inside the inner div */}
      </div>
    </div>
  )
}

export default Video
