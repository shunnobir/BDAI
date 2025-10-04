import ObjectiveCard, { ObjectiveType } from "@/components/objective-card";
import SectionHeader from "@/components/section-header";
import {
  AcademicCapIcon,
  BeakerIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Dot } from "lucide-react";

export default function Home() {
  const objectives: ObjectiveType[] = [
    {
      key: "ob1",
      name: "Data Quality Measurement Framework",
      description:
        "Develop an open data quality measurement framework to assess the status-quo of Bangladesh (BD) open data.",
      Icon: DocumentChartBarIcon,
      index: 1,
      className: "text-red-500",
    },
    {
      key: "ob2",
      name: "SMART Data Ecosystem Development",
      description:
        "Develop a full-fledged digital data ecosystem to produce, collect, manage, integrate, publish, and analyze sustainable, meaningful, accessible, reusable, and traceable (SMART) BD data. The goal is to ensure that the data is semantically enriched, accessible, analytically compatible, self-explorable, and interoperable.",
      Icon: GlobeAltIcon,
      index: 2,
      className: "text-blue-500",
    },
    {
      key: "ob3",
      name: "FAIR Sector-specific Knowledge Graphs",
      description:
        "Produce sector-specific knowledge graphs (KGs) following the FAIR (Findability, Accessibility, Interoperability, and Reusability) principles. Current focus areas include socio-economic, agriculture, healthcare, tourism, and education sectors, aiming to support SDGs 2, 4, 9, 10, and 17.",
      Icon: BeakerIcon,
      index: 3,
      className: "text-green-500",
    },
    {
      key: "ob4",
      name: "KG-driven Analytics and LLM Validation",
      description:
        "Enable intra- and inter-sector KGs descriptive, predictive, and prescriptive analytics, and validate large language models (LLMs) through knowledge graphs.",
      Icon: ChartBarIcon,
      index: 4,
      className: "text-yellow-500",
    },
    {
      key: "ob5",
      name: "AI-powered Decision Support Tools",
      description:
        "Develop intuitive AI-powered tools with natural language interfaces and intelligent agents, leveraging KGs and LLMs to assist farmers, educators, healthcare providers, policymakers, and business professionals in making data-driven decisions easily.",
      Icon: SparklesIcon,
      index: 5,
      className: "text-purple-500",
    },
    {
      key: "ob6",
      name: "Capacity Building and Outreach",
      description:
        "Conduct comprehensive workshops, training programs, publications, and engagement activities to educate and build capacity among policymakers, researchers, educators, and practitioners on the applications and benefits of the SMART data ecosystem, knowledge graphs, and AI-driven analytics.",
      Icon: AcademicCapIcon,
      index: 6,
      className: "text-pink-500",
    },
  ];

  return (
    <div className="">
      {/* Hero Banner */}
      <section className="w-full bg-primary text-primary-foreground py-28">
        <div className="fit-frame flex flex-col items-center gap-5">
          <span className="text-center text-muted">
            <a href="https://heat.ugc.gov.bd/" className="hover:underline">
              Higher Education Acceleration and Transformation (HEAT)
            </a>{" "}
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

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5 items-center">
        <SectionHeader>Our Objectives</SectionHeader>
        <div className="flex flex-col gap-5 justify-center">
          {objectives.map((objective) => {
            return <ObjectiveCard key={objective.key} objective={objective} />;
          })}
        </div>
      </section>

      {/* <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Components</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          The BDAI sub-project addresses the urgent need for sustainable,
          meaningful, accessible, reusable, and traceable (SMART) data.
          Currently, most data across different sectors in BD is static,
          read-only, and aggregated, with challenges such as non-compliance with
          FAIR principles, semantic heterogeneity, and limited analytical
          compatibility. To resolve these issues, this project proposes an SMART
          data ecosystem powered by KGs and LLMs to enable sustainable data
          management and AI-driven insights across socio-economics, agriculture,
          healthcare, tourism, and education.
        </span>
      </section>

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Activities</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          BDAI’s key activities include collecting data, developing an open data
          quality measurement framework, building an SMART data ecosystem, and
          producing FAIR-compliant sectoral KGs. Additional efforts include
          enabling cross-sector analytics, designing AI tools with natural
          language interfaces and LLMs, and conducting workshops, training
          programs, and publications to build stakeholder capacity.
        </span>
      </section>

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Methods</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          Big data, semantic web technologies, FAIR principles, and KGs will be
          utilized for data integration and semantic enrichment. Advanced
          analytics will leverage LLMs, machine learning, and graph analytics.
          AI tools with natural language interfaces will ensure data
          accessibility and usability.
        </span>
      </section>

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Expected Results</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          BDAI will deliver a functional SMART data ecosystem, enriched KGs,
          intuitive AI tools, and a comprehensive capacity-building framework.
        </span>
      </section>

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Outcomes</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          The initiative will empower stakeholders with actionable, data-driven
          tools while providing researchers with guidelines for adopting a
          KG-centric integration paradigm.
        </span>
      </section>

      <section className="fit-frame pt-10 pb-10 flex flex-col gap-5">
        <h1 className="text-3xl text-center font-medium">Broad Impact</h1>
        <span className="text-center leading-7 tracking-wider text-sm">
          BDAI will transform data management in Bangladesh, promoting a
          sustainable, interoperable, and AI-driven ecosystem. This will enhance
          food security (SDG 2), quality education (SDG 4), digital innovation
          (SDG 9), equitable data access (SDG 10), and cross-sector
          collaboration (SDG 17), driving economic growth and evidence-based
          decision-making.
        </span>
      </section> */}
    </div>
  );
}
