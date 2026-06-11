/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Inquiry } from "../types";
import { Phone, Mail, MapPin, Send, CheckCircle2, Inbox, Trash2, ShieldAlert, Sparkles, Sliders, MessageCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("Film Directing");
  const [message, setMessage] = useState("");
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showAdminLogs, setShowAdminLogs] = useState(false);

  // Load inquiries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("hampton_portfolio_inquiries");
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const projectTypes = [
    "Film Directing",
    "Documentary Production",
    "Television Production",
    "Video Editing",
    "Script Writing",
    "Digital Content Creation",
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Let us know your name.";
    if (!email.trim()) {
      newErrors.email = "We'll need an email to respond.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "This email looks invalid.";
    }
    if (!message.trim()) newErrors.message = "Please write a brief description of your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury slow network transmission
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: "inq_" + Date.now(),
        name,
        email,
        projectType,
        message,
        createdAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem("hampton_portfolio_inquiries", JSON.stringify(updated));

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Clear fields
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = inquiries.filter((inq) => inq.id !== id);
    setInquiries(filtered);
    localStorage.setItem("hampton_portfolio_inquiries", JSON.stringify(filtered));
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-white overflow-hidden sleek-grid-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
          
          {/* Left Block: Communication Coordinates & Core Bio (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-neutral-100 rounded-lg text-black">
                  <Mail className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold font-mono tracking-widest text-neutral-400 uppercase">
                  Collaborate
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight text-black leading-tight">
                Let's Work Together
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans max-w-sm">
                Get in touch to bring high-end cinematic direction and authentic video editing storytelling to your next film or television venture.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <span className="p-3 bg-neutral-50 border border-neutral-200 rounded-none text-neutral-800">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-none mb-1.5">Phone Call</h4>
                  <a href="tel:+263773334541" className="text-base font-semibold text-neutral-900 font-display hover:underline">
                    +263 773 334 541
                  </a>
                </div>
              </div>

              {/* Pulsating WhatsApp Button Block */}
              <div className="flex items-start gap-4">
                <motion.span 
                  animate={{ 
                    boxShadow: ["0 0 0 0px rgba(34,197,94,0.3)", "0 0 0 10px rgba(34,197,94,0)", "0 0 0 0px rgba(34,197,94,0.3)"]
                  }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                  className="p-3 bg-emerald-50 border border-emerald-200 rounded-none text-emerald-600 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.span>
                <div>
                  <h4 className="text-[10px] text-emerald-600 font-mono uppercase tracking-widest leading-none mb-1.5 font-bold">Instant Chat</h4>
                  <a 
                    href="https://wa.me/263773334541" 
                    target="_blank" 
                    referrerPolicy="no-referrer"
                    className="text-base font-semibold text-emerald-700 font-display hover:underline uppercase tracking-wide flex items-center gap-1.5"
                  >
                    Chat on WhatsApp
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-neutral-50 border border-neutral-200 rounded-none text-neutral-800">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-none mb-1.5">Direct Email</h4>
                  <a href="mailto:www.tafadzwadube619@gmail.com" className="text-base font-semibold text-neutral-900 font-display hover:underline">
                    www.tafadzwadube619@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="p-3 bg-neutral-50 border border-neutral-200 rounded-none text-neutral-800">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <h4 className="text-[10px] text-gray-400 font-mono uppercase tracking-widest leading-none mb-1.5">HQ Studio Location</h4>
                  <p className="text-base font-semibold text-neutral-900 font-display">
                    Harare, Zimbabwe
                  </p>
                </div>
              </div>

            </div>

            {/* Inquiries Counter Dashboard Shortcut */}
            {inquiries.length > 0 && (
              <div className="p-5 bg-neutral-50 border border-neutral-200 rounded-none flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Inbox className="w-4 h-4 text-neutral-600 animate-bounce" />
                  <div>
                    <span className="text-xs font-bold font-mono uppercase tracking-widest block text-neutral-800">Local Inboxes</span>
                    <span className="text-[10px] text-neutral-500 font-mono block">[{inquiries.length} submitted logs to Hampton's desk]</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAdminLogs(!showAdminLogs)}
                  className="px-3.5 py-1.5 bg-neutral-200 hover:bg-neutral-900 hover:text-white text-neutral-700 font-mono text-[10px] rounded-none transition-colors cursor-pointer"
                >
                  {showAdminLogs ? "HIDE INBOX" : "VIEW INBOX"}
                </button>
              </div>
            )}

          </div>

          {/* Right Block: Minimal interactive form letter (7 Columns) */}
          <div className="lg:col-span-7 w-full">
            
            <motion.div 
              layout
              className="p-8 md:p-10 bg-neutral-50/50 border border-neutral-200 rounded-none"
            >
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
                      <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                        CLOSURE TRANSMISSION LEDGER
                      </span>
                      <Sparkles className="w-4 h-4 text-neutral-400" />
                    </div>

                    {/* Form Fields spacing */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Name input */}
                      <div className="flex flex-col gap-1.5 animate-fade-in-up">
                        <label className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                          }}
                          placeholder="Johnathan Doe"
                          className={`w-full px-4 py-3 bg-white rounded-none border font-medium text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300 ${
                            errors.name ? "border-red-400 focus:ring-red-400/5" : "border-neutral-250 focus:border-black focus:shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                          }`}
                        />
                        {errors.name && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.name}</span>}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          placeholder="name@company.com"
                          className={`w-full px-4 py-3 bg-white rounded-none border font-medium text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300 ${
                            errors.email ? "border-red-400 focus:ring-red-400/5" : "border-neutral-250 focus:border-black focus:shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                          }`}
                        />
                        {errors.email && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.email}</span>}
                      </div>

                    </div>

                    {/* Project Type Picker */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase mb-1">
                        Select Project Type
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {projectTypes.map((type) => {
                          const isActive = projectType === type;
                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setProjectType(type)}
                              className={`px-3 py-2.5 rounded-none text-[11px] font-medium font-sans border text-center transition-all cursor-pointer ${
                                isActive
                                  ? "bg-black border-black text-white"
                                  : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-300"
                              }`}
                            >
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message textarea */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase">
                        Project Brief
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
                        }}
                        placeholder="Detail your narrative goals, schedule timing, budget structure, or television layout objectives..."
                        className={`w-full px-4 py-3 bg-white rounded-none border font-medium text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-300 ${
                          errors.message ? "border-red-400 focus:ring-red-400/5" : "border-neutral-250 focus:border-black focus:shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                        }`}
                      />
                      {errors.message && <span className="text-[10px] font-mono text-red-500 mt-1">{errors.message}</span>}
                    </div>

                    {/* Action Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white hover:bg-neutral-800 rounded-none font-semibold tracking-wider uppercase text-xs transition-all cursor-pointer shadow-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-3.5 h-3.5 ml-1" />
                        </>
                      )}
                    </button>
                    
                  </motion.form>
                ) : (
                  <motion.div
                    key="contact-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="mx-auto w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-neutral-950 mb-2">
                      Inquiry Transmitted
                    </h3>
                    <p className="text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed mb-6">
                      Your creative inquiry ledger has been received. Tafadzwa Hampton Dube is compiling response coordinates.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-xs font-semibold text-neutral-800 transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Log Another Letter
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </div>

        </div>

        {/* Admin Local Logs Drawer Interface (highly advanced, luxury layout) */}
        <AnimatePresence>
          {showAdminLogs && inquiries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-16 p-6 md:p-8 bg-neutral-900 text-white rounded-none border border-neutral-800 shadow-none overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Inbox className="w-5 h-5 text-neutral-400" />
                  <h4 className="font-display font-medium text-lg leading-none tracking-tight">Tafadzwa Hampton Dube's Studio Ledger Inbox</h4>
                </div>
                <span className="text-[10px] font-mono bg-neutral-800 px-3 py-1.5 rounded-none border border-neutral-750 text-neutral-300">
                  SECURE LOCAL LEDGER
                </span>
              </div>

              <div className="space-y-4">
                {inquiries.map((inq, index) => (
                  <motion.div
                    key={inq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-5 bg-neutral-950 rounded-none border border-neutral-800 relative group"
                  >
                    {/* Delete action button */}
                    <button
                      onClick={() => handleDeleteInquiry(inq.id)}
                      className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-red-400 transition-colors cursor-pointer"
                      title="Delete log"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start pr-8">
                      {/* Name card */}
                      <div className="md:col-span-4 space-y-1">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block">Client Source</span>
                        <h5 className="font-display font-bold text-sm text-neutral-200">{inq.name}</h5>
                        <a href={`mailto:${inq.email}`} className="text-xs text-neutral-400 block hover:underline font-mono">
                          {inq.email}
                        </a>
                        <span className="text-[10px] text-neutral-500 font-mono block pt-1">{inq.createdAt}</span>
                      </div>

                      {/* Type card */}
                      <div className="md:col-span-3">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Project Category</span>
                        <span className="px-2.5 py-1 bg-neutral-800 border border-neutral-700/50 rounded text-[10px] font-mono text-neutral-200 uppercase tracking-wider block w-fit">
                          {inq.projectType}
                        </span>
                      </div>

                      {/* Message card */}
                      <div className="md:col-span-5">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Brief Description</span>
                        <p className="text-xs text-neutral-300 leading-relaxed font-sans text-justify-custom h-max line-clamp-4">
                          "{inq.message}"
                        </p>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
