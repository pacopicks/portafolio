"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { TextParticle } from "@/components/ui/text-particle";

export function NameParticles() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState(60);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard, same pattern as the theme toggle
    setMounted(true);

    const updateFontSize = () => {
      setFontSize(window.innerWidth >= 768 ? 130 : 60);
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  if (!mounted) {
    return (
      <div className="h-28 md:h-44 w-full flex items-center justify-center">
        <span className="text-5xl md:text-8xl font-bold tracking-tight">
          Francisco
        </span>
      </div>
    );
  }

  return (
    <div className="h-28 md:h-44 w-full max-w-2xl mx-auto">
      <TextParticle
        text="Francisco"
        fontSize={fontSize}
        fontFamily="Arial, sans-serif"
        particleSize={2}
        particleDensity={3}
        particleColor={resolvedTheme === "dark" ? "#e5e5e5" : "#171717"}
      />
    </div>
  );
}
