/**
 * Hero Component
 *
 * The introduction/landing section of the portfolio.
 * Features:
 * - Status badge indicating availability
 * - Large headline introducing as a Software Engineer
 * - Compelling value proposition paragraph
 * - CTA button (View Work)
 * - Social media links (GitHub, LinkedIn, Email)
 */

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";
import { contact } from "../data/data";

export default function Hero() {
  return (
    
    <section
      id="top"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10 w-full">
        {/* Main hero card container */}
        <div
          className="
            rounded-3xl
            bg-white
            border border-slate-200
            shadow-sm
            p-10 md:p-16
          "
        >
          <div className="max-w-3xl">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="
                  inline-flex items-center
                  px-4 py-2
                  rounded-full
                  text-xs semi-bold uppercase tracking-widest
                  text-[#7c3aed]
                  bg-[#7c3aed]/5
                  border border-[#7c3aed]/20
                "
              >
                Available for new opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="
                mt-6
                text-xl sm:text-2xl md:text-3xl lg:text-5xl
                font-black
                tracking-tight
                text-slate-900
                leading-[1.05]
              "
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <i>SobhaReddy Pittu</i>
              <br />
              Full Stack
              <span className="text-[#7c3aed]">
                <i> Software </i>
              </span> Engineer
            </motion.h1>

            {/* Description */}
            <motion.p
              className="
                mt-6
                text-lg md:text-xl
                text-slate-600
                max-w-2xl
                leading-relaxed
              "
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              I build high-performance web systems using React and FastAPI, turning
              complex business requirements into scalable, cloud-native solutions
              that drive growth.
            </motion.p>

            {/* Actions */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="
                  px-7 h-12
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#7c3aed]
                  text-white
                  font-semibold
                  hover:bg-[#6d28d9]
                  transition
                  shadow-lg
                  shadow-[#7c3aed]/15
                  group
                "
              >
                View Work
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  h-12 w-12
                  inline-flex items-center justify-center
                  rounded-full
                  border border-slate-200
                  hover:border-[#7c3aed]
                  hover:text-[#7c3aed]
                  hover:bg-slate-50
                  transition
                "
              >
                <Github size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  h-12 w-12
                  inline-flex items-center justify-center
                  rounded-full
                  border border-slate-200
                  hover:border-[#7c3aed]
                  hover:text-[#7c3aed]
                  hover:bg-slate-50
                  transition
                "
              >
                <Linkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="#contact"
                aria-label="Email"
                className="
                  h-12 w-12
                  inline-flex items-center justify-center
                  rounded-full
                  border border-slate-200
                  hover:border-[#7c3aed]
                  hover:text-[#7c3aed]
                  hover:bg-slate-50
                  transition
                "
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}