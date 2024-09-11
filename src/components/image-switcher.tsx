"use client";
import ieeeCsColorWhite from "@/assets/Ieee-CS-Colored-White.png";
import ieeeCsColorBlack from "@/assets/ieee-cs-colored-black.png";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSwitcher = () => {
  const [theme, setTheme] = useState("light"); // Default to light

  // Function to update theme based on system preference
  const updateTheme = (e: MediaQueryListEvent) => {
    setTheme(e.matches ? "dark" : "light");
  };

  useEffect(() => {
    // Check the initial system theme
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    // Listen for changes to the system theme
    mediaQuery.addEventListener("change", updateTheme);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", updateTheme);
    };
  }, []);

  return (
    <div>
      {theme === "light" ? (
        <Image
          src={ieeeCsColorBlack}
          alt="Light Theme Image"
          className="w-20 sm:w-48 sm:mt-4 lg:w-80 xl:w-60s mt-2"
          width={1500}
          height={1500}
        />
      ) : (
        <Image
          src={ieeeCsColorWhite}
          alt="Dark Theme Image"
          className="w-20 sm:w-48 sm:mt-4 lg:w-80 xl:w-60 mt-2"
          width={1500}
          height={1500}
        />
      )}
    </div>
  );
};

export default ImageSwitcher;
