import Coming from './Coming'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { useMaskSettings } from '../constants'
const Hero = () => {
    const {initialMaskPos,initialMaskSize,maskSize} = useMaskSettings();
    useGSAP(()=>{
        gsap.set('.mask-wrapper',{
            maskPosition: initialMaskPos,
            maskSize: initialMaskSize
        })
        gsap.set('.mask-logo',{marginTop: '-100vh',opacity: 0})
        gsap.set('.entrance-message',{marginTop: '0vh'})
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                scrub: 2.5,
                end: '+=200%',
                pin: true,
            }
        })
        tl
        .to('.fade-out',{opacity: 0,ease: 'power1.in'})
        .to('.scale-out',{scale: 1,ease: "slow(0.9,0.1,false)",duration: 3})
        .to('.mask-wrapper',{maskSize: maskSize,ease: 'power3.out',duration: 3},"<")
        .to('.mask-wrapper',{opacity: 0})
        .to('.overlay-logo',{opacity: 1,onComplete: ()=>{
            gsap.to('.overlay-logo',{opacity: 0})
        }})
        .to('.entrance-message',{duration: 3,ease: 'power1.in',maskImage: 'radial-gradient(circle at 50% 0vh,black 50%,transparent 100%)'},"<")
    })
  return (
    <section className='hero-section'>
        <div className='w-[100vw] h-[180vh] mask-wrapper'>
            <img src="/images/logo-try.jpg" alt="Background" className='scale-out' />
            <div className='flex justify-center'><img src="/images/upvave-text.webp" alt="Hero logo" className='title-logo fade-out ' /></div>

        </div>
        <div>
            <img src="/images/upvave-text.webp" alt="logo-image" className='size-full object-cover mask-logo' />
        </div>
        <div className='fake-logo-wrapper'>
            <img src="/images/upvave-fade.svg" alt="" className='overlay-logo' />
        </div>
        <Coming/>
    </section>
  )
}

export default Hero