import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";
import { Globe, Mail } from "lucide-react";

export type TeamMember = {
  img?: string;
  name: string;
  education: string;
  designation: string;
  department: string;
  institute: string;
  role: string;
  email: string;
  website: string;
};

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col font-light border border-solid rounded-md min-w-72 max-w-80 bg-background text-foreground gap-5 py-5 cusro">
      <span className="mx-5 uppercase text-xs text-gray-500 bg-gray-200 px-2 py-1 font-medium rounded-full w-fit h-fit">
        {member.role}
      </span>
      <div className="flex flex-row items-center justify-between gap-5 px-5">
        <div className="flex flex-col">
          <span className="text-xl">{member.name}</span>
          <span>{member.designation}</span>
          <Link
            href={`mailto:${member.email}`}
            className="text-primary underline inline-flex items-end gap-1"
          >
            <Mail size={18} strokeWidth={1.5} />
            <span>{member.email}</span>
          </Link>
          <Link
            href={member.website}
            target="__new"
            className="inline-flex items-end gap-1 text-primary underline"
          >
            <Globe size={18} strokeWidth={1.25} /> <span>Website</span>
          </Link>
        </div>
        {member.img ? (
          <Image
            src={member.img}
            width={96}
            height={96}
            alt={member.name}
            className="rounded-full size-24 object-cover"
          />
        ) : null}
      </div>
      <Separator />
      <div className="px-5 flex flex-col">
        <span>{member.education}</span>
        <span>{member.department}</span>
        <span>{member.institute}</span>
      </div>
    </div>
  );
}

export default TeamMemberCard;
