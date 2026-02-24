/**
 * Projects Component
 * 
 * Showcases featured projects in a horizontal scrollable carousel.
 * Features:
 * - Horizontal scroll gallery (carousel)
 * - Next/Previous navigation buttons
 * - Project cards with descriptions, tech stacks, and links
 * - Responsive design (full width mobile, limited desktop)
 * - Conditional button rendering (hides links if not provided)
 * - Smooth scroll behavior on desktop
 */

import { useRef } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/data";

/**
 * Section title component with decorative divider
 */
function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-6 mb-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="h-px flex-1 bg-slate-100" />
    </div>
  );
}

/**
 * Check if a link is valid (not empty or "#")
 */
function isValidLink(href) {
  return Boolean(href) && href !== "#";
}

/**
 * Action button component for project links
 * - Only renders if href is provided
 * - Supports solid and outline styles
 * - Opens links in new tabs with security attributes
 */
function ActionButton({ href, children, outline, icon }) {
  const base =
    "inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-medium border transition-all text-xs sm:text-sm";
  const solid =
    "bg-[#7c3aed] text-white border-[#7c3aed] hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-[#7c3aed]/20";
  const ghost =
    "bg-white text-slate-600 border-slate-200 hover:border-[#7c3aed] hover:text-[#7c3aed]";

  // Don't render if no valid link
  if (!isValidLink(href)) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} ${outline ? ghost : solid}`}
    >
      {icon}
      {children}
    </a>
  );
}

/**
 * Main Projects section component
 * - Manages carousel scroll functionality
 * - Displays projects in horizontal layout
 * - Provides navigation controls
 */
export default function Projects() {
  const scrollerRef = useRef(null);

  /**
   * Scroll the carousel by a percentage of its width
   * Direction: -1 for left, 1 for right
   */
  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll approximately one card width
    const amount = Math.round(el.clientWidth * 0.9) * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with title and scroll controls */}
        <div className="flex items-end justify-between gap-6 mb-6">
          <SectionTitle title="Featured Projects" />

          {/* Left/Right scroll arrows (desktop only) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Scroll left button */}
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Scroll right button */}
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-[#7c3aed]/40 hover:text-[#7c3aed] transition flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal scrollable carousel container */}
        <div
          ref={scrollerRef}
          className="
            -mx-4 sm:-mx-6
            px-4 sm:px-6
            flex gap-4 sm:gap-6
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-2
          "
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",  // Hide scrollbar in Firefox
          }}
        >
          
          {/* CSS to hide scrollbar in Chrome/Safari */}
          <style>{`
            #projects .hide-scrollbar::-webkit-scrollbar { display: none; }
          `}</style>

          {/* Projects list wrapper */}
          <div className="hide-scrollbar flex gap-4 sm:gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="
                  snap-start
                  w-[90vw] sm:w-[70%] md:w-[360px]
                  flex-shrink-0
                  group
                  bg-white
                  border border-slate-200
                  rounded-3xl
                  p-4 sm:p-6 md:p-8
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  max-w-full
                "
              >
                {/* Project icon (first letter of title) */}
                <div className="w-12 h-12 rounded-2xl bg-[#7c3aed] flex items-center justify-center text-white mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {p.title.charAt(0)}
                </div>

                {/* Project title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900 line-clamp-3">
                  {p.title}
                </h3>

                {/* Project description */}
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 md:mb-8 line-clamp-6">
                  {p.description}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#7c3aed] bg-[#7c3aed]/5 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons for live demo and code */}
                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {/* Demo link (conditionally rendered) */}
                  <ActionButton
                    href={p.links?.live}
                    icon={<ExternalLink size={14} />}
                  >
                    Demo
                  </ActionButton>

                  {/* GitHub code link (conditionally rendered) */}
                  <ActionButton
                    href={p.links?.github}
                    outline
                    icon={<Github size={14} />}
                  >
                    Code
                  </ActionButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile hint */}
        <div className="mt-4 text-sm text-slate-400 font-medium md:hidden">
          Swipe to browse projects →
        </div>
      </div>
    </section>
  );
}
