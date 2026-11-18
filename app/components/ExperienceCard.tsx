import { CalendarDays } from "lucide-react";

import type { Experience } from "../portfolio-data";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <article className="group relative grid gap-5 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-950/5 sm:p-8 lg:grid-cols-[4rem_1fr] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-400/40 dark:hover:shadow-black/20">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-100 text-sm font-black text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white sm:size-14 dark:bg-violet-400/10 dark:text-violet-300 dark:group-hover:bg-violet-400 dark:group-hover:text-slate-950">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              {experience.role}
            </h3>
            <p className="mt-1 font-medium text-violet-600 dark:text-violet-300">
              {experience.organization}
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
            <CalendarDays aria-hidden="true" size={14} />
            {experience.period}
          </span>
        </div>

        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
          {experience.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Experience highlights">
          {experience.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
