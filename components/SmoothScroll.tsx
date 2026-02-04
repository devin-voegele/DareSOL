"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Note: ScrollSmoother requires GSAP Club membership
// Using a simpler approach with Lenis-like smooth scrolling

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    // Smooth scroll behavior via CSS
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div ref={wrapperRef} className="smooth-wrapper">
      <div className="smooth-content">{children}</div>
    </div>
  );
}
