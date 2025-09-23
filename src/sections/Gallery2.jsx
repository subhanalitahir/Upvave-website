import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Gallery2 = () => {
  useGSAP(() => {
    gsap.set('.gallery-2', { marginTop: '-80vh'});

    gsap.timeline({
      scrollTrigger: {
        trigger: '.gallery-2',
        start: 'top 80%',
        end: '10% center',
        scrub: 2,
      }
    }).to('.second-vd', { opacity: 0, duration: 1, ease: 'power1.inOut' });

    gsap.to('.gallery-2 .img-box', {
      scrollTrigger: {
        trigger: '.gallery-2',
        start: 'top center',
        end: '80% center',
        scrub: 2
      }, y: -200, duration: 1, ease: 'power1.inOut'
    }, '<')
  });

  return (
    <section className="gallery-2">
      <div className="flex flex-col gap-5 items-end img-box lg:1/2 ps-10 mt-96">
        <div className="gallery2-img-1">
          <img src="/images/gallery-1.jpg" />
        </div>
        <div className="gallery2-img-3">
          <img src="/images/gallery-3.jpg" />
        </div>
      </div>

      <div className="lg:w-1/2 gallery2-content">
        <div className="max-w-xl lg:ps-32 ps-10">
          <h1>Web Design</h1>
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, porro.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eius delectus corporis voluptate, quas sed. Distinctio aspernatur ipsa eius perspiciatis.</p>
        </div>

        <div className="gallery2-img-2">
          <img src="/images/gallery-4.jpg" />
        </div>

        <p className="max-w-xl lg:ps-32 ps-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse enim, dolorem ea quo rem voluptas deserunt rerum magnam consequatur nobis? Eveniet excepturi sapiente totam debitis.</p>
      </div>
    </section>
  )
}

export default Gallery2