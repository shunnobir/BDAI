import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import React from "react";

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
    <div className="p-5 group">
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-3 max-w-[650px] gap-5 bg-white min-h-60 items-center",
          objective.className
        )}
      >
        <div className="p-5 border borde-solid rounded-full size-32 border-current sm:group-odd:order-2 self-center justify-self-center">
          <objective.Icon className="size-20 mx-auto" />
        </div>
        <div className="flex flex-col col-span-2 gap-5 sm:group-odd:order-1">
          <div className="flex items-center gap-2.5 w-72">
            <span className="text-6xl font-bold"> {objective.index}</span>
            <span className="uppercase font-medium">{objective.name}</span>
          </div>
          <span className="text-foreground text-justify">
            {objective.description}
          </span>
          <a
            href={`/publications?objective=${objective.key}`}
            className="mt-10 inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            See Publications <ArrowRight className="size-6" />
          </a>
        </div>
      </div>
      {/* <div
        className={cn(
          "absolute hidden flex-col gap-5 p-5 group-hover:flex w-0 h-0 top-0 left-0 group-hover:w-full group-hover:h-auto group-hover:min-h-full group-hover:z-10 group-hover:shadow-md",
          objective.className
        )}
      >
        <span className="text-2xl font-bold text-white/60">
          Objective {objective.index}
        </span>
        <span className="text-sm">{objective.description}</span>
      </div> */}
    </div>
  );
}

export default ObjectiveCard;
