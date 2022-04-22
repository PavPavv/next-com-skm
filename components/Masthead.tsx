import React, { useState, useRef, useContext, useCallback } from "react";
import Image from 'next/image';

import ScrollContext from "../context/scrollContext";

const Masthead = (): JSX.Element => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  
  let progress = 0;
  const { current } = refContainer;
  if (current) {
    progress = Math.min(1, scrollY / current.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  
  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute w-full h-full object-cover">
          <source src="/assets/video/bg_vd1.mp4" type="video/mp4;codes=hvc1" />
      </video>
      
      <div className=" font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-7xl xl:text-8xl">СамараКабельМонтаж</h1>
        <h2 className="mb-2 text-2xl xl:text-4xl tracking-tight">
          <span>Системы обогрева,</span>
          {' '}
          <span>сделанные надежно.</span>
        </h2>
      </div>
      
      <div className={`
        flex-grow-0 pb-20 mb:pb-10 transition-all duration-1000
        ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}
      `}>
        <Image 
          src="/assets/images/down-chevron.png"
          width="100"
          height="100"
          alt="logo"
          onLoadingComplete={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
