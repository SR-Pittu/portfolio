/**
 * Application Entry Point
 * 
 * This file is the main entry point for the React application.
 * It initializes the React root and mounts the App component to the DOM.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'           // Global styles and Tailwind CSS
import App from './App.jsx'    // Main application component

// Create React root and render the App component
// StrictMode enables additional development checks and warnings
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
