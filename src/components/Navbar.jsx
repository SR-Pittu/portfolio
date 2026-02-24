/**
 * Navbar Component
 * 
 * Fixed navigation header with smooth blur effect.
 * Features:
 * - Fixed positioning at the top of the viewport
 * - Semi-transparent backdrop blur background
 * - Logo with gradient accent color
 * - Navigation links with hover effects (hidden on mobile)
 * - "Hire Me" CTA button
 * - Anchor links to different portfolio sections
 */

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar container with backdrop blur effect */}
      <div className="backdrop-blur-md bg-white/60 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo with branding */}
          <a href="#top" className="font-bold tracking-tighter text-xl">
            <span className="text-slate-900">Sobha Pittu</span>
            {/* <span className="text-[#a78bfa]"><i></i></span> */}
          </a>

          {/* Navigation menu (hidden on small screens, visible on md+) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            <a className="hover:text-[#7c3aed] transition-colors" href="#experience">
              Experience
            </a>
            <a className="hover:text-[#7c3aed] transition-colors" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#7c3aed] transition-colors" href="#skills">
              Skills
            </a>
            <a className="hover:text-[#7c3aed] transition-colors" href="#education">
              Education
            </a>
            <a className="hover:text-[#7c3aed] transition-colors" href="#contact">
              Contact
            </a>
            
            {/* Primary CTA button */}
            <a
              href="#contact"
              className="ml-2 px-6 py-2 rounded-full bg-[#7c3aed] text-white hover:bg-[#6d28d9] transition-all"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
