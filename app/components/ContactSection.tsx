import { Mail, MapPin, Phone } from "lucide-react";

import { ProfileImage } from "./ProfileImage";
import { SocialLinks } from "./SocialLinks";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-10 dark:bg-slate-950"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[32rem] w-[48rem] -translate-x-1/2 rounded-full bg-violet-200/30 blur-3xl dark:bg-violet-700/10" />

      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 shadow-2xl shadow-violet-950/15 lg:grid-cols-[1.15fr_0.85fr] dark:border-white/10">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-violet-300">
              Let&apos;s build together
            </p>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Have a useful problem worth solving?
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              I&apos;m open to full-stack and AI engineering opportunities,
              collaborative product work, and ambitious systems that need a
              thoughtful technical foundation.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:victoranyadiegwu610@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <Mail aria-hidden="true" size={17} />
                Send an email
              </a>
              <a
                href="tel:+2348102680872"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-violet-300 hover:text-violet-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300"
              >
                <Phone aria-hidden="true" size={17} />
                Call Victor
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:border-l lg:border-t-0">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center lg:flex-col lg:items-start xl:flex-row xl:items-center">
              <ProfileImage compact />
              <div>
                <p className="text-xl font-bold text-white">Victor Anyadiegwu</p>
                <p className="mt-1 text-sm text-violet-200">Full-Stack & AI Engineer</p>
                <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin aria-hidden="true" size={15} />
                  Nigeria · Available remotely
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3 border-y border-white/10 py-7 text-sm">
              <a
                href="mailto:victoranyadiegwu610@gmail.com"
                className="flex items-center gap-3 text-slate-300 transition hover:text-violet-200"
              >
                <Mail aria-hidden="true" size={17} />
                victoranyadiegwu610@gmail.com
              </a>
              <a
                href="tel:+2348102680872"
                className="flex items-center gap-3 text-slate-300 transition hover:text-violet-200"
              >
                <Phone aria-hidden="true" size={17} />
                (+234) 810 268 0872
              </a>
            </div>

            <div className="mt-7">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
