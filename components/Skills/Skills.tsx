import React, { useContext, useRef } from "react";

import ScrollContext from "../../context/scrollContext";
//  ui
import styles from './Skills.module.css';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills = (): JSX.Element => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const numOfPages = 3;
  let progress = 0;
  const { current } = refContainer;
  if (current) {
    const { clientHeight, offsetTop } = current;
    const screenHeight = window.innerHeight;
    const halfHeight = screenHeight / 2;
    const percentY = Math.min(
      clientHeight + halfHeight,
      Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
    ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  return (
    <div className="bg-black text-white" ref={refContainer}>
      <div 
        className={`
          min-h-screen 
          max-w-5xl 
          mx-auto 
          px-10 
          lg:px-20 
          py-24 
          md:py-28 
          lg:py-36
          flex flex-col
          justify-center
          items-center
          text-4xl
          md:text-5x
          lg:text-6xl
          tracking-tight
          font-semibold
        `}
      >
        <div className="leading-[1.15]">
          <div 
            className={styles.skillText}
            style={{ opacity: opacityForBlock(progress, 0) }}
          >Мы знаем свое дело.</div>
          <span 
            className={`${styles.skillText} inline-block after:content-['_']`}
            style={{ opacity: opacityForBlock(progress, 1) }}
          >Мы успешно выполнили более чем 140 проектов.</span>
          <span 
            className={`${styles.skillText} inline-block`}
            style={{ opacity: opacityForBlock(progress, 2) }}
          >Мы поддерживаем на постоянной основе крупные госучереждения.</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;