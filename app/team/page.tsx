import SectionHeader from "@/components/section-header";
import TeamMemberCard from "@/components/team-member-card";
import { teamMembers } from "@/lib/team";
import React from "react";

function Page() {
  return (
    <main className="fit-frame pt-10 pb-10 flex flex-col gap-10" id="team">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-5xl font-bold text-center">
          Meet Our Team of Researchers
        </h1>
        <span className="font-light text-center text-xl max-w-[650px]">
          Our team brings researchers from diverse academic and professional
          fields. Collectively, with more than 15+ years of experience, 40+
          published articles, and over 350 citations, our team reflects a strong
          commitment to impactful, and collaborative research.
        </span>
      </div>
      <SectionHeader className="text-left">Project Managers</SectionHeader>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {teamMembers
          .filter((m) => m.role.toLowerCase() !== "member")
          .map((member) => {
            return (
              <TeamMemberCard
                member={member}
                key={member.email}
                className="grow shrink-0"
              />
            );
          })}
      </section>

      <SectionHeader className="text-left">Project Members</SectionHeader>
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
        {teamMembers
          .filter((m) => m.role.toLowerCase() === "member")
          .map((member) => {
            return (
              <TeamMemberCard
                member={member}
                key={member.email}
                className="grow shrink-0"
              />
            );
          })}
      </section>
    </main>
  );
}

export default Page;
