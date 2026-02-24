/**
 * ESLint Configuration File
 * 
 * ESLint is a static analysis tool for JavaScript that helps identify and fix
 * coding issues, enforce code quality standards, and maintain consistency.
 * This config enables React-specific linting rules and best practices.
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'        // Plugin for React hooks rules
import reactRefresh from 'eslint-plugin-react-refresh'    // Plugin for React Fast Refresh
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore the dist folder (production build output)
  globalIgnores(['dist']),
  
  {
    // Apply these rules to all JavaScript and JSX files
    files: ['**/*.{js,jsx}'],
    
    // Extend recommended rule sets from plugins
    extends: [
      js.configs.recommended,              // JavaScript best practices
      reactHooks.configs.flat.recommended, // React Hooks rules (useEffect, useState, etc.)
      reactRefresh.configs.vite,           // React Fast Refresh compatibility for Vite
    ],
    
    // Language and parsing configuration
    languageOptions: {
      ecmaVersion: 2020,                   // ECMAScript 2020 syntax support
      globals: globals.browser,             // Browser global variables (window, document, etc.)
      parserOptions: {
        ecmaVersion: 'latest',              // Use latest ECMAScript features
        ecmaFeatures: { jsx: true },        // Enable JSX syntax support
        sourceType: 'module',               // Use ES modules (import/export)
      },
    },
    
    // Custom ESLint rules
    rules: {
      // Allow unused variables that start with uppercase or underscore
      // (useful for React components and intentionally unused variables)
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
