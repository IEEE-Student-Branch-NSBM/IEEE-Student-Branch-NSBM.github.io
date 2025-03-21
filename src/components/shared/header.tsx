"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AnchorHTMLAttributes } from "react";

import CsLogoImage from "@/assets/ieee-cs-white-logo.png";
import IeeeLogoWhite from "@/assets/ieee-logo-white.png";
import IeeeSbWhiteImage from "@/assets/logo new white.png";
import WieLogoImage from "@/assets/wie-white.png";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/constants/routes.constants";

import { usePathname } from "next/navigation";

interface GlobalNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  last?: boolean;
}

function GlobalNavItem(props: GlobalNavItemProps) {
  const { last, ...anchorProps } = props;
  return (
    <>
      <a {...anchorProps} />
      {last ? null : (
        <Separator
          orientation="vertical"
          className="bg-white last-of-type:hidden h-[20px]"
        />
      )}
    </>
  );
}

interface LocalNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}

function LocalNavItem(props: LocalNavItemProps) {
  return (
    <>
      <a {...props} />
    </>
  );
}

function GlobalNav() {
  const navItems = [
    ROUTES.IEEE_HOME,
    ROUTES.IEEE_XPLORE,
    ROUTES.IEEE_STANDARDS,
    ROUTES.IEEE_SPECTRUM,
    ROUTES.IEEE_MORE_SITES,
    ROUTES.IEEE_JOIN,
  ];

  return (
    <div className="hidden md:flex justify-center w-full bg-grey xl:px-0 px-5">
      <div className="flex flex-row gap-2 justify-start items-center h-[50px] text-white max-w-[1170px] grow">
        {navItems.map((item, i) => (
          <GlobalNavItem
            key={item.url as unknown as string}
            href={item.url as unknown as string}
            last={i === navItems.length}
          >
            {item.label}
          </GlobalNavItem>
        ))}
      </div>
    </div>
  );
}

function LocalNav() {
  const navItems = [
    ROUTES.HOME,
    ROUTES.EVENTS,
    ROUTES.BLOG,
    ROUTES.EXCOM,
    ROUTES.ABOUT_US,
    ROUTES.CONTACT_US,
    ROUTES.JOIN_US,
  ];

  const pathname = usePathname();

  const bgColor =
    {
      "/wie": "bg-wieLight",
      "/cs": "bg-csLight",
    }[pathname] || "bg-primaryLight";

  return (
    <div
      className={
        "hidden md:flex justify-center w-full  z-50 sticky top-0 " + bgColor
      }
    >
      <nav className="flex flex-row gap-6 uppercase font-semibold justify-center items-center py-3 text-white max-w-[1170px] grow shadow-2xl">
        {navItems.map((item) => (
          <LocalNavItem
            key={item.url as unknown as string}
            href={item.url as unknown as string}
          >
            {item.label}
          </LocalNavItem>
        ))}
      </nav>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const pathname = usePathname();

  const bgColor =
    {
      "/wie": "bg-wieLight",
      "/cs": "bg-csLight",
    }[pathname] || "bg-primaryLight";

  const getLogo = () => {
    switch (pathname) {
      case "/wie":
        return WieLogoImage;
      case "/cs":
        return CsLogoImage;
      default:
        return IeeeSbWhiteImage;
    }
  };

  return (
    <header>
      <GlobalNav />

      <div
        className={
          "flex justify-between items-center w-full  p-3 md:p-0 " + bgColor
        }
      >
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-3xl md:hidden mr-2 mb-1.5"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <span className="text-white font-semibold text-xl">
            IEEE Student Branch of NSBM
          </span>
        </div>

        <div className="md:flex hidden flex-row gap-2 items-center mx-auto text-white max-w-[1170px] grow py-7 justify-between">
          <Image
            src={getLogo()}
            alt="Header Logo"
            height={75}
            quality={10}
            className="max-w-md"
          />
          <Image
            src={IeeeLogoWhite}
            alt="IEEE Logo"
            height={70}
            className="max-w-md"
          />
        </div>
      </div>

      {/* sidebar with animation */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />
      <div
        className={`fixed left-0 top-0 h-full w-[250px] ${bgColor} text-white z-50 p-5 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4">
          <Image
            src={IeeeLogoWhite}
            alt="IEEE Logo"
            height={50}
            className="mx-auto mb-4"
          />
          {[
            ROUTES.HOME,
            ROUTES.EVENTS,
            ROUTES.BLOG,
            ROUTES.EXCOM,
            ROUTES.ABOUT_US,
            ROUTES.CONTACT_US,
            ROUTES.JOIN_US,
          ].map((item) => (
            <a
              key={item.url as unknown as string}
              href={item.url as unknown as string}
              className="text-white text-lg hover:text-gray-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

Header.GlobalNav = GlobalNav;

export { GlobalNav, LocalNav };
export default Header;
