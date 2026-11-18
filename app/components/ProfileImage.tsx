import Image from "next/image";

type ProfileImageProps = {
  compact?: boolean;
};

export function ProfileImage({ compact = false }: ProfileImageProps) {
  const sizeClass = compact
    ? "size-28 sm:size-32"
    : "size-44 sm:size-52 lg:size-64";

  return (
    <div
      className={`relative ${sizeClass} shrink-0 overflow-hidden rounded-[2rem] border border-white/70 bg-slate-200 shadow-2xl shadow-violet-950/15 ring-8 ring-violet-500/10 dark:border-white/10 dark:bg-slate-800 dark:shadow-black/30 dark:ring-violet-400/10`}
    >
      <Image
        src="/images/victor-anyadiegwu.webp"
        alt="Victor Anyadiegwu"
        fill
        sizes={compact ? "(min-width: 640px) 128px, 112px" : "(min-width: 1024px) 256px, (min-width: 640px) 208px, 176px"}
        className="object-cover object-[center_18%]"
      />
    </div>
  );
}
