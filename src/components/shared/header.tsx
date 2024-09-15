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
  return (
    <div className="flex flex-row gap-2 justify-start items-center h-[50px]">
      <GlobalNavItem href={ROUTES.IEEE_HOME.url}>
        {ROUTES.IEEE_HOME.label}
      </GlobalNavItem>

      <GlobalNavItem href={ROUTES.IEEE_XPLORE.url}>
        {ROUTES.IEEE_XPLORE.label}
      </GlobalNavItem>

      <GlobalNavItem href={ROUTES.IEEE_STANDARDS.url}>
        {ROUTES.IEEE_STANDARDS.label}
      </GlobalNavItem>

      <GlobalNavItem href={ROUTES.IEEE_SPECTRUM.url}>
        {ROUTES.IEEE_SPECTRUM.label}
      </GlobalNavItem>

      <GlobalNavItem href={ROUTES.IEEE_MORE_SITES.url}>
        {ROUTES.IEEE_MORE_SITES.label}
      </GlobalNavItem>
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
