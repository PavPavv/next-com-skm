import React, { createContext } from 'react';

interface ScrollValue {
  scrollY: number;
};

const ScrollContext = createContext<ScrollValue>({
  scrollY: 0,
});

export default ScrollContext;