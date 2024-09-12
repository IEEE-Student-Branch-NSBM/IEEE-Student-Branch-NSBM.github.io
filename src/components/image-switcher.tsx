"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import ieeeCsColorBlack from "@/assets/ieee-cs-colored-black.png";
import ieeeCsColorWhite from "@/assets/ieee-cs-colored-white.png";

const ImageSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const updateTheme = (e: MediaQueryListEvent) => {
    setDarkMode(e.matches);
  };
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateTheme);

    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);
  return (
    <div>
      <Image
        src={darkMode ? ieeeCsColorWhite : ieeeCsColorBlack}
        alt={`${darkMode ? "Dark" : "Light"} Theme Image`}
        className={`w-20 sm:w-48 sm:mt-4 lg:w-80 xl:w-60 mt-2 }`}
        width={1500}
        height={1500}
      />
    </div>
  );
};
export default ImageSwitcher;
