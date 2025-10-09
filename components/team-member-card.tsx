import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Globe, Mail } from "lucide-react";
import { TeamMember } from "@/types";
import { cn } from "@/lib/utils";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/solid";

function TeamMemberCard({
  member,
  className,
}: {
  member: TeamMember;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col font-light   rounded-md bg-background text-foreground gap-5",
        className
      )}
    >
      {member.img ? (
        <div className="">
          <Image
            src={member.img}
            width={96}
            height={96}
            alt={member.name}
            title={member.name}
            className="rounded-md w-full aspect-square object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2.5">
          <Link
            href={`mailto:${member.email}`}
            className="inline-flex items-center justify-center size-6 rounded-full bg-blue-500"
          >
            <EnvelopeIcon className="text-white size-4" />
            {/* <span>{member.email}</span> */}
          </Link>
          <Link
            href={member.website}
            target="__new"
            className="inline-flex items-center justify-center size-6 rounded-full bg-cyan-500"
          >
            <GlobeAltIcon className="text-white size-5" />
            {/* <span>Website</span> */}
          </Link>
          <span className="uppercase text-xs text-primary bg-primary/20 px-2 py-1 font-medium rounded-full w-fit h-fit">
            {member.role}
          </span>
        </div>
        <span className="text-xl font-medium">{member.name}</span>
        <span className="">{member.designation}</span>
        <span className="">{member.education}</span>
        <span className="">{member.department}</span>
        <span className="">{member.institute}</span>
      </div>
    </div>
  );
}

export default TeamMemberCard;
