/**
 * PostCSS Configuration File
 * 
 * PostCSS is a tool for transforming CSS with JavaScript plugins.
 * It processes CSS through various plugins for optimization and compatibility.
 */

export default {
  plugins: {
    // Tailwind CSS PostCSS plugin for parsing Tailwind directives and generating CSS
    "@tailwindcss/postcss": {},
    
    // Autoprefixer automatically adds vendor prefixes (-webkit-, -moz-, etc.)
    // to CSS rules for better cross-browser compatibility
    autoprefixer: {},
  },
};
