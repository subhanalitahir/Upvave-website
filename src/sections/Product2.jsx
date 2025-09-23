import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Product2 = () => {
    const videoRef = useRef(null)
    useGSAP(()=>{
        gsap.set('.second-vd-wrapper',{marginTop: '-60vh',opacity: 0})
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.second-vd-wrapper',
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
                pin: true,
            }
        })
        tl.to('.second-vd-wrapper',{opacity: 1,duration: 1,ease: 'power1.inOut'})
        videoRef.current.onloadedmetadata = ()=>{
      tl.to(videoRef.current,{currentTime: videoRef.current.duration,duration: 6,ease: 'power1.inOut'},"<")
    }
    })
  return (
    <section className="second-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src='/videos/video2.mp4'
          className="second-vd size-full object-cover"
        ></video>
      </div>
    </section>
  );
};

export default Product2;
