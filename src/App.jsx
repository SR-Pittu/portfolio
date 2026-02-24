/**
 * Main Application Component
 * 
 * This is the root component that orchestrates the entire portfolio website layout.
 * It imports and arranges all major sections of the portfolio in a vertical flow:
 * - Navigation bar
 * - Hero section
 * - Experience timeline
 * - Projects showcase
 * - Technical skills
 * - Education & certifications
 * - Contact form
 * - Footer
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";

export default function App() {
  return (
    <>
      {/* Main page container with gradient background */}
      <div
        className="
          min-h-screen
          bg-gradient-to-b
          from-[#fafafa]
          via-[#f8f7ff]
          to-[#f3f0ff]
        "
      >
        {/* Decorative animated background component */}
        <Background /> /
        <div className="relative z-10">
          {/* Navigation bar - fixed at top */}
          <Navbar />

          {/* Main content sections */}
          <main>
            <Hero />          {/* Intro and call-to-action */}
            <Experience />    {/* Work experience timeline */}
            <Projects />      {/* Featured projects showcase */}
            <Skills />        {/* Technical skills in orbit layout */}
            <Education />     {/* Education and certifications */}
            <Contact />       {/* Contact form and info */}
          </main>

           < Footer />
        </div>
       
      </div >
      
    </>
  );
}
