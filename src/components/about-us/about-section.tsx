import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

interface SocialLink {
  platform: "facebook" | "linkedin" | "instagram";
  link: string;
}

interface AboutSectionProps {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  description: string;
  imageSrc: StaticImageData;
  firstTitleColor?: string;
  secondTitleColor?: string;
  socialLinks: SocialLink[];
  imagePosition?: "left" | "right";
}

function AboutSection({
  firstTitle,
  secondTitle,
  subtitle,
  description,
  imageSrc,
  firstTitleColor = "#00629b",
  secondTitleColor = "#000000",
  socialLinks,
  imagePosition = "right",
}: AboutSectionProps) {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <BsFacebook />;
      case "linkedin":
        return <BsLinkedin />;
      case "instagram":
        return <BsInstagram />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col m-auto w-full max-w-[1170px] px-4 mb-8 md:px-4 lg:px-0">
      <p className="text-6xl mb-4 w-full text-center font-bold">
        <span style={{ color: firstTitleColor }}>{firstTitle}</span>{" "}
        <span style={{ color: secondTitleColor }}>{secondTitle}</span>
      </p>
      <div className="flex flex-col m-auto w-full md:flex-row">
        {imagePosition === "left" && (
          <div className="order-last md:order-first relative w-full md:w-1/4 min-h-[200px] md:mr-4">
            <Image
              src={imageSrc}
              alt="about section image"
              fill
              priority
              className="object-contain"
            />
          </div>
        )}
        <div className="md:w-3/4">
          <p className="md:text-justify text-center text-2xl mb-6 font-medium text-gray-600x">
            {subtitle}
          </p>
          <p className="text-lg font-normal  md:text-justify">{description}</p>
        </div>
        {imagePosition === "right" && (
          <div className="order-last relative w-full md:w-1/4 min-h-[200px] md:ml-4">
            <Image
              src={imageSrc}
              alt="about section image"
              fill
              priority
              className="object-contain"
            />
          </div>
        )}
      </div>
      <div
        className={`flex my-4 text-[20px] gap-2 ${
          imagePosition === "left"
            ? "justify-center md:justify-end"
            : "justify-center md:justify-start"
        }`}
      >
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-opacity-0 hover:bg-opacity-10 bg-[#00629b] text-[#00629b] duration-500"
          >
            {getIcon(link.platform)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
