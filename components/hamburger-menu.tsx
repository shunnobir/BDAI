"use client";

import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./logo";
import Searchbar from "./searchbar";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";

function HamburgerMenu({
  links,
  className,
}: {
  links: { name: string; href: string }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("sm:hidden", className)}>
      <Button variant="ghost" onClick={() => setOpen((op) => !op)}>
        <AlignJustify />
      </Button>
      {open ? (
        <div className="absolute w-full h-full right-0 top-0">
          <div
            className="w-full h-full bg-foreground/30"
            onClick={() => setOpen(false)}
          />
          <ul className="absolute top-0 right-0 h-full z-10 w-[280px] list-none flex flex-col gap-4 bg-background shadow-md">
            <li className="w-full flex justify-between items-center pt-2 px-5">
              <Logo variant="short" className="size-16" />
              <Button variant="ghost" onClick={() => setOpen(false)}>
                <X size={24} />
              </Button>
            </li>
            <li className="px-2">
              <Searchbar className="w-full" />
            </li>
            <Separator className="mb-3" />
            {links.map((link) => (
              <Link href={link.href} key={link.name}>
                <li className="uppercase w-fit hover:border-b-4 hover:border-solid hover:border-primary py-2 p ml-5 cursor-pointer">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default HamburgerMenu;
