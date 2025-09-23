import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Gallery = () => {
  useGSAP(()=>{
    gsap.set('.gallery',{marginTop: '-80vh'})
    gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery',
        start: 'top 90%',
        end: '10% center',
        scrub: 2,
      }
    })
    .to('.first-vd',{opacity: 0,duration: 1,ease: 'power1.inOut'})
    gsap.to('.gallery .img-box',{
      scrollTrigger:{
        trigger: '.gallery',
        start: 'top center',
        end: '80% center',
        scrub: 2,
      },y: -300,duration: 1,ease: 'power1.inOut'
    },"<")
  })
  return (
    <section className='gallery'>
        <div className='max-w-lg gallery-content'>
          <h1>Web Development</h1>
          <h2>We create beautiful and fully functional websites.</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In recusandae rem iure dolore consequatur dolorem praesentium quae asperiores debitis obcaecati!</p>
          <div className="gallery-img-2">
            <img src="/images/gallery-1.jpg" alt="" />
          </div>
        </div>
        
        <div className="space-y-5 mt-96 img-box">
          <div className="gallery-img-1">
            <img src="/images/gallery-2.jpg" alt="" />
          </div>
          <div className="gallery-img-3">
            <img src="/images/movie.png" alt="" />
          </div>
        </div>
    </section>
  )
}

export default Gallery