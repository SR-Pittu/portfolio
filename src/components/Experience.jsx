/**
 * Experience Component
 * 
 * Displays work experience in a timeline/git-style interface.
 * Features:
 * - Git-inspired UI with commit hashes and branch status
 * - Expandable job cards with animations
 * - Timeline visualization with connecting line
 * - Technology tags for each position
 * - Bullet-point achievements that expand on click
 * - System status indicator showing current employment
 */

import React, { useState } from "react";
import { experience } from "../data/data";

/**
 * Section title component with decorative divider line
 */
function SectionTitle({ title }) {
  return (
    <div className="flex items-center gap-6 mb-8">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900">
        {title}
      </h2>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

/**
 * Generate a deterministic commit-style hash from job information
 * Used for the git-inspired UI elements
 */
function makeCommitHash(job, idx) {
  const seed = `${job.company}-${job.role}-${job.dates}-${idx}`;
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return `commit_${h.toString(16).slice(0, 7)}`;
}

/**
 * Individual experience card component
 * - Expandable to show full job details
 * - Git-themed visual hierarchy (commit hash, dates)
 * - Lists technology stack and achievements
 */
function ExperienceCard({ job, idx }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const commit = makeCommitHash(job, idx);

  return (
    <div className="relative pl-10 group mb-6 last:mb-0">
      {/* Visual timeline dot that changes on expand */}
      <div
        className={`
          absolute left-[10px] top-1.5 w-3.5 h-3.5 rounded-full border-[3px] border-white z-10
          transition-all duration-300 shadow-[0_0_0_1px_#6366f1]
          ${isExpanded ? "bg-indigo-600 scale-125" : "bg-indigo-300 group-hover:bg-indigo-400"}
        `}
      />

      {/* Clickable card container */}
      <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        {/* Header with commit hash and date */}
        <div className="flex items-center gap-2 mb-1">
          <span
            className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded transition-colors  ${isExpanded ? "bg-indigo-600 text-white" : "bg-slate-100 text-green-500"
              }`}
          >
            {commit}
          </span>

          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {job.dates}
          </span>
        </div>

        {/* Card content - changes color and style on expand */}
        <div
          className={`
            p-4 rounded-xl border transition-all duration-300
            ${isExpanded
              ? "bg-slate-900 border-slate-800 shadow-xl translate-x-1"
              : "bg-white border-slate-100 hover:border-indigo-200 hover:shadow-md"
            }
          `}
        >
          {/* Job title and company info */}
          <div className="flex justify-between items-start">
            <div>
              <h4
                className={`text-base font-bold tracking-tight transition-colors ${isExpanded ? "text-white" : "text-slate-900"
                  }`}
              >
                {job.role}
              </h4>

              <p
                className={`text-xs font-medium ${isExpanded ? "text-slate-400" : "text-slate-500"
                  }`}
              >
                {job.company}
                <span className="mx-1 opacity-30">•</span>
                {job.location}
              </p>
            </div>

            {/* Expand/collapse indicator */}
            <div
              className={`text-[10px] font-bold uppercase tracking-tighter ${isExpanded ? "text-indigo-400" : "text-slate-300 opacity-0 group-hover:opacity-100"
                }`}
            >
              {isExpanded ? "Close" : "Expand"}
            </div>
          </div>

          {/* Technology tags - always visible */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {job.tech?.map((t) => (
              <span
                key={t}
                className={`
        px-2 py-0.5 rounded text-[9px] font-mono border transition-colors
        ${isExpanded
                    ? "bg-slate-800 text-indigo-300 border-slate-700"
                    : "bg-slate-50 text-slate-500 border-slate-200 group-hover:text-indigo-600"
                  }
      `}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Expanded content - achievements/bullets (hidden by default) */}
          <div
            className={`
              overflow-hidden transition-all duration-500
              ${isExpanded ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}
            `}
          >
            <div className="space-y-3 border-t border-slate-800 pt-4">
              {job.bullets?.map((bullet, i) => (
                <div key={i} className="flex gap-3 text-[12px] text-slate-300">
                  <span className="text-indigo-500 font-mono">$</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Experience section component
 * - Displays timeline of work experience
 * - Git-inspired sidebar with system status
 * - Scrollable timeline with connected dots
 */
export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Experience" />

        {/* Main container card */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 md:p-10 shadow-[0_10px_40px_rgba(2,6,23,0.06)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar - Git-style system info and current status */}
            <div className="lg:col-span-4 lg:sticky lg:top-10 h-fit">

              {/* Live status indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                System Live
              </div>

              {/* Section heading */}
              <h3 className="text-2xl font-black text-slate-900 tracking-tighter mb-4">
                Professional History
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                Every role is a new branch in the development cycle.
              </p>

              {/* Git-style status box */}
              <div className="space-y-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">

                <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest">
                  <span>Branch</span>
                  <span className="text-indigo-500">main</span>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest">
                  <span>Status</span>
                  <span className="text-green-500">Up to date</span>
                </div>

                {/* Current position indicator */}
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 bg-indigo-50/50 p-2.5 rounded-lg border border-indigo-100/50">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Currently at Hillsoft Business Solutions.
                </div>
              </div>

              {/* Git command footer */}
              <div className="mt-12 pt-8 border-t border-slate-100 hidden lg:block">
                <div className="font-mono text-indigo-400 text-sm mb-1 font-bold">
                  git push origin main
                </div>
              </div>

            </div>

            {/* Timeline column - experience cards */}
            <div className="lg:col-span-8">
              <div className="relative pr-4 max-h-[calc(100vh-280px)] overflow-y-auto">
                {/* Vertical timeline line connecting all items */}
                <div className="absolute left-[16.5px] top-2 bottom-0 w-[1px] bg-slate-200" />

                {/* Experience card list */}
                <div className="relative">
                  {experience.map((job, idx) => (
                    <ExperienceCard key={idx} job={job} idx={idx} />
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}