/**
 * Footer Component
 * 
 * Displays footer with branding, copyright info, and social media links.
 * Features:
 * - Responsive layout (stacks on mobile, side-by-side on desktop)
 * - Auto-updating copyright year
 * - Social media links with hover effects
 * - Consistent branding with main site
 */

import { Github, Linkedin } from "lucide-react";
import { contact } from "../data/data";

/**
 * Main Footer component
 * - Displays site branding and copyright
 * - Shows social media links
 * - Auto-updates year in copyright
 */
export default function Footer() {
  // Get current year for copyright notice
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        bg-white/60 border-b border-slate-100
        mt-0
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-3 items-center">

        {/* Left side - Branding and copyright */}
        <div className="text-left">
          <span className="text-lg font-black tracking-tight">
            {/* Logo with gradient text */}
            <span className="text-[#7c3aed] italic">SobhaReddy</span>
            <span className="text-slate-900"> Pittu</span>
          </span>
        </div>

        {/* Copyright notice with auto-updating year */}
        <div className="text-center text-sm text-slate-500 font-medium">
          © {year} Sobhareddy Pittu. All rights reserved.
        </div>


        {/* Right side - Social media links */}
        <div className="flex justify-end gap-4">
          {/* GitHub link */}
          <SocialIcon href={contact.github}>
            <Github size={28} />
          </SocialIcon>

          {/* LinkedIn link */}
          <SocialIcon href={contact.linkedin}>
            <Linkedin size={28} />
          </SocialIcon>
        </div>

      </div>
    </footer>
  );
}

/**
 * SocialIcon Component
 * Reusable social media link with hover effects
 * Opens links in new tab with security attributes
 */
function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        text-slate-400
        hover:text-[#7c3aed]
        hover:-translate-y-1
        transition-all
        duration-200
      "
    >
      {children}
    </a>
  );
}
