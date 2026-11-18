import { ArrowDown, ArrowUpRight, Download } from "lucide-react";

import { ProfileImage } from "./ProfileImage";
import { SectionScrollButton } from "./SectionScrollButton";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-violet-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/40" />
      <div className="absolute left-[-10rem] top-24 -z-10 size-[30rem] rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-600/15" />
      <div className="absolute bottom-[-12rem] right-[-8rem] -z-10 size-[32rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-500/10" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.16] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div className="max-w-4xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-700 shadow-sm backdrop-blur dark:border-violet-400/25 dark:bg-white/5 dark:text-violet-200">
            Full-Stack & AI Engineer
            <span className="size-1.5 rounded-full bg-emerald-500" />
            IoT
          </p>

          <h1 className="mt-8 text-balance text-5xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-7xl lg:text-[6.5rem] dark:text-white">
            Victor
            <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent">
              Anyadiegwu.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9 dark:text-slate-300">
            I build end-to-end products that connect thoughtful interfaces,
            resilient backend systems, and intelligent AI workflows.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <SectionScrollButton
              sectionId="portfolio"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-300"
            >
              Explore my work
              <ArrowDown aria-hidden="true" size={17} />
            </SectionScrollButton>
            <a
              href="/documents/victor-anyadiegwu-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-bold text-slate-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-violet-300 dark:hover:text-violet-200"
            >
              View résumé
              <Download aria-hidden="true" size={17} />
            </a>
            <SectionScrollButton
              sectionId="contact"
              className="inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-700 transition hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:text-slate-300 dark:hover:text-violet-200"
            >
              Let&apos;s work together
              <ArrowUpRight aria-hidden="true" size={17} />
            </SectionScrollButton>
          </div>

          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              ["3", "Engineering domains"],
              ["6+", "Selected products"],
              ["2026", "Building now"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-white/60 p-4 backdrop-blur dark:border-white/10 dark:bg-white/[0.04]"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {label}
                </dt>
                <dd className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-400/30 to-emerald-300/30 blur-2xl dark:from-violet-500/20 dark:to-emerald-400/10" />
          <ProfileImage />
          <div className="absolute -bottom-5 -left-7 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/90">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Based in
            </p>
            <p className="mt-1 text-sm font-bold text-slate-950 dark:text-white">
              Nigeria · Remote ready
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
