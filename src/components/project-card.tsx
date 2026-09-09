"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import { Icons } from "@/components/icons";

function cleanDescriptionForAlt(desc: string): string {
  // Strip markdown links [Text](url) to just Text
  let cleaned = desc.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Strip other markdown characters
  cleaned = cleaned.replace(/[*_`#]/g, "");
  // Get the first sentence
  const sentenceEnd = cleaned.indexOf(".");
  if (sentenceEnd !== -1) {
    cleaned = cleaned.substring(0, sentenceEnd);
  }
  return cleaned.trim();
}

function formatMediaSrc(src?: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/")) {
    return src;
  }
  // Check if filename has no extension
  if (!src.includes(".")) {
    return `/${src}.png`;
  }
  return `/${src}`;
}

function ProjectMedia({
  video,
  image,
  title,
  alt,
  priority = false,
}: {
  video?: string;
  image?: string;
  title: string;
  alt: string;
  priority?: boolean;
}) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formattedVideo = formatMediaSrc(video);
  const formattedImage = formatMediaSrc(image);

  // Play video smoothly on hover to avoid hogging bandwidth on page load
  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  if (formattedVideo) {
    return (
      <div
        className="relative w-full h-48 bg-zinc-950 overflow-hidden group/media"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <video
          ref={videoRef}
          src={formattedVideo}
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-48 object-cover transition-transform duration-300 group-hover/media:scale-102"
          title={`${title} - Video demonstration by Pasindu Piumal`}
        />
        {!isHovered && (
          <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold border border-white/20 shadow-md">
              <span className="text-[10px]">▶</span>
              <span>Preview Demo</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (formattedImage && !imageError) {
    return (
      <div className="relative w-full h-48 bg-muted overflow-hidden">
        <Image
          src={formattedImage}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-contain transition-transform duration-300 group-hover:scale-102"
          onError={() => setImageError(true)}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          quality={80}
        />
      </div>
    );
  }

  const initials = title
    .split(/[\s\-–—]+/)
    .slice(0, 2)
    .map((w: string) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-muted flex flex-col items-center justify-center gap-3 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--primary) / 0.5) 0%, transparent 50%)`
      }} />
      <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      {/* Initials badge */}
      <div className="relative size-16 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center shadow-sm">
        <span className="text-xl font-black text-primary/70 select-none">{initials || "?"}</span>
      </div>
      <span className="relative text-[11px] font-medium text-muted-foreground/80 text-center px-4 line-clamp-1">{title}</span>
    </div>
  );
}

function renderLinkIcon(type: string, icon?: React.ReactNode) {
  if (icon) return icon;
  const t = type.toLowerCase();
  if (t.includes("source") || t.includes("github") || t.includes("code")) {
    return <Icons.github className="size-3" />;
  }
  if (t.includes("store") || t.includes("chrome") || t.includes("marketplace")) {
    return <Icons.store className="size-3" />;
  }
  return <Icons.globe className="size-3" />;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  priority?: boolean;
  links?: readonly {
    icon?: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  priority = false,
  links,
  className,
}: Props) {
  const router = useRouter();
  const isClickable = Boolean(href && href !== "#");
  const isInternal = href?.startsWith("/");

  const cleanDesc = cleanDescriptionForAlt(description);
  const descriptiveAlt = cleanDesc
    ? `${title} - ${cleanDesc} by Pasindu Piumal`
    : `${title} project screenshot by Pasindu Piumal`;

  const handleCardClick = (e: React.MouseEvent) => {
    if (!isClickable || !href) return;
    // Don't trigger card click if clicking inside an interactive link/button
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }

    if (isInternal) {
      router.push(href);
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden transition-all duration-200 group",
        isClickable && "hover:ring-2 cursor-pointer hover:ring-muted hover:shadow-md",
        className
      )}
    >
      <div className="relative shrink-0">
        {isClickable && href ? (
          <Link
            href={href}
            {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            className="block"
          >
            <ProjectMedia
              video={video}
              image={image}
              title={title}
              alt={descriptiveAlt}
              priority={priority}
            />
          </Link>
        ) : (
          <div className="block">
            <ProjectMedia
              video={video}
              image={image}
              title={title}
              alt={descriptiveAlt}
              priority={priority}
            />
          </div>
        )}

        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2 z-10">
            {links.map((l, idx) => (
              <Link
                href={l.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${l.type} - ${title}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex"
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90 min-h-[26px] py-1 px-2.5 shadow-xs"
                  variant="default"
                >
                  {renderLinkIcon(l.type, l.icon)}
                  {l.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            {isClickable ? (
              <Link
                href={href!}
                {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="font-semibold text-foreground group-hover:text-primary group-hover:underline transition-colors"
              >
                {title}
              </Link>
            ) : (
              <h3 className="font-semibold">{title}</h3>
            )}
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {isClickable && (
            <Link
              href={href!}
              {...(isInternal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden />
            </Link>
          )}
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
