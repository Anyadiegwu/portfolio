import { experiences } from "../portfolio-data";
import { ExperienceCard } from "./ExperienceCard";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-y border-slate-200/80 bg-slate-50 px-5 py-24 sm:px-8 sm:py-28 lg:px-10 dark:border-white/10 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About me"
              title="Engineering at the intersection of software, intelligence, and connected systems."
              description="I turn ambitious ideas into modular products that remain useful under real constraints—from low-bandwidth commerce to context-aware AI applications."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                My work spans applied AI, full-stack web engineering, and the
                Internet of Things. I focus on clear architecture, guarded APIs,
                and interfaces that make sophisticated systems feel simple.
              </p>
              <p>
                Alongside a B.Eng. in Computer Engineering at Ahmadu Bello
                University, Zaria, I have gained hands-on experience across AI
                engineering, enterprise cloud infrastructure, and competitive
                national innovation programs.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-100 via-white to-emerald-50 p-7 sm:p-9 dark:border-violet-400/20 dark:from-violet-950/60 dark:via-slate-950 dark:to-emerald-950/30">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-300">
              How I work
            </p>
            <blockquote className="mt-5 text-balance text-2xl font-bold leading-snug tracking-tight text-slate-950 sm:text-3xl dark:text-white">
              “Build the smallest clear system that can grow into the right one.”
            </blockquote>
            <ul className="mt-8 grid gap-3 text-sm font-semibold text-slate-700 sm:grid-cols-2 dark:text-slate-200">
              {[
                "Modular by default",
                "Evidence over assumptions",
                "Accessible interfaces",
                "Guardrails before scale",
              ].map((principle) => (
                <li
                  key={principle}
                  className="rounded-2xl border border-white/80 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  {principle}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-600 dark:text-violet-300">
                Experience & milestones
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl dark:text-white">
                A growing practice built through delivery.
              </h3>
            </div>
          </div>
          <div className="grid gap-5">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.role}-${experience.organization}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
