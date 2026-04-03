/**
 * Vite Configuration File
 * 
 * This file configures the Vite build tool and development environment.
 * Vite is a modern frontend build tool that provides:
 * - Fast dev server with Hot Module Replacement (HMR)
 * - Optimized production builds
 * - ESM-based development server
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'           // React plugin for JSX support and fast refresh
import tailwindcss from '@tailwindcss/vite'        // Tailwind CSS Vite plugin for styling

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [// Enables React JSX transformation and Hot Module Replacement
  react(), // Enables Tailwind CSS preprocessing and JIT compilation
  tailwindcss(), cloudflare()],
})