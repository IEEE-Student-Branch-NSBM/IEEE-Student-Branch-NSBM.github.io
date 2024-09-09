'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ImageSwitcher = () => {
    const [theme, setTheme] = useState('light'); // Default to light

  // Function to update theme based on system preference
    const updateTheme = (e:MediaQueryListEvent) => {
        setTheme(e.matches ? 'dark' : 'light');
    };

  useEffect(() => {
    // Check the initial system theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes to the system theme
    mediaQuery.addEventListener('change', updateTheme);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  return (
    <div>
      {theme === 'light' ? (
        <Image
          src="Images\IEEE NSBM CS LOGO REBUILD - COLOR 1.svg"
          alt="Light Theme Image"
          className="w-40 sm:w-64 lg:w-80 mt-2"
          width={100}
          height={100}
        />
      ) : (
        <Image
          src="Images\IEEE NSBM CS LOGO REBUILD - COLOR WITH WHITE TEXT 1.svg"
          alt="Dark Theme Image"
          className="w-40 sm:w-64 lg:w-80 mt-2"
          width={100}
          height={100}
        />
      )}
    </div>
  );
};

export default ImageSwitcher;
