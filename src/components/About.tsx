/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Film, User, Heart, Sparkles, Award } from "lucide-react";

export default function About() {
  const stats = [
    { value: "04+", label: "Awarded Projects" },
    { value: "06+", label: "Core Services Offered" },
    { value: "2024", label: "Executive Directing" },
    { value: "Harare", label: "Production Hub" },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-neutral-50/50 border-t border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Vertical Sub-title & Signature Visual Details with custom entry translation */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 bg-neutral-100 rounded-lg text-black">
                <User className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                Profile
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-black">
              About Me
            </h2>

            <div className="h-[2px] w-12 bg-black"></div>

            {/* Aesthetic Director Quote card */}
            <motion.div 
              whileHover={{ y: -4, shadow: "0 10px 30px rgba(0,0,0,0.03)" }}
              className="mt-4 p-6 bg-white border border-neutral-200 rounded-none transition-all duration-300"
            >
              <span className="text-4xl font-serif text-neutral-300 leading-none">“</span>
              <p className="text-sm font-medium italic text-neutral-700 leading-relaxed -mt-2 font-display">
                Cinematography is a creative language of deep human empathy. Every frame must breathe state, culture, and meaning.
              </p>
              <div className="flex items-center gap-2 mt-4 text-[10px] text-gray-400 font-mono tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                ARTISTIC REVERIE
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Editorial Bio layout & Key Stats Grid */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* The main cinematic narrative paragraphs styled with sequential staggered motion */}
            <div className="flex flex-col gap-8 text-neutral-800 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
              <motion.p 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-medium text-black text-2xl md:text-3xl leading-snug tracking-tight"
              >
                I am <span className="underline decoration-1 underline-offset-4">Tafadzwa Hampton Dube</span>, a Zimbabwean filmmaker, director, producer, and storyteller passionate about creating impactful visual experiences.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-gray-500 text-justify-custom text-sm leading-relaxed"
              >
                My work spans narrative films, documentaries, television productions, branded content, and digital storytelling. I believe that cinema has the ultimate potential to transcend geographic boundaries and capture the deep complexities of human struggle, connection, and triumph.
              </motion.p>

              {/* Highlighting roles in highly elegant blockquote/cards with staggered entrances */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-white border border-neutral-200 rounded-none flex flex-col gap-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-black"></span>
                    <span className="text-[9px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      CURRENT COMMITMENT
                    </span>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-black font-display">
                    Closure Productions & Closure TV
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                    Serving as Head Manager & Chief Editor driving narrative guidelines and television formats.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="p-6 bg-white border border-neutral-200 rounded-none flex flex-col gap-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-300"></span>
                    <span className="text-[9px] font-bold font-mono text-neutral-400 uppercase tracking-widest">
                      PAST TENURE
                    </span>
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-neutral-800 font-display">
                    HSTV — Alpha Media Holdings
                  </h4>
                  <p className="text-xs text-neutral-500 font-sans leading-relaxed">
                    Former Head Video Editor leading cinematic cuts for various high-profile broadcast schedules.
                  </p>
                </motion.div>

              </div>
            </div>

            {/* Interactive Stats Grid */}
            <div className="mt-4 pt-10 border-t border-neutral-100">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 mb-6">
                Portfolio In Numbers
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-neutral-200">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.015)" }}
                    className="p-6 bg-white border-r border-b border-neutral-200 text-center flex flex-col gap-1 rounded-none transition-colors duration-300"
                  >
                    <span className="text-3xl font-display font-black text-black tracking-tighter block">
                      {stat.value}
                    </span>
                    <span className="text-[9px] text-gray-400 font-mono tracking-widest uppercase block">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
