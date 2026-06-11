/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "../types";
import { Film, Eye, X, Award, Info, Sparkles, Sliders, Calendar, Clock } from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "tsikidzi",
      number: "01",
      title: "TSIKIDZI",
      role: "Director",
      description: "A Zimbabwean film project showcasing cinematic storytelling and visual excellence. Investigates human vulnerability under deep societal and mystical frameworks.",
      image: "/src/assets/images/project_tsikidzi_1781161878284.png",
      year: "2024",
      duration: "45 Mins (Featurette)",
      genre: "Dramatic Mystery / Realism",
      youtubeUrl: "https://youtu.be/-PLqnzelhYg",
    },
    {
      id: "nandi",
      number: "02",
      title: "NANDI",
      role: "Director & Script Writer",
      description: "A compelling film project demonstrating storytelling, directing, and script development expertise. Follows an emotional odyssey across Harare's vibrant landscapes.",
      image: "/src/assets/images/project_nandi_1781161893788.png",
      year: "2023",
      duration: "94 Mins (Full Feature)",
      genre: "Psychological Drama / Romance",
    },
    {
      id: "inthelife",
      number: "03",
      title: "IN THE LIFE OF A...",
      role: "Creator, Producer & Director",
      description: "A documentary series exploring professions and lifestyles through immersive storytelling. Captures the human grit of ordinary Zimbabweans chasing extraordinary dreams.",
      image: "/src/assets/images/regenerated_image_1781165402857.jpg",
      year: "2023",
      duration: "10-part Docuseries",
      genre: "Documentary / Human Interest",
      youtubeUrl: "https://youtu.be/qHGxv5iqong",
    },
    {
      id: "shurugwigoldmafia",
      number: "04",
      title: "SHURUGWI GOLD MAFIA",
      role: "Producer & Editor",
      description: "An investigative documentary uncovering the operations and underground networks of gold smuggling in Shurugwi, Zimbabwe. Explores the impact on governance, local economy, and community dynamics.",
      image: "/src/assets/images/project_womensvoices_1781161917167.png",
      year: "2023",
      duration: "32 Mins (Short Doc)",
      genre: "Social Documentary / Crime & Society",
      youtubeUrl: "https://youtu.be/qHGxv5iqong",
    },
  ];

  return (
    <section id="work" className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-neutral-100 rounded-lg text-black">
                <Film className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                Featured Works
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-black max-w-xl">
              Selected Cinematic Works
            </h2>
          </div>
          <p className="text-sm text-neutral-500 font-mono tracking-wider text-left md:text-right max-w-xs leading-relaxed">
            [A curated archive of narrative film, documentary, and creative direction from Tafadzwa Hampton Dube.]
          </p>
        </div>

        {/* Editorial Alternating Listing */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-center"
              >
                
                {/* Outlined Project Number & Name */}
                <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? "" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3 font-mono">
                    <span className="text-2xl font-light text-neutral-300">[{project.number}]</span>
                    <div className="h-px w-6 bg-neutral-200"></div>
                    <span className="text-xs tracking-widest text-neutral-400 uppercase font-bold px-2.5 py-1 bg-neutral-50 rounded border border-neutral-100">{project.role}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight text-neutral-950">
                    {project.title}
                  </h3>

                  <p className="text-neutral-600 text-sm md:text-base leading-relaxed text-justify-custom">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 font-mono text-xs">
                    <div>
                      <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Year</span>
                      <span className="font-semibold text-neutral-800">{project.year}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block uppercase tracking-wider text-[10px]">Genre</span>
                      <span className="font-semibold text-neutral-800 line-clamp-1">{project.genre}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer"
                    >
                      Director's Notes
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-650 border-b border-red-650 pb-1 hover:text-red-500 hover:border-red-500 transition-all cursor-pointer"
                      >
                        Watch Video
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Cinematic Large Widescreen Frame with Hover Zoom & Frame Card UI */}
                <div className={`lg:col-span-7 relative ${isEven ? "" : "lg:order-1"}`}>
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative group aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-200 shadow-md bg-neutral-100 cursor-pointer"
                  >
                    {/* Dark overlay showing on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        className="px-6 py-3 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Explore Scope
                      </motion.div>
                    </div>

                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center grayscale contrast-[1.04] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />

                    {/* Metadata Overlay Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
                      {project.duration}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Modal Window for Director Vision & Fictional Production Credits */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white text-neutral-900 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl border border-neutral-100"
              >
                {/* Header Graphic Cover */}
                <div className="relative aspect-[21/9] w-full bg-neutral-100">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  
                  {/* Close button inside modal cover */}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 backdrop-blur-md hover:bg-neutral-800 rounded-full border border-white/10 text-white transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 font-display text-white pr-6">
                    <span className="text-xs font-mono tracking-widest text-neutral-300 uppercase block mb-1">
                      PROJECT VISION NOTES
                    </span>
                    <h4 className="text-2xl md:text-3.5xl font-extrabold tracking-tight">
                      {selectedProject.title}
                    </h4>
                  </div>
                </div>

                {/* Info and vision content */}
                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Production specifications panel */}
                  <div className="md:col-span-4 flex flex-col gap-6">
                    <div>
                      <h5 className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mb-1.5">Role Representation</h5>
                      <span className="text-sm font-semibold text-neutral-900 bg-neutral-100 border border-neutral-200 rounded px-2.5 py-1 font-display">{selectedProject.role}</span>
                    </div>

                    <div className="space-y-4 font-mono text-xs text-neutral-600 border-t border-neutral-100 pt-4">
                      <div className="flex justify-between">
                        <span>Year:</span>
                        <strong className="text-black">{selectedProject.year}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <strong className="text-black">{selectedProject.duration}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Genre:</span>
                        <strong className="text-black">{selectedProject.genre}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <strong className="text-black">Cinematic Dual Audio</strong>
                      </div>
                    </div>

                    <div className="p-4 bg-yellow-50/50 border border-yellow-100 rounded-xl flex items-start gap-2.5">
                      <Award className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" />
                      <div>
                        <h6 className="text-neutral-800 font-bold text-xs uppercase tracking-wider font-mono">Status Recognition</h6>
                        <p className="text-[11px] text-neutral-600 leading-relaxed mt-0.5">
                          Officially selected for regional filmmaker exhibits, illustrating Zimbabwean cinematic expertise on-screen.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Narrative notes from the director */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      DIRECTOR'S STATEMENT
                    </div>

                    <p className="text-neutral-700 text-sm md:text-base leading-relaxed text-justify-custom font-sans">
                      "{selectedProject.title} represents a massive milestone in my filmmaking journey. My objective with this work was to break traditional conventions of African narrative media. Instead of offering sanitized portrayals of Zimbabwean life, we chose deep authenticity, leveraging shadows, rich contrast ratios, and deliberate quietude within scenes to let the viewer sit in contemplation with our characters."
                    </p>

                    <p className="text-neutral-600 text-sm leading-relaxed text-justify-custom">
                      "I worked alongside dedicated crews to balance raw emotional gravity with breathtaking compositions. In documentary projects, our approach is human-centric: we listen for hours before bringing in the camera body. This creates an unhindered psychological bond that radiates beautifully through the performance."
                    </p>

                    <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-100 flex flex-col gap-3">
                      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">Key Film Credits</span>
                      <div className="grid grid-cols-2 gap-4 text-xs font-mono text-neutral-700">
                        <div>
                          <span className="text-neutral-400 block text-[9px] uppercase">Director</span>
                          <span>Tafadzwa Hampton Dube</span>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[9px] uppercase">Cinematography</span>
                          <span>Closure Productions Team</span>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[9px] uppercase">Screenplay</span>
                          <span>T. H. Dube</span>
                        </div>
                        <div>
                          <span className="text-neutral-400 block text-[9px] uppercase">Casting</span>
                          <span>Closure TV Cast Hub</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-100 px-6 py-4 bg-neutral-50 flex flex-col sm:flex-row justify-between items-center gap-4 rounded-b-3xl">
                  <div>
                    {selectedProject.youtubeUrl ? (
                      <a
                        href={selectedProject.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-2 px-5 py-2 bg-red-650 hover:bg-red-700 text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Watch Film ↗
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-neutral-400">[Watch link pending release]</span>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer font-sans"
                  >
                    Close Vision Notes
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
