import Image from "next/image";
import React from "react";

import { Separator } from "@/components/ui/separator";
import { AnchorHTMLAttributes } from "react";

import { ROUTES } from "@/constants/routes.constants";

import IeeeLogoWhite from "@/assets/ieee-logo-white.png";
import IeeeSbWhiteImage from "@/assets/ieee-sb-white.png";

interface GlobalNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  last?: boolean;
}

function GlobalNavItem(props: GlobalNavItemProps) {
  return (
    <>
      <a {...props} />

      {props.last ? null : (
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
    <div className="flex justify-center w-full bg-grey">
      <div className="flex flex-row gap-2 justify-start items-center h-[50px] text-white max-w-[1170px] grow">
        {navItems.map((item, i) => (
          <GlobalNavItem
            key={item.url}
            href={item.url}
            last={i == navItems.length ? true : undefined}
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

  return (
    <div className="flex justify-center w-full bg-blue z-50 sticky top-0">
      <nav className="flex flex-row gap-6 uppercase font-semibold justify-center items-center py-3 text-white max-w-[1170px] grow shadow-2xl">
        {navItems.map((item) => (
          <LocalNavItem key={item.url} href={item.url}>
            {item.label}
          </LocalNavItem>
        ))}
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <GlobalNav />

      <div className="flex justify-center w-full bg-blue">
        <div className="flex flex-row gap-2 items-center text-white max-w-[1170px] grow py-7 justify-between">
          <Image
            src={IeeeSbWhiteImage}
            alt="IEEE SB Logo"
            height={70}
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
    </header>
  );
}

Header.GlobalNav = GlobalNav;

export { GlobalNav, LocalNav };
export default Header;
