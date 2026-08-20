"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

const variants: Record<RevealVariant, { hidden: string; shown: string }> = {
  up: {
    hidden: "opacity-0 translate-y-8",
    shown: "opacity-100 translate-y-0",
  },
  fade: {
    hidden: "opacity-0",
    shown: "opacity-100",
  },
  left: {
    hidden: "opacity-0 -translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
  right: {
    hidden: "opacity-0 translate-x-8",
    shown: "opacity-100 translate-x-0",
  },
  scale: {
    hidden: "opacity-0 scale-95",
    shown: "opacity-100 scale-100",
  },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const v = variants[variant];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        visible ? v.shown : v.hidden
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
