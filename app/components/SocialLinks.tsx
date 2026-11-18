import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

const socialLinks: readonly SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-anyadiegwu-8286a9238",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "https://github.com/Anyadiegwu",
    icon: FaGithub,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/iam_veek_thor",
    icon: FaXTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/veek__thor",
    icon: FaInstagram,
  },
];

export function SocialLinks() {
  return (
    <ul className="flex flex-wrap gap-3" aria-label="Social profiles">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-50 hover:text-violet-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-300 dark:hover:bg-violet-400/10 dark:hover:text-violet-200"
          >
            <Icon aria-hidden="true" size={19} />
          </a>
        </li>
      ))}
    </ul>
  );
}
