import React from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

function Searchbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-2 bg-muted items-center border-solid border-primary has-focus-visible:border-2 px-2.5 rounded-md w-32",
        className
      )}
    >
      <Search className="text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search"
        className="border-none px-0 grow focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-0 shadow-none"
      />
    </div>
  );
}

export default Searchbar;
