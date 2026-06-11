/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", id: "work", count: "04" },
    { label: "Services", id: "services", count: "06" },
    { label: "Experience", id: "experience", count: "3" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/45 backdrop-blur-lg border-b border-neutral-200/40 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Availability Indicator Card wrapped in Magnetic */}
          <div className="flex items-center">
            <Magnetic range={50} strength={0.3}>
              <button
                onClick={() => handleNavItemClick("contact")}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-neutral-200 rounded-none cursor-pointer"
              >
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-black">
                  AVAILABLE FOR COLLABS
                </span>
              </button>
            </Magnetic>
          </div>

          {/* Center: Large screens Nav Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Magnetic key={item.id} range={40} strength={0.25}>
                  <button
                    onClick={() => handleNavItemClick(item.id)}
                    className={`group relative py-1 text-[11px] uppercase tracking-widest font-mono font-bold transition-all cursor-pointer ${
                      isActive ? "text-black" : "text-neutral-500 hover:text-black"
                    }`}
                  >
                    <span className="relative">
                      {item.label}
                      {item.count && (
                        <span className="text-[9px] text-neutral-400 font-mono ml-1 transition-colors group-hover:text-black">
                          [{item.count}]
                        </span>
                      )}
                    </span>
                    {/* Animated Underline Expansion */}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-black transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>
                </Magnetic>
              );
            })}
          </nav>

          {/* Right: Call to action wrapped in Magnetic */}
          <div className="hidden md:block">
            <Magnetic range={60} strength={0.35}>
              <button
                onClick={() => handleNavItemClick("contact")}
                className="border-2 border-black bg-black text-white hover:bg-neutral-900 hover:border-neutral-900 px-6 py-2 rounded-none text-[10px] font-mono font-black uppercase tracking-widest transition-all cursor-pointer shadow-sm"
              >
                Let's Talk →
              </button>
            </Magnetic>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[62px] left-0 right-0 bg-white border-b border-neutral-200 z-40 md:hidden shadow-lg overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavItemClick(item.id)}
                  className={`text-left text-lg font-bold font-display tracking-tight py-1 ${
                    activeSection === item.id ? "text-black border-l-2 border-black pl-3" : "text-neutral-500 pl-3"
                  }`}
                >
                  {item.label}
                  {item.count && (
                    <span className="text-xs text-neutral-400 font-mono ml-2">
                       [{item.count}]
                    </span>
                  )}
                </button>
              ))}
              <hr className="border-neutral-100" />
              <button
                onClick={() => handleNavItemClick("contact")}
                className="w-full flex items-center justify-between px-5 py-4 bg-black text-white rounded-none text-xs font-mono font-bold uppercase tracking-widest"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
