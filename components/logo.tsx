import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Logo({
  className,
  variant = "long",
}: {
  className?: string;
  variant?: "long" | "short";
}) {
  return (
    <div className="flex flex-row items-center gap-1">
      <Image
        src="/logo.svg"
        width={116}
        height={70}
        alt="BDAI Logo"
        className={cn("size-16 sm:size-20", className)}
      />
      {variant === "long" ? (
        <span className="text-2xl font-medium">BDAI Project</span>
      ) : null}
    </div>
  );
}

export default Logo;
