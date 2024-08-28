import type { NavLinksType, SocialIconsType } from "./Types";
import {
  AboutIcon,
  ContactIcon,
  GitHubIcon,
  HomeIcon,
  LinkedinIcon,
  WorkIcon,
} from "./Icons";

export const navLinks: NavLinksType[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
    url: "#home",
  },
  {
    title: "About",
    icon: <AboutIcon />,
    url: "#about",
  },
  {
    title: "Portfolio",
    icon: <WorkIcon />,
    url: "#portfolio",
  },
  {
    icon: <ContactIcon />,
    title: "Contact",
    url: "#contact",
  },
];

export const socialIcons: SocialIconsType[] = [
  {
    icon: <LinkedinIcon />,
    url: "#",
    title: "Linkedin",
  },
  {
    icon: <GitHubIcon />,
    url: "#",
    title: "GitHub",
  },
];
