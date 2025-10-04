import ObjectiveCard, { ObjectiveType } from "@/components/objective-card";
import SectionHeader from "@/components/section-header";
import TeamMemberCard, { TeamMember } from "@/components/team-member-card";
import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Dot } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const objectives: ObjectiveType[] = [
    {
      key: "ob1",
      name: "Data Quality Measurement Framework",
      description:
        "Develop an open data quality measurement framework to assess the status-quo of Bangladesh (BD) open data.",
      Icon: DocumentChartBarIcon,
      index: 1,
      className: "bg-red-600",
    },
    {
      key: "ob2",
      name: "SMART Data Ecosystem Development",
      description:
        "Develop a full-fledged digital data ecosystem to produce, collect, manage, integrate, publish, and analyze sustainable, meaningful, accessible, reusable, and traceable (SMART) BD data. The goal is to ensure that the data is semantically enriched, accessible, analytically compatible, self-explorable, and interoperable.",
      Icon: GlobeAltIcon,
      index: 2,
      className: "bg-blue-600",
    },
    {
      key: "ob3",
      name: "FAIR Sector-specific Knowledge Graphs",
      description:
        "Produce sector-specific knowledge graphs (KGs) following the FAIR (Findability, Accessibility, Interoperability, and Reusability) principles. Current focus areas include socio-economic, agriculture, healthcare, tourism, and education sectors, aiming to support SDGs 2, 4, 9, 10, and 17.",
      Icon: BeakerIcon,
      index: 3,
      className: "bg-green-600",
    },
    {
      key: "ob4",
      name: "KG-driven Analytics and LLM Validation",
      description:
        "Enable intra- and inter-sector KGs descriptive, predictive, and prescriptive analytics, and validate large language models (LLMs) through knowledge graphs.",
      Icon: ChartBarIcon,
      index: 4,
      className: "bg-orange-600",
    },
    {
      key: "ob5",
      name: "AI-powered Decision Support Tools",
      description:
        "Develop intuitive AI-powered tools with natural language interfaces and intelligent agents, leveraging KGs and LLMs to assist farmers, educators, healthcare providers, policymakers, and business professionals in making data-driven decisions easily.",
      Icon: SparklesIcon,
      index: 5,
      className: "bg-purple-600",
    },
    {
      key: "ob6",
      name: "Capacity Building and Outreach",
      description:
        "Conduct comprehensive workshops, training programs, publications, and engagement activities to educate and build capacity among policymakers, researchers, educators, and practitioners on the applications and benefits of the SMART data ecosystem, knowledge graphs, and AI-driven analytics.",
      Icon: AcademicCapIcon,
      index: 6,
      className: "bg-pink-600",
    },
  ];

  const teamMembers: TeamMember[] = [
    {
      img: "https://firebasestorage.googleapis.com/v0/b/bike-csecu-server.appspot.com/o/images%2Fresearchers%2Fimage-1738823888977-ghnkko.jpg?alt=media&token=d542e2bc-aaff-4330-a03a-b62114117c80",
      name: "Dr. Rudra Pratap Deb Nath",
      education: "Ph.D (Denmark), Ph.D (Spain)",
      designation: "Associate Professor",
      department: "Department of Computer Science and Engineering",
      institute: "University of Chittagong",
      role: "Sub-Project Manager",
      email: "rudra@cu.ac.bd",
      website: "https://cu.ac.bd/public_profile/index.php?ein=5168",
    },
    {
      img: "https://cu.ac.bd/assets/image/faculty_staff_users/935_Y8JBVC74VP.jpg",
      name: "Dr. Abu Nowshed Chy",
      education: "Ph.D (Japan)",
      designation: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      institute: "University of Chittagong",
      role: "Assistant Sub-Project Manager",
      email: "nowshed@cu.ac.bd",
      website: "https://cu.ac.bd/public_profile/index.php?ein=5905",
    },
    {
      img: "https://cu.ac.bd/assets/image/faculty_staff_users/40_Q11H4CDWTD.jpg",
      name: "Dr. Md. Mahbubul Islam",
      education: "Ph.D (South Korea)",
      designation: "Associate Professor",
      department: "Department of Computer Science and Engineering",
      institute: "University of Chittagong",
      role: "Member",
      email: "mahbubcse@cu.ac.bd",
      website: "https://cu.ac.bd/public_profile/index.php?ein=5291",
    },
    {
      img: "https://cu.ac.bd/assets/image/faculty_staff_users/45_8Z6DUQK4EF.jpg",
      name: "Shima Chakraborty",
      education: "MS (Engg.)",
      designation: "Assistant Professor",
      department: "Department of Computer Science and Engineering",
      institute: "University of Chittagong",
      role: "Member",
      email: "shimacse@cu.ac.bd",
      website: "https://cu.ac.bd/public_profile/index.php?ein=5295",
    },
  ];

  return (
    <div className="">
      {/* Hero Banner */}
      <section className="w-full bg-primary text-primary-foreground py-28">
        <div className="fit-frame flex flex-col items-center gap-5">
          <span className="text-center text-muted">
            <Link href="https://heat.ugc.gov.bd/" className="hover:underline">
              Higher Education Acceleration and Transformation (HEAT)
            </Link>{" "}
            2025 Winning Project
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl text-center leading-[140%]">
            BDAI: Leveraging BanglaDesh Sectoral Knowledge Graph and Large
            Language Modesl for Artificial Intelligence-Driven Insights
          </span>
          <div className="uppercase flex flex-row items-center gap-2">
            <span className="text-center">Knowledge Graph</span> <Dot />{" "}
            <span className="text-center">Large Language Model</span> <Dot />{" "}
            <span className="text-center">Artificial Intelligence</span>{" "}
          </div>
        </div>
      </section>

      <section
        className="fit-frame pt-10 pb-10 flex flex-col gap-5 items-center"
        id="objectives"
      >
        <SectionHeader>Our Objectives</SectionHeader>
        <div className="flex flex-wrap gap-5 justify-center">
          {objectives.map((objective) => {
            return <ObjectiveCard key={objective.key} objective={objective} />;
          })}
        </div>
      </section>

      <section
        className="fit-frame pt-10 pb-10 flex flex-col gap-5 items-center"
        id="team"
      >
        <SectionHeader>Team</SectionHeader>
        <div className="flex flex-wrap gap-5 justify-center">
          {teamMembers.map((member) => {
            return <TeamMemberCard member={member} key={member.email} />;
          })}
        </div>
      </section>
    </div>
  );
}
