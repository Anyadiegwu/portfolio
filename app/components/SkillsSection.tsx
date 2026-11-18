import { skillCategories } from "../portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { SkillGroup } from "./SkillGroup";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-10 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="A versatile toolkit for complete, production-ready systems."
          description="I move comfortably between product interfaces, backend services, intelligent retrieval, and the infrastructure that keeps them dependable."
          centered
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SkillGroup key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
