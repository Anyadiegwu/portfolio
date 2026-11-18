"use client";

import type { ComponentPropsWithoutRef } from "react";

import type { SectionId } from "../portfolio-data";

type SectionScrollButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "onClick" | "type"
> & {
  sectionId: SectionId;
  onScrolled?: () => void;
};

export function SectionScrollButton({
  sectionId,
  onScrolled,
  children,
  ...buttonProps
}: SectionScrollButtonProps) {
  const scrollToSection = () => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    onScrolled?.();
  };

  return (
    <button type="button" onClick={scrollToSection} {...buttonProps}>
      {children}
    </button>
  );
}
