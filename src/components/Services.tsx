/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Service } from "../types";
import { Sliders, Video, PlaySquare, Film, Terminal, Globe, ArrowDownRight } from "lucide-react";

export default function Services() {
  const services: Service[] = [
    {
      id: "directing",
      num: "01",
      title: "Film Directing",
      description: "Developing powerful artistic direction and guiding cast and technical crews to execute gripping narrative visions on-set. Author of immersive world-building.",
    },
    {
      id: "doc-prod",
      num: "02",
      title: "Documentary Production",
      description: "Carrying out deep-dive journalistic field investigation, sensitive interviewing protocols, and environmental research to film powerful stories of human grit.",
    },
    {
      id: "tv-prod",
      num: "03",
      title: "Television Production",
      description: "Managing full executive life-cycles of broadcast pilots, series formatting, and programming guidelines to deliver top-tier commercial entertainment.",
    },
    {
      id: "video-edit",
      num: "04",
      title: "Video Editing",
      description: "Executing complex non-linear sequence construction, sound syncs, audio mastering, color grades, and technical standard formatting under AMK/HSTV guidelines.",
    },
    {
      id: "script-write",
      num: "05",
      title: "Script Writing",
      description: "Crafting captivating character dialogues, scene directions, structural arcs, screenplays, and treatments for narrative films and branded commercials.",
    },
    {
      id: "content-creation",
      num: "06",
      title: "Digital Content Creation",
      description: "Formulating impactful commercial digital content, visual teasers, high-end reels, and multi-media social assets driving audience engagement.",
    },
  ];

  // Helper to coordinate icons to services
  const getIcon = (id: string) => {
    switch (id) {
      case "directing":
        return <Video className="w-5 h-5" />;
      case "doc-prod":
        return <Film className="w-5 h-5" />;
      case "tv-prod":
        return <PlaySquare className="w-5 h-5" />;
      case "video-edit":
        return <Sliders className="w-5 h-5" />;
      case "script-write":
        return <Terminal className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-36 bg-white border-b border-gray-100 sleek-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Title & Description Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-black max-w-xl">
              Creative Capabilities
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            Delivering elite visual experiences spanning commercial television formats, independent cinema, and delicate climate advocacy.
          </p>
        </div>

        {/* Minimal Grid cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-neutral-100">
          {services.map((srv, index) => {
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative p-8 xl:p-10 bg-white border-r border-b border-neutral-100 flex flex-col justify-between min-h-[300px] transition-all duration-300 hover:bg-neutral-50/50 hover:border-black z-10 hover:z-20"
              >
                {/* Micro graphic line decorative card header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-neutral-400 font-mono tracking-widest uppercase">
                    [{srv.num}]
                  </span>
                  
                  {/* Icon Box */}
                  <div className="text-neutral-800 transition-colors duration-300 shrink-0">
                    {getIcon(srv.id)}
                  </div>
                </div>

                {/* Direct info block */}
                <div className="mt-8 flex-grow">
                  <h3 className="text-lg font-display font-bold uppercase tracking-wide text-neutral-950 mb-3 group-hover:text-black">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed text-justify-custom font-sans">
                    {srv.description}
                  </p>
                </div>

                {/* Call Action Link indicator at bottom */}
                <div className="mt-6 pt-6 border-t border-neutral-100/60 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-neutral-400 group-hover:text-black transition-colors">
                  <span>Scope details</span>
                  <ArrowDownRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 text-neutral-300 group-hover:text-black" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
