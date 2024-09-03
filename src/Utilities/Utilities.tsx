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
    url: "https://www.linkedin.com/in/salah-abdo/",
    title: "Linkedin",
  },
  {
    icon: <GitHubIcon />,
    url: "https://github.com/salahmander",
    title: "GitHub",
  },
];

export const ScrollTo = (url: string) => {
  // Check if the URL contains a hash (#) and is not empty
  if (!url.includes("#") || !url) return;

  // Extract the target element's ID from the URL
  const targetId = url.split("#")[1];
  const targetElement = document.getElementById(targetId);

  // If the target element doesn't exist, exit the function
  if (!targetElement) return;

  // Calculate the position of the target element relative to the document
  const targetPosition = targetElement.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 2000; // duration in milliseconds
  let startTime: number | null = null;

  // Easing function for smooth scrolling (Expo.easeInOut equivalent)
  const easeInOutExpo = (time: number, start: number, change: number, duration: number) => {
    if (time === 0) return start;
    if (time === duration) return start + change;
    if ((time /= duration / 2) < 1) return (change / 2) * Math.pow(2, 10 * (time - 1)) + start;
    return (change / 2) * (-Math.pow(2, -10 * --time) + 2) + start;
  };

  // Animation loop using requestAnimationFrame for smooth scrolling
  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime; // Set the start time
    const timeElapsed = currentTime - startTime; // Time elapsed since animation started
    const run = easeInOutExpo(timeElapsed, startPosition, distance, duration); // Calculate the current scroll position
    window.scrollTo(0, run); // Scroll the window to the current position

    // Continue the animation until the duration is completed
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  // Start the animation
  requestAnimationFrame(animateScroll);
};

