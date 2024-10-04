"use client";

import Link from "next/link";
import { links } from "@/app/constants/nav-links";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import WalletButton from "./WalletButton";

export default function NavBar() {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-screen py-10 transition-all duration-500 
        ${
          hasScrolled
            ? "pt-2 pb-3 bg-black bg-opacity-50 backdrop-blur-[8px]"
            : ""
        }`}
    >
      <div className="container flex h-14 items-center ">
        <div className="w-screen sidebar-before">
          <nav className="w-full p-4 fixed top-0 left-0 right-0 z-50 flex justify-center">
            <div className="w-full mx-4 flex justify-between items-center">
              <div className="flex items-center nav-logo">
                <h1 className="hidden md:block text-semibold text-3xl tracking-wider">
                  Deducation
                </h1>
                <div className="opacity-0 pointer-events-none">
                  <WalletButton />
                </div>
              </div>
              <div className="gap-12 hidden md:flex center nav-li">
                <PCNavLinks />
              </div>
              <div className="flex items-center nav-logo">
                <h1 className="hidden md:block text-semibold text-3xl tracking-wider opacity-0 pointer-events-none">
                  Deducation
                </h1>
                <div>
                  <WalletButton />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "block py-2 px-3 text-white bg-blue-700 rounded"
                : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
            }`}
          >
            <li>{link.name}</li>
          </Link>
        );
      })}
    </>
  );
}

function PCNavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-p1 font-semibold text-lg uppercase"
                : "font-semibold text-lg uppercase"
            } transition-colors hover:text-p1 duration-500`}
          >
            <h2>{link.name}</h2>
          </Link>
        );
      })}
    </>
  );
}
