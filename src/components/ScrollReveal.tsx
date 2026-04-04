"use client";

import { useEffect } from "react";

const SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Once visible, stop observing to save resources
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: "0px 0px -48px 0px" }
    );

    const elements = document.querySelectorAll(SELECTORS);
    elements.forEach((el) => observer.observe(el));

    // Also handle dynamically added elements
    const mutObs = new MutationObserver(() => {
      document.querySelectorAll(`${SELECTORS}:not(.observed)`).forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return null;
}
