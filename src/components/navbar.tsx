"use client";
import { ArrowUpRight, MenuIcon, MoonIcon, Sun, User, X } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import Logo from "./images/Sharon (1).png";
import LogoDark from "./images/sharon_dark.png";
import LogoDark2 from "./images/sharon_dark_2.png";


import { useTheme } from "next-themes";
import { navLinks } from "./data";

export default function Navbar() {
  const { theme, setTheme,resolvedTheme } = useTheme();
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const [mounted, setMounted] = React.useState(false);
  const [isActive, setIsActive] = React.useState("");

  const [isScrolled, setIsScrolled] = React.useState({
    scrolled: false,
  });

  React.useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  React.useEffect(() => {
    const initializeScroll = () => {
      const scrollThreshold = 100;
      setIsScrolled((prev) => ({
        ...prev,
        scrolled: window.scrollY > scrollThreshold,
      }));
    };

    initializeScroll();

    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setIsScrolled((prev) => ({ ...prev, scrolled: true }));
      } else {
        setIsScrolled((prev) => ({ ...prev, scrolled: false }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full top-0 left-0 py-4 px-5 lg:px-8 xl:px-[8%] fixed flex items-center justify-between z-50 ${
        isScrolled?.scrolled
          ? "bg-white/20 dark:bg-darkTheme/20 backdrop-blur-md shadow-md"
          : ""
      }`}
    >
      <a href="#top" className={` ${resolvedTheme==="dark"?"mt-2":""} `}>
        <Image
          src={mounted?resolvedTheme==="dark"?isScrolled?.scrolled? LogoDark2 :LogoDark:Logo:Logo}
          width={100}
          height={100}
          alt="logo"
          className="cursor-pointer bg-transparent"
        />
      </a>
      <ul className="gap-6 lg:gap-8 hidden md:flex">
        {navLinks.map((link, index) => (
          <li key={index} onClick={()=>setIsActive(link?.label)}>
            <a href={link.href} className={`whitespace-nowrap  
              ${isActive===link?.label?"text-[#e0aaff]":""}
              `}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-3">
        <button
          className="cursor-pointer"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? (
              <Sun className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <MoonIcon className="h-5 w-5" strokeWidth={1.5} />
            ))}
        </button>

        <a
          href="#contact"
          className="font-Ovo group hidden md:flex gap-2 items-center justify-center px-4 lg:px-9 py-1.5 lg:py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-pink-50 dark:hover:bg-pink-950  duration-500 cursor-pointer"
        >
          Contact{" "}
          <ArrowUpRight
            className="h-5 w-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.4}
          />
        </a>

        {/* --- ----- mobile button --- ----- */}
        <a
          href="#contact"
          className="font-Ovo flex md:hidden gap-2 items-center justify-center px-1 py-1 rounded-full ml-4"
        >
          <User className="h-5 w-5" strokeWidth={1.4} />
        </a>

        <button className="block md:hidden ml-3" onClick={openMenu}>
          <MenuIcon className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* --- ----- mobile menu --- ----- */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[#11001f] transition duration-500"
      >
        <div onClick={closeMenu}>
          <X className="h-5 w-5 absolute right-6 top-6" />
        </div>

        {navLinks.map((link, index) => (
          <li key={index} onClick={closeMenu} >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
