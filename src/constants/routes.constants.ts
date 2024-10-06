interface Route {
  url: string;
  label: string;
}

export const ROUTES: { [key: string]: Route } = {
  HOME: {
    url: "/",
    label: "Home",
  },
  EVENTS: {
    url: "/events-page",
    label: "Events",
  },
  BLOG: {
    url: "/#blog",
    label: "Blog",
  },
  EXCOM: {
    url: "/#excom",
    label: "Excom",
  },
  ABOUT_US: {
    url: "/#about",
    label: "About Us",
  },
  CONTACT_US: {
    url: "/#contact",
    label: "Contact Us",
  },
  JOIN_US: {
    url: "/#join",
    label: "Join Us",
  },
  IEEE_HOME: {
    url: "https://www.ieee.org/",
    label: "IEEE.org",
  },
  IEEE_XPLORE: {
    url: "https://ieeexplore.ieee.org/Xplore/home.jsp",
    label: "IEEE Xplore Digital Library",
  },
  IEEE_STANDARDS: {
    url: "https://standards.ieee.org/",
    label: "IEEE Standards",
  },
  IEEE_SPECTRUM: {
    url: "https://spectrum.ieee.org/",
    label: "IEEE Spectrum",
  },
  IEEE_MORE_SITES: {
    url: "https://www.ieee.org/sitemap.html",
    label: "More IEEE Sites",
  },
  IEEE_JOIN: {
    url: "https://www.ieee.org/join",
    label: "Join IEEE",
  },
};
