/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Experience } from "../types";
import { Briefcase, Layers, SlidersHorizontal, Award, Sparkles } from "lucide-react";

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "closure-tv",
      company: "Closure Productions & Closure TV",
      role: "Head Manager & Chief Editor",
      period: "2024 – Present",
      description: "Directing narrative guidelines, program formats, television editorial budgets, and executive content strategies. Directly overseeing multiple crews.",
    },
    {
      id: "hstv",
      company: "HSTV Under Alpha Media Holdings",
      role: "Head Video Editor",
      period: "2023",
      description: "Supervised high-volume digital broadcast editing, non-linear system synchronizations, graphic overlays, and cinematic trailer production lines.",
    },
    {
      id: "studio-art",
      company: "Studio Art Pictures",
      role: "Editor & Stage Manager",
      period: "2021 – 2022",
      description: "Managed physical stages, actors scheduling, and digital cuts of artistic showcases and stage footage records.",
    },
  ];

  const skills = [
    { name: "Film Directing", category: "Production" },
    { name: "Documentary Production", category: "Production" },
    { name: "Television Production", category: "Production" },
    { name: "Production Management", category: "Production" },
    { name: "Video Editing", category: "Post-Production" },
    { name: "Creative Direction", category: "Concept" },
    { name: "Storytelling", category: "Concept" },
    { name: "Script Writing", category: "Concept" },
    { name: "Content Creation", category: "Marketing" },
  ];

  return (
    <section id="experience" className="py-24 md:py-36 bg-neutral-50/55 border-b border-gray-100 sleek-grid-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Chronological Experience Timeline (8 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-12 text-left">
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                  Career Map
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-black">
                Professional Experience
              </h2>
            </div>

            {/* Custom Vertical Pipeline Timeline CONTAINER */}
            <div className="relative pl-6 md:pl-10 ml-3 space-y-12">
              
              {/* Vertical Line drawing effect: a static background path and an animating foreground scaleY trail */}
              <div className="absolute left-[2px] top-2 bottom-2 w-[1px] bg-neutral-200" />
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-[1.5px] top-2 bottom-2 w-[2px] bg-black origin-top z-0"
              />

              {experiences.map((exp, index) => {
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 35, x: -15 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                  >
                    {/* Ring indicator on timeline - animated glowing/pulsating square indicator */}
                    <motion.div 
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      animate={{ 
                        boxShadow: ["0 0 0 0px rgba(0,0,0,0.15)", "0 0 0 8px rgba(0,0,0,0)", "0 0 0 0px rgba(0,0,0,0.15)"]
                      }}
                      className="absolute -left-[31px] md:-left-[47px] top-2 z-10 w-2.5 h-2.5 bg-black"
                      style={{ animationDuration: "2.5s", animationIterationCount: "infinite" }}
                    />

                    {/* Metadata header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold font-mono tracking-wider text-neutral-400 uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-extrabold text-neutral-900 tracking-tight">
                      {exp.role}
                    </h3>
                    
                    <h4 className="text-sm font-semibold text-neutral-500 italic mt-0.5">
                      {exp.company}
                    </h4>

                    <p className="text-sm text-neutral-500 mt-3 leading-relaxed max-w-xl text-justify-custom font-sans">
                      {exp.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dynamic Skills & Core Matrix (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white border border-neutral-200 rounded-none flex flex-col gap-6"
            >
              
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                  Skill Set Matrix
                </span>
              </div>

              <h3 className="text-xl font-display font-semibold uppercase tracking-wider text-black">
                Studio Capabilities
              </h3>

              <div className="h-[2px] w-[24px] bg-black"></div>

              <p className="text-xs text-neutral-500 leading-relaxed font-mono">
                [Hard & soft studio tools verified under broadcast specifications to ensure narrative mastery across all distribution channels.]
              </p>

              {/* Tag matrix layout with floating card reveals */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => {
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.93 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="px-3 py-2 bg-neutral-50 hover:bg-neutral-900 hover:text-white rounded-none border border-neutral-200 hover:border-neutral-900 transition-all duration-300 flex flex-col gap-0.5 group cursor-pointer"
                    >
                      <span className="text-xs font-bold font-display text-neutral-800 group-hover:text-white tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[8px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-neutral-500 font-bold">
                        {skill.category}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Verified director badge */}
              <div className="mt-4 pt-6 border-t border-neutral-100 flex items-center gap-3.5">
                <span className="p-2 bg-amber-50/50 rounded-none text-amber-700 shrink-0 border border-amber-200">
                  <Award className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-850">Zimbabwe Filmmakers Guild</h4>
                  <p className="text-[10px] text-neutral-500 leading-normal mt-0.5">Verified Director and video editing expert status representing localized cultural content.</p>
                </div>
              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
