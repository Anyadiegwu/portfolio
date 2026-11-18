import { projects } from "../portfolio-data";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 border-y border-slate-200/80 bg-slate-50 px-5 py-24 sm:px-8 sm:py-28 lg:px-10 dark:border-white/10 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected projects"
          title="Products designed to solve, teach, automate, and delight."
          description="A selection of full-stack, AI-assisted, and frontend products—each shaped around a concrete user experience."
          centered
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
