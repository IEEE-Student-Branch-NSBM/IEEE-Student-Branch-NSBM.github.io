import { Separator } from "@/components/ui/separator";
import { AnchorHTMLAttributes } from "react";

import { ROUTES } from "@/constants/routes.constants";

interface GlobalNavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function GlobalNavItem(props: GlobalNavItemProps) {
  return (
    <>
      <a {...props} />

      <Separator
        orientation="vertical"
        className="bg-white last-of-type:hidden h-[20px]"
      />
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
  ];

  return (
    <div className="flex flex-row gap-2 justify-start items-center h-[50px]">
      {navItems.map((item) => (
        <GlobalNavItem key={item.url} href={item.url}>
          {item.label}
        </GlobalNavItem>
      ))}
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-center w-full bg-grey">
      <header className="text-white max-w-[1170px] grow">
        <nav>
          <GlobalNav />
        </nav>
      </header>
    </div>
  );
}

Header.GlobalNav = GlobalNav;

export default Header;
export { GlobalNav };
