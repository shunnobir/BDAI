import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

function Searchbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-2 bg-muted items-center border-2 border-solid border-transparent has-focus-visible:border-primary px-2.5 rounded-md w-32",
        className
      )}
    >
      <Search className="text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search"
        className="border-none placeholder:text-base px-0 grow focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 shadow-none"
      />
    </div>
  );
}

export default Searchbar;
