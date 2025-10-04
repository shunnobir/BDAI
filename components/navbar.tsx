import React from "react";
import Logo from "./logo";
import HamburgerMenu from "./hamburger-menu";
import Searchbar from "./searchbar";
import Link from "next/link";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Objectives",
      href: "/#objectives",
    },
    {
      name: "Team",
      href: "/#team",
    },
    {
      name: "Publications",
      href: "/#publications",
    },
    {
      name: "Contacts",
      href: "/#contacts",
    },
  ];
  return (
    <nav className="fit-frame py-4 border-b border-solid flex items-center gap-5">
      <>
        <Link href="/" className="no-underline mr-auto">
          <Logo />
        </Link>
        {/* <Searchbar className="hidden md:flex" /> */}
        <HamburgerMenu links={navLinks} className="" />
        <ul className="hidden sm:flex list-none gap-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="uppercase border-b-4 border-solid border-transparent py-2 hover:border-b-4 hover:border-solid hover:border-primary"
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </>
      <Searchbar className="hidden md:flex" />
    </nav>
  );
}

export default Navbar;
