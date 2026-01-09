"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.5, // scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureOrientation: "vertical",
      smoothTouch: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional: attach to window for debugging or scrollTo
    window.__lenis = lenis;

    return () => lenis.destroy();
  }, []);

  return children;
};

export default SmoothScroll;
