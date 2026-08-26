"use client";

import { NoiseBackground, NoiseButton } from "@/components/ui/noise-background";

export default function NoiseBackgroundDemo() {
  return (
    <div className="flex justify-center">
      <NoiseButton
        gradientColors={[
          "rgb(37, 99, 235)",
          "rgb(147, 51, 234)",
          "rgb(6, 182, 212)",
        ]}
      >
        Start publishing &rarr;
      </NoiseButton>
    </div>
  );
}
