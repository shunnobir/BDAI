import ObjectiveCard, { ObjectiveType } from "@/components/objective-card";
import SectionHeader from "@/components/section-header";
import TeamMemberCard from "@/components/team-member-card";
import { teamMembers } from "@/lib/team";
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
          <span className="text-3xl sm:text-4xl md:text-5xl text-center uppercase leading-[140%]">
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
    </div>
  );
}
