"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

// Helper component for gradient layers
function GradientLayer({
  springX,
  springY,
  gradientColor,
  opacity,
  multiplier,
}) {
  const x = useTransform(springX, (val) => val * multiplier);
  const y = useTransform(springY, (val) => val * multiplier);
  const background = useMotionTemplate`radial-gradient(circle at ${x}px ${y}px, ${gradientColor} 0%, transparent 50%)`;

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        background,
      }}
    />
  );
}

export const NoiseBackground = ({
  children,
  className,
  containerClassName,
  gradientColors = [
    "rgb(21, 93, 252)",   // #155dfc Primary Brand Blue
    "rgb(80, 162, 255)",  // #50a2ff Accent Light Blue
    "rgb(37, 99, 235)",   // #2563eb Blue
  ],
  noiseIntensity = 0.2,
  speed = 0.1,
  backdropBlur = false,
  animating = true,
}) => {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use spring animation for smooth movement
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  // Transform for top gradient strip
  const topGradientX = useTransform(springX, (val) => val * 0.1 - 50);

  const velocityRef = useRef({ x: 0, y: 0 });
  const lastDirectionChangeRef = useRef(0);

  // Initialize position to center
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(centerX);
    y.set(centerY);
  }, [x, y]);

  // Generate random velocity
  const generateRandomVelocityRef = useRef(() => {
    const angle = Math.random() * Math.PI * 2;
    const magnitude = speed * (0.5 + Math.random() * 0.5);
    return {
      x: Math.cos(angle) * magnitude,
      y: Math.sin(angle) * magnitude,
    };
  });

  useEffect(() => {
    generateRandomVelocityRef.current = () => {
      const angle = Math.random() * Math.PI * 2;
      const magnitude = speed * (0.5 + Math.random() * 0.5);
      return {
        x: Math.cos(angle) * magnitude,
        y: Math.sin(angle) * magnitude,
      };
    };
    velocityRef.current = generateRandomVelocityRef.current();
  }, [speed]);

  // Animate using framer-motion useAnimationFrame
  useAnimationFrame((time) => {
    if (!animating || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const maxX = rect.width;
    const maxY = rect.height;

    // Change direction randomly every 1.5-3 seconds
    if (time - lastDirectionChangeRef.current > 1500 + Math.random() * 1500) {
      velocityRef.current = generateRandomVelocityRef.current();
      lastDirectionChangeRef.current = time;
    }

    const deltaTime = 16;
    const currentX = x.get();
    const currentY = y.get();

    let newX = currentX + velocityRef.current.x * deltaTime;
    let newY = currentY + velocityRef.current.y * deltaTime;

    const padding = 20;

    if (
      newX < padding ||
      newX > maxX - padding ||
      newY < padding ||
      newY > maxY - padding
    ) {
      const angle = Math.random() * Math.PI * 2;
      const magnitude = speed * (0.5 + Math.random() * 0.5);
      velocityRef.current = {
        x: Math.cos(angle) * magnitude,
        y: Math.sin(angle) * magnitude,
      };
      lastDirectionChangeRef.current = time;
      newX = Math.max(padding, Math.min(maxX - padding, newX));
      newY = Math.max(padding, Math.min(maxY - padding, newY));
    }

    x.set(newX);
    y.set(newY);
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-full p-1 sm:p-1.5 backdrop-blur-md",
        "bg-blue-600/10 dark:bg-neutral-900/90 border border-blue-500/30 dark:border-neutral-700/80 shadow-[0px_0.5px_2px_0px_rgba(255,255,255,0.15)_inset,0px_10px_25px_-5px_rgba(21,93,252,0.3)]",
        "hover:border-blue-500/60 dark:hover:border-neutral-600 transition-all duration-300",
        backdropBlur &&
          "after:absolute after:inset-0 after:h-full after:w-full after:backdrop-blur-lg after:content-['']",
        containerClassName,
      )}
      style={
        {
          "--noise-opacity": noiseIntensity,
        }
      }
    >
      {/* Moving gradient layers */}
      <GradientLayer
        springX={springX}
        springY={springY}
        gradientColor={gradientColors[0]}
        opacity={0.45}
        multiplier={1}
      />
      <GradientLayer
        springX={springX}
        springY={springY}
        gradientColor={gradientColors[1]}
        opacity={0.35}
        multiplier={0.7}
      />
      <GradientLayer
        springX={springX}
        springY={springY}
        gradientColor={gradientColors[2] || gradientColors[0]}
        opacity={0.3}
        multiplier={1.2}
      />

      {/* Top gradient strip */}
      <motion.div
        className="absolute inset-x-0 top-0 h-0.5 rounded-t-full opacity-90 blur-xs pointer-events-none"
        style={{
          background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
          x: animating ? topGradientX : 0,
        }}
      />

      {/* Ultra-lightweight inline SVG noise pattern (0 KB network transfer, 0 latency) */}
      <div 
        className="pointer-events-none absolute inset-0 overflow-hidden opacity-[var(--noise-opacity)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.7'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay',
        }}
      />

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};

export function NoiseButton({
  children,
  onClick,
  href,
  className = "",
  containerClassName = "",
  gradientColors = [
    "rgb(21, 93, 252)",   // #155dfc Primary Brand Blue
    "rgb(80, 162, 255)",  // #50a2ff Accent Light Blue
    "rgb(29, 78, 216)",   // #1d4ed8 Deep Brand Blue
  ],
  type = "button",
}) {
  const commonClasses = cn(
    "btn-brand-primary relative flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-3.5 cursor-pointer rounded-full min-h-[48px]",
    "bg-gradient-to-r from-[#155dfc] via-[#1d4ed8] to-[#155dfc] text-white font-bold text-sm sm:text-base tracking-wide",
    "border border-[#50a2ff]/50 shadow-[0_4px_20px_-4px_rgba(21,93,252,0.6)]",
    "hover:brightness-110 hover:shadow-[0_6px_25px_-4px_rgba(21,93,252,0.8)] transition-all duration-200 active:scale-98",
    className
  );

  return (
    <NoiseBackground
      containerClassName={cn("NoiseButton w-fit p-1 rounded-full", containerClassName)}
      gradientColors={gradientColors}
    >
      {href ? (
        <Link href={href} className={commonClasses} onClick={onClick}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={commonClasses}
        >
          {children}
        </button>
      )}
    </NoiseBackground>
  );
}
