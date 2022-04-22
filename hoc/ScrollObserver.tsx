import React, {  useState, useCallback, useEffect } from "react";

import ScrollContext from "../context/scrollContext";

type ScrollObserverProps = {
  children: JSX.Element;
};

const ScrollObserver = ({ children }: ScrollObserverProps): JSX.Element => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true, });

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;