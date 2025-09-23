import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Product from "./sections/Product";
import Gallery from "./sections/Gallery";
import Product2 from "./sections/Product2";
import Gallery2 from "./sections/Gallery2";
import PostCard from "./sections/PostCard";
import SecondApp from "./sections/Footer";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Product videoUrl={"/videos/video2.mp4"} VideoDuration={4} />
      <Gallery />
      <Product2/>
      <Gallery2/>
      <PostCard/>
      <SecondApp/>
    </main>
  );
};

export default App;
