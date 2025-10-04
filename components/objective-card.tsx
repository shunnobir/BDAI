import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export type ObjectiveType = {
  key: string;
  index: number;
  name: string;
  description: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string;
      titleId?: string;
    } & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
};

function ObjectiveCard({ objective }: { objective: ObjectiveType }) {
  return (
    <div
      className={cn(
        "px-5 py-10 group relative text-white w-72 flex flex-col gap-5",
        objective.className
      )}
    >
      <objective.Icon className="size-12 mx-auto" />
      <div className="flex items-center gap-2.5">
        <span className="text-6xl font-bold uppercase text-left">
          {objective.index}
        </span>
        <span className="uppercase text-lg font-medium hyphens-auto" lang="en">
          {objective.name}
        </span>
      </div>
      <span className="leading-[160%] text-lg font-light">
        {objective.description}
      </span>
      <Link
        href={`/publications?objective=${objective.key}`}
        className="inline-flex items-start border-b w-fit border-transparent border-solid hover:border-current py-2 gap-1"
      >
        See Publications <ArrowRight strokeWidth={1.5} />
      </Link>
    </div>
  );
}

export default ObjectiveCard;
