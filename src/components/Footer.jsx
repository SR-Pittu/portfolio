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
        shadow-[0_-4px_20px_rgba(0,0,0,0.04)]
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side - Branding and copyright */}
        <div className="text-center md:text-left">
          <div className="text-xl font-black tracking-tight">
            {/* Logo with gradient text */}
            <span className="text-[#7c3aed] italic">SobhaReddy</span>
            <span className="text-slate-900"> Pittu</span>
          </div>

          {/* Copyright notice with auto-updating year */}
          <div className="mt-2 text-sm text-slate-500 font-medium">
            © {year} Sobhareddy Pittu. All rights reserved.
          </div>
        </div>

        {/* Right side - Social media links */}
        <div className="flex items-center gap-6">
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
      target="_blank"                  // Open in new tab
      rel="noreferrer"                 // Security: no referrer info passed
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
