import { cn } from "@/lib/utils";
import React from "react";

function SectionHeader({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("text-3xl text-center uppercase font-bold", className)}
      {...rest}
    >
      {children}
    </h1>
  );
}

export default SectionHeader;
