import { Code2, Cpu, Database, Users } from "lucide-react";

import type { SkillCategory } from "../portfolio-data";

const categoryIcons = [Cpu, Code2, Database, Users] as const;

type SkillGroupProps = {
  category: SkillCategory;
  index: number;
};

export function SkillGroup({ category, index }: SkillGroupProps) {
  const Icon = categoryIcons[index % categoryIcons.length];

  return (
    <article className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-950/5 sm:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:hover:border-violet-400/40 dark:hover:shadow-black/20">
      <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/20">
        <Icon aria-hidden="true" size={22} />
      </div>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-950 dark:text-white">
        {category.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {category.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-400/40 dark:hover:bg-violet-400/10 dark:hover:text-violet-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
