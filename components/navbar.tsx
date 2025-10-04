import React from "react";
import Logo from "./logo";
import HamburgerMenu from "./hamburger-menu";
import Searchbar from "./searchbar";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Publications",
      href: "/publications",
    },
    {
      name: "Contacts",
      href: "/contacts",
    },
  ];
  return (
    <nav className="fit-frame py-4 border-b border-solid flex items-center gap-5">
      <>
        <a href="/" className="no-underline mr-auto">
          <Logo />
        </a>
        {/* <Searchbar className="hidden md:flex" /> */}
        <HamburgerMenu links={navLinks} className="" />
        <ul className="hidden sm:flex text-sm list-none gap-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="uppercase border-b-4 border-solid border-transparent py-2 hover:border-b-4 hover:border-solid hover:border-primary"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </>
      <Searchbar className="hidden md:flex" />
    </nav>
  );
}

export default Navbar;
