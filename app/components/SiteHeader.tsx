"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navigation } from "../portfolio-data";
import { SectionScrollButton } from "./SectionScrollButton";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  useEffect(() => {
    const updatePageState = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));

      const sectionOffset = window.innerHeight * 0.35;
      let visibleSection = "home";

      for (const item of navigation) {
        const section = document.getElementById(item.sectionId);
        if (section && section.getBoundingClientRect().top <= sectionOffset) {
          visibleSection = section.id;
        }
      }

      setActiveSection(visibleSection);
    };

    updatePageState();
    window.addEventListener("scroll", updatePageState, { passive: true });
    window.addEventListener("resize", updatePageState);

    return () => {
      window.removeEventListener("scroll", updatePageState);
      window.removeEventListener("resize", updatePageState);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-violet-600 via-fuchsia-500 to-emerald-400"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
          aria-label="Primary navigation"
        >
          <SectionScrollButton
            sectionId="home"
            onScrolled={closeMenu}
            aria-label="Go to the home section"
            className="cursor-pointer text-xl font-black tracking-tight text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 dark:text-white"
          >
            Victor<span className="text-violet-600 dark:text-violet-300">.</span>
          </SectionScrollButton>

          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <li key={item.sectionId}>
                  <SectionScrollButton
                    sectionId={item.sectionId}
                    aria-current={isActive ? "location" : undefined}
                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 ${
                      isActive
                        ? "bg-violet-100 text-violet-700 dark:bg-violet-400/15 dark:text-violet-200"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </SectionScrollButton>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-300 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-violet-400/50 dark:hover:text-violet-200"
              aria-label="Toggle color theme"
            >
              <Moon aria-hidden="true" size={18} className="dark:hidden" />
              <Sun aria-hidden="true" size={18} className="hidden dark:block" />
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-violet-300 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 md:hidden dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </nav>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="border-t border-slate-200/70 bg-white px-5 py-4 md:hidden dark:border-white/10 dark:bg-slate-950"
            aria-label="Mobile navigation"
          >
            <ul className="mx-auto grid max-w-7xl gap-1">
              {navigation.map((item) => (
                <li key={item.sectionId}>
                  <SectionScrollButton
                    sectionId={item.sectionId}
                    onScrolled={closeMenu}
                    className="block w-full cursor-pointer rounded-2xl px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:bg-violet-50 hover:text-violet-700 dark:text-slate-200 dark:hover:bg-violet-400/10 dark:hover:text-violet-200"
                  >
                    {item.label}
                  </SectionScrollButton>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
