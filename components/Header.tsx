import React, { useState, useCallback } from "react";
import Image from 'next/image';

const Header = (): JSX.Element => {
  const [logoLoaded, setLogoLoaded] = useState(false);

  const handleLogoLoaded = useCallback(() => {
    setLogoLoaded(true);
  }, []);

  return (
    <header>
      <div className={`
        p-6 z-10 w-full flex items-center justify-center transition-opacity duration-1000
        ${logoLoaded ? 'opacity-100' : 'opacity-0'}
      `}>
        <Image
          src="/assets/images/logo.png"
          width="500"
          height="80"
          alt="logo"
          onLoadingComplete={handleLogoLoaded}
        />
      </div>
    </header>
  );
};

export default Header;