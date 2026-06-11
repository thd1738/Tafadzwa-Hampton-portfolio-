/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Flame, Youtube, Facebook, Instagram, Linkedin, MessageSquare, Compass, Play } from "lucide-react";
import Magnetic from "./Magnetic";
import heroPortrait from "../assets/images/regenerated_image_1781181974192.jpg";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Elegant mouse movement tracking for gorgeous parallax 
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35; // 35px maximum offset
      const y = (e.clientY / window.innerHeight - 0.5) * 35;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const titleWords = ["TAFADZWA", "HAMPTON", "DUBE"];

  return (
    <section className="relative min-h-screen bg-white flex flex-col justify-center pt-24 overflow-hidden sleek-grid-bg">
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute top-0 left-1/4 h-full w-px bg-neutral-100 -z-10"></div>
      <div className="absolute top-0 right-1/4 h-full w-px bg-neutral-100 -z-10"></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 relative flex flex-col justify-center h-full flex-grow">
        
        {/* Giant Poster Typography Row with mask text reveal */}
        <div className="relative w-full text-center py-4 select-none z-10 pointer-events-none overflow-hidden">
          <motion.h1
            style={{ x: mousePos.x * -0.4, y: mousePos.y * -0.4 }}
            className="text-[10vw] lg:text-[130px] leading-none font-black tracking-tighter uppercase text-neutral-900 flex flex-wrap justify-center gap-x-6 md:gap-x-8"
          >
            {titleWords.map((word, wIdx) => (
              <span key={wIdx} className="inline-block overflow-hidden py-1">
                {word.split("").map((char, cIdx) => (
                  <motion.span
                    key={cIdx}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1.4,
                      delay: wIdx * 0.25 + cIdx * 0.04 + 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block origin-bottom-left"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Central Overlay Subject Portrait with parallax & cinematic zoom on enter */}
        <motion.div 
          style={{ x: mousePos.x * 0.7, y: mousePos.y * 0.7 }}
          className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] sm:w-[48vw] md:w-[35vw] lg:w-[380px] h-[500px] max-h-[60vh] flex items-center justify-center z-20 pointer-events-none md:pointer-events-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full bg-neutral-100 border-[12px] border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden group"
          >
            {/* High contrast B&W Portrait of Hampton Dube */}
            <div className="relative w-full h-full overflow-hidden">
              <motion.img
                src={heroPortrait}
                alt="Tafadzwa Hampton Dube Studio Portrait"
                referrerPolicy="no-referrer"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-top grayscale contrast-[1.12] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Subtitle Badge overlay onto picture */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4 z-30">
              <p className="text-[10px] tracking-[0.3em] font-bold uppercase font-mono">Film Director & Producer</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content Info Block: Description, Roles Carousel & Navigation Pills */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end relative mt-24 sm:mt-16 z-30">
          
          {/* Left Block: Meta info, Description, Subtitle Roles */}
          <div className="md:col-span-6 flex flex-col gap-6 text-left pb-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12px] leading-relaxed text-neutral-500 max-w-[320px] font-mono"
            >
              [I create powerful visual stories through film, television, documentaries, and digital media, verified by regional broadcast guilds.]
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex flex-col gap-3"
            >
              <Magnetic range={45} strength={0.3}>
                <button
                  onClick={() => onScrollTo("work")}
                  className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-mono font-black group text-black cursor-pointer text-left w-fit"
                >
                  VIEW MY WORK <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Magnetic>
              
              <Magnetic range={45} strength={0.3}>
                <button
                  onClick={() => onScrollTo("contact")}
                  className="flex items-center gap-4 text-[11px] uppercase tracking-widest font-mono font-black group text-black cursor-pointer text-left w-fit"
                >
                  LET'S COLLABORATE <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </Magnetic>
            </motion.div>
          </div>

          <div className="hidden md:block md:col-span-2"></div>

          {/* Right Block: Project Quicklist from the reference design layout */}
          <div className="md:col-span-4 flex flex-col gap-6 text-right pb-4 border-t md:border-t-0 pt-6 md:pt-0 border-neutral-100">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Project 01</span>
              <button onClick={() => onScrollTo("work")} className="text-[24px] font-black uppercase tracking-tight italic hover:text-neutral-500 transition-colors text-right block w-full cursor-pointer focus:outline-none">TSIKIDZI</button>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Director</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Project 02</span>
              <button onClick={() => onScrollTo("work")} className="text-[24px] font-black uppercase tracking-tight hover:text-neutral-500 transition-colors text-right block w-full cursor-pointer focus:outline-none">NANDI</button>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Writer / Director</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">Project 03</span>
              <button onClick={() => onScrollTo("work")} className="text-[24px] font-black uppercase tracking-tight hover:text-neutral-500 transition-colors text-right block w-full cursor-pointer focus:outline-none">LIFE OF A...</button>
              <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono">Producer</p>
            </motion.div>
          </div>

        </div>

        {/* Scroll down indicator animation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden lg:block">
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            onClick={() => onScrollTo("about")}
            className="flex flex-col items-center gap-1.5 focus:outline-none opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
          >
            <span className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold font-mono">Scroll Down</span>
            <ArrowDown className="w-3.5 h-3.5 text-neutral-900" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
