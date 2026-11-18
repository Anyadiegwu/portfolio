import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";

import type { Project } from "../portfolio-data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-violet-300 hover:shadow-2xl hover:shadow-violet-950/10 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-violet-400/40 dark:hover:shadow-black/30">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-200 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-70" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full bg-violet-50 px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-400/10 dark:text-violet-300"
            >
              {technology}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-300"
          >
            <ExternalLink aria-hidden="true" size={15} />
            Live demo
          </a>
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:border-white/15 dark:text-slate-300 dark:hover:border-violet-300 dark:hover:text-violet-200"
          >
            <Code2 aria-hidden="true" size={15} />
            Source
          </a>
        </div>
      </div>
    </article>
  );
}
