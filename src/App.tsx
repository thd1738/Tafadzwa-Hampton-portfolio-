import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import ExperienceSection from "./components/Experience";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import ScenicBackground from "./components/ScenicBackground";
import Lenis from "lenis";
import { Camera, Heart, Film } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(true);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    if (loading) return;
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [loading]);

  // Intersection Observer to update current nav highlighted status dynamically on scroll
  useEffect(() => {
    if (loading) return;
    const sections = ["work", "services", "experience", "about", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when active portion matches central viewport 
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [loading]);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* 1. Cinematic Luxury Loading Screen */}
      <Loader onComplete={() => setLoading(false)} />
      
      {!loading && (
        <div className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
          
          {/* 2. Custom Magnetic Trailing Custom Cursor */}
          <Cursor />

          {/* 3. Infinite Moving Grain Film Layer & Ambient Particles background */}
          <ScenicBackground />

          {/* 4. Top Floating Glassmorphism Navigation Menu */}
          <Header activeSection={activeSection} onNavigate={handleNavigate} />

          {/* 5. Main Single-Screen Scrollable Content Area */}
          <main className="relative z-10">
            
            {/* Hero Section (Giant Outline Split Name Poster & Subject Overlapping) */}
            <div id="hero">
              <Hero onScrollTo={handleNavigate} />
            </div>

            {/* About Section (Asymmetric Grid Biographical details) */}
            <About />

            {/* Featured Projects Listing */}
            <Projects />

            {/* Services / Creative Offerings Bento Booklets */}
            <Services />

            {/* Career Timeline of Achievements and Skill Tag Matrix */}
            <ExperienceSection />

            {/* Contact coordinates coordinates & desk inquiry letter */}
            <Contact />

          </main>

          {/* Luxury A24 Films Style Magazine Footer */}
          <footer className="relative z-10 py-16 bg-neutral-950 text-white border-t border-neutral-900 select-none">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12 text-left">
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-b border-neutral-900 pb-12">
                
                {/* Branding Block */}
                <div className="md:col-span-5 flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 bg-neutral-900 rounded-lg text-white border border-neutral-800">
                      <Camera className="w-4 h-4 text-emerald-400" />
                    </span>
                    <span className="text-sm font-display font-medium tracking-wide uppercase text-white">
                      Closure Productions
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 max-w-sm leading-relaxed text-justify-custom font-mono">
                    [Tafadzwa Hampton Dube is head manager and chief editor driving high-end television scripts and narrative layouts across southern Africa.]
                  </p>
                </div>

                <div className="hidden md:block md:col-span-2"></div>

                {/* Quick Jumps block */}
                <div className="md:col-span-2 flex flex-col gap-3 font-mono text-xs text-left">
                  <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">DIRECTORY</span>
                  {["work", "services", "experience", "about", "contact"].map((sec) => (
                    <button
                      key={sec}
                      onClick={() => handleNavigate(sec)}
                      className="text-left text-neutral-400 hover:text-white capitalize transition-colors cursor-pointer focus:outline-none"
                    >
                      {sec === "work" ? "Featured Work" : sec}
                    </button>
                  ))}
                </div>

                {/* Agency info */}
                <div className="md:col-span-3 flex flex-col gap-3 font-mono text-xs text-neutral-400 text-left">
                  <span className="text-neutral-500 font-bold uppercase tracking-widest text-[10px]">AUTHOR</span>
                  <p className="leading-relaxed">
                    Tafadzwa Hampton Dube<br />
                    Harare Studio Hub, Zimbabwe
                  </p>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-[10px]">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></div>
                    <span>TENTATIVE PROJECT OPENINGS</span>
                  </div>
                </div>

              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1">
                  <Film className="w-3.5 h-3.5 text-neutral-600" />
                  © {new Date().getFullYear()} T. H. Dube. All rights reserved.
                </span>
                <span className="flex items-center gap-1.5">
                  <span>Made with premium minimalist craft</span>
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                </span>
              </div>

            </div>
          </footer>

        </div>
      )}
    </>
  );
}
