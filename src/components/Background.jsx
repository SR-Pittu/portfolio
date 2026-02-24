/**
 * Background Component - Glitter/Particle Effect
 * 
 * Creates an animated glitter background with floating particles.
 * Features:
 * - Random particle generation with varied properties
 * - Multiple colors (purple, blue, cyan, pink, gold)
 * - Particles float up or down with drift movement
 * - Performant with useMemo to prevent regeneration on re-renders
 * - Accessible: marked as aria-hidden since it's decorative
 * - Highly customizable: adjust COUNT for more/fewer particles
 */

import React, { useMemo } from "react";

/**
 * Background Component
 * 
 * Generates and renders an array of animated particle elements.
 * Each particle has randomized:
 * - Color (soft purple, blue, cyan, pink, or gold)
 * - Size (3-10px)
 * - Horizontal position (0-100%)
 * - Animation delay (0-12 seconds)
 * - Animation duration (10-28 seconds)
 * - Horizontal drift (-80px to +80px)
 * - Direction (up or down)
 */
export default function Background() {
  /**
   * useMemo hook generates particles once and caches them
   * Prevents expensive recalculation on every render
   */
  const particles = useMemo(() => {
    // Color palette for particles - vibrant, complementary colors
    const colors = [
      "#dc1414", 
      "#34d513", 
      "#000000", 
      "#e00f7b", 
      "#ffce09",
      "#0a6e46",
      "#131c3d",
      "#a06603",
      "#1c0068",
    ];

    // Number of particles to generate
    // Increase for denser glitter effect (e.g., 140 for heavy glitter)
    // Decrease for subtle effect (e.g., 20)
    const COUNT = 350;

    /**
     * Generate array of particle objects with random properties
     * Each particle gets a unique animation configuration
     */
    return Array.from({ length: COUNT }).map((_, i) => {
      // Random color from palette
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Particle size in pixels (3px - 10px range)
      const size = 3 + Math.random() * 7;
      
      // Horizontal position on screen (0-100%)
      const left = Math.random() * 100;
      
      // Delay before animation starts (0-12 seconds)
      // Staggered start creates more natural effect
      const delay = Math.random() * 12;
      
      // Duration of animation cycle (10-28 seconds)
      // Varied durations prevent repetitive pattern
      const duration = 10 + Math.random() * 18;
      
      // Horizontal drift during animation (-80px to +80px)
      // Makes particles move side-to-side as they float
      const drift = (Math.random() * 2 - 1) * 80;
      
      // Direction of vertical movement (up or down)
      // Random 50/50 direction for variety
      const direction = Math.random() > 0.5 ? "up" : "down";

      return { id: i, color, size, left, delay, duration, drift, direction };
    });
  }, []);

  return (
    <div className="glitter-layer background: bg-gradient-to-r from-violet-200 pink-100 to-sky-100" aria-hidden="true">
      {/* Map each particle to a DOM element with animations */}
      {particles.map((p) => (
        <span
          key={p.id}
          // Apply direction class for vertical animation (up or down)
          className={`glitter ${p.direction === "up" ? "glitter-up" : "glitter-down"}`}
          style={{
            // Horizontal starting position
            left: `${p.left}%`,
            // Particle dimensions
            width: `${p.size}px`,
            height: `${p.size}px`,
            // Radial gradient for glow effect
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            // Animation timing
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            // CSS custom property for horizontal drift in animation
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}