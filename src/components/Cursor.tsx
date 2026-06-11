import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function Cursor() {
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "view" | "play" | "talk">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isMobilDevice, setIsMobileDevice] = useState(false);

  // Mouse absolute coords
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring configs
  const springConfig = { damping: 25, stiffness: 220, mass: 0.25 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is touch-enabled
    const isMobile = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsMobileDevice(isMobile);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Keep track of hover states across all interactive document tags
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const element = target.closest("[data-cursor], button, a, [role='button']");
      if (element) {
        const customCursor = element.getAttribute("data-cursor");
        if (customCursor) {
          setCursorType(customCursor as any);
        } else if (element.id === "showreel" || element.closest("#showreel")) {
          setCursorType("play");
        } else if (element.closest("#contact") && element.tagName === "BUTTON") {
          setCursorType("talk");
        } else if (element.closest("#work") && (element.tagName === "IMG" || element.tagName === "BUTTON")) {
          setCursorType("view");
        } else {
          setCursorType("pointer");
        }
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isMobilDevice || !isVisible) return null;

  // Render contextual badge text
  const renderCursorText = () => {
    switch (cursorType) {
      case "view": return "VIEW";
      case "play": return "PLAY";
      case "talk": return "TALK";
      default: return null;
    }
  };

  return (
    <>
      {/* 1. Fine Solid Core Point */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-50 select-none mix-blend-difference -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      {/* 2. Responsive outer spring trail ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 select-none flex items-center justify-center font-mono font-bold text-[8px] uppercase tracking-widest text-black -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 border border-black/40 ${
          cursorType !== "default" ? "bg-white/95 text-black border-transparent shadow-lg" : "bg-transparent"
        }`}
        style={{
          x: trailX,
          y: trailY,
          width: cursorType === "default" ? 38 : 72,
          height: cursorType === "default" ? 38 : 72,
        }}
      >
        {renderCursorText()}
      </motion.div>
    </>
  );
}
