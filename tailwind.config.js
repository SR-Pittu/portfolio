/**
 * Tailwind CSS Configuration File
 * 
 * Tailwind CSS is a utility-first CSS framework that allows rapid UI development
 * by composing pre-defined classes directly in HTML/JSX.
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Specify which files to scan for Tailwind class usage
  // This ensures only used styles are included in the final bundle
  content: [
    "./index.html",           // Main HTML entry point
    "./src/**/*.{js,jsx,ts,tsx}"  // All React component files
  ],
  
  theme: {
    extend: {
      // Custom theme extensions can be added here
      // Examples: colors, fonts, spacing, breakpoints, etc.
    },
  },
  
  plugins: [],  // Third-party Tailwind plugins (currently none)
};
