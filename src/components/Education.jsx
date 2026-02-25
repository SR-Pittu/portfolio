/**
 * Education Component
 * 
 * Displays education history and professional certifications in a two-column layout.
 * Features:
 * - Expandable academic cards showing degrees and coursework
 * - Timeline visualization with connecting line
 * - Certifications display with hover effects
 * - Status indicator for ongoing learning
 * - GPA display for relevance
 */

import React, { useState } from "react";
import { GraduationCap, Award, Terminal, BookText, ChevronDown } from "lucide-react";
import { education, certifications } from "../data/data";

/**
 * Section title component
 */
function SectionTitle({ title }) {
  return (
    <div className="flex flex-col mb-8">
      <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}

/**
 * Academic Card - Expandable education entry
 * - Shows degree, school, dates, and GPA
 * - Expandable to reveal coursework list
 * - Smooth accordion animation
 */
function AcademicCard({ e }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative pl-8 group">

      {/* Timeline dot indicator */}
      <div className="absolute left-[-23px] top-1.5 w-4 h-4 rounded-full border-[3px] border-white bg-slate-200 group-hover:bg-[#7c3aed] group-hover:scale-110 transition-all duration-300 shadow-sm" />

      {/* Card container with hover effects */}
      <div className="group/card relative bg-slate-50/50 border border-slate-100/80 rounded-[1.5rem] p-6 transition-all duration-300 hover:bg-white hover:border-[#7c3aed]/20 hover:shadow-xl hover:shadow-slate-200/40">
        
        {/* Header with dates and GPA */}
        <div className="flex justify-between items-start gap-4 mb-2">
          <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#7c3aed]">
            {e.dates}
          </div>

          {/* GPA badge - only if present */}
          {e.gpa ? (
            <div className="px-2 py-0.5 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-500 shadow-sm bg-green-50 border-green-100 text-green-600">
              GPA: {e.gpa}
            </div>
          ) : null}
        </div>

        {/* Degree and school name */}
        <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover/card:text-[#7c3aed] transition-colors">
          {e.degree}
        </h4>

        <p className="text-slate-500 font-semibold text-sm mt-0.5 mb-4">
          {e.school}
        </p>

        {/* Coursework section - expandable */}
        {e.coursework?.length ? (
          <div>
            {/* Toggle button for coursework */}
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-[#7c3aed] transition-colors"
            >
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
              />
              {isExpanded ? "HIDE COURSEWORK" : "VIEW COURSEWORK"}
            </button>

            {/* Coursework list with smooth accordion animation */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {/* Course tags */}
                  {e.coursework.map((course, idx) => (
                    <span
                      key={`${course}-${idx}`}
                      className="inline-flex items-center px-2 py-1 bg-slate-100/50 border border-slate-200/50 rounded-md text-[10px] font-semibold text-slate-600 transition-all hover:bg-white hover:border-[#7c3aed]/30 hover:text-[#7c3aed]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * Main Education section component
 * - Two-column layout: Education on left, Certifications on right
 * - Responsive design (stacks on mobile)
 * - Background decorative blur element
 */
export default function Education() {
  return (
    <section id="education" className="py-16 selection:bg-[#7c3aed]/10 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Education" />

        {/* Main container with subtle background decoration */}
        <div className="relative bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden">
          
          {/* Decorative blur background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7c3aed]/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />

          {/* Two-column grid layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            
            {/* Left column - Academic Education */}
            <div className="lg:col-span-7 space-y-6">
              {/* Section header with icon */}
              <div className="flex items-center gap-3 mb-2 px-1">
                <div className="p-2 bg-slate-100 rounded-xl text-[#7c3aed]">
                  <GraduationCap size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Academic Journey
                </h3>
              </div>

              {/* Education timeline with connecting line */}
              <div className="relative ml-4 space-y-6">
                <div className="absolute left-[-15px] top-2 bottom-2 w-[2px] bg-slate-100" />

                {/* Map education entries */}
                {education.map((e, index) => (
                  <AcademicCard key={`${e.school}-${e.degree}-${index}`} e={e} />
                ))}
              </div>
            </div>

            {/* Right column - Certifications */}
            <div className="lg:col-span-5 space-y-6">
              {/* Section header with icon */}
              <div className="flex items-center gap-3 mb-2 px-1">
                <div className="p-2 bg-slate-100 rounded-xl text-[#7c3aed]">
                  <Award size={20} />
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight">
                  Certifications
                </h3>
              </div>

              {/* Certifications list */}
              <div className="space-y-4">
                {/* Map each certification */}
                {certifications.map((c, index) => (
                  <div
                    key={`${c.title}-${c.year}-${index}`}
                    className="group relative overflow-hidden bg-slate-900 rounded-[1.25rem] p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/20 hover:-translate-y-1"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                      <Award size={60} className="text-white" />
                    </div>

                    {/* Certification content */}
                    <div className="relative z-10">
                      <div className="text-[#7c3aed] font-mono text-[10px] font-black mb-1.5 tracking-[0.2em] uppercase">
                        {c.org} // {c.year}
                      </div>
                      <h4 className="text-[15px] font-bold text-white leading-tight">
                        {c.title}
                      </h4>

                      {/* Optional certification ID */}
                      {c.id ? (
                        <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                          <Terminal size={10} />
                          ID: {c.id}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}

                {/* Learning status indicator */}
                <div className="mt-4 p-6 rounded-[1.25rem] border-2 border-dashed border-slate-100 bg-slate-50/30">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                      Currently Upskilling
                    </p>
                  </div>
                  <p className="text-[13px] text-slate-500 mt-2 font-medium leading-relaxed">
                    Focusing on System Design, Distributed Databases, Advanced Cloud Architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}