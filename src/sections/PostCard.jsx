import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  })

  return (
    <section className="post-card" style={{padding: '10rem 2rem 2rem 2rem',marginTop: '1rem'}}>
      <div className="animated-gradient-bg" />
      <h2>HE</h2>
      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700" >
        <img src="/images/frame3.png" />

        <video 
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore More
        </button>
      </div>
    </section>
  )
}

export default PostCard