import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film } from "lucide-react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Elegant non-linear luxurious progress bar increment
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 800); // Trigger complete after intro slide animation
          }, 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="cinematic-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.85, 0, 0.15, 1] }
          }}
          className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-8 md:p-16 select-none"
        >
          {/* Top subtle meta indicator */}
          <div className="flex justify-between items-center text-neutral-500 font-mono text-[9px] tracking-[0.3em] uppercase">
            <span>[ SYSTEM INIT ]</span>
            <span>2026_PORTFOLIO_DUBE</span>
          </div>

          {/* Centered Luxury Logo Reveal */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="p-2 border border-neutral-800 bg-neutral-900 rounded-none text-emerald-400">
                <Film className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
              </div>
              <span className="text-[14px] uppercase tracking-[0.4em] font-black text-white font-display">
                TAFADZWA HAMPTON DUBE
              </span>
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="text-[9px] text-neutral-400 uppercase tracking-[0.4em] block text-center"
              >
                CLOSURE TV / STUDIO PORFOLIO
              </motion.span>
            </div>
          </div>

          {/* Bottom Counters & Tech specs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-neutral-900 pt-6">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-[10px] text-neutral-500 tracking-wider uppercase font-mono">SPECIFICATION STATUS</span>
              <span className="text-xs text-white uppercase tracking-widest font-black">23.976 FPS / HIGH DYNAMIC CONTRAST</span>
            </div>
            
            {/* Massive Luxury Cinematic Percentage Counter */}
            <div className="flex items-baseline gap-1 font-display text-white">
              <span className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                {count.toString().padStart(3, "0")}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
