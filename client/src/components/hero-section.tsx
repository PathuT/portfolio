import { portfolioData } from "@/data/portfolio-data";
import { ChevronDown, Download, ArrowRight, Sparkles, MapPin, Code2, CalendarClock, Bot, Layers } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const initials = portfolioData.name
  .split(" ")
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

const statIcons = [Code2, CalendarClock, Bot, Layers];

export default function HeroSection() {
  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.25, staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { y: 16, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 overflow-hidden pt-24 pb-16"
    >
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Soft ambient glows */}
      <motion.div
        className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-blue-600/20 rounded-full blur-[120px]"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-20 w-[28rem] h-[28rem] bg-indigo-600/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.4) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8"
              variants={itemVariants}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-blue-300 text-sm font-medium">Open to new opportunities</span>
            </motion.div>

            <motion.h1
              className="font-display font-bold text-white leading-[1.05] mb-6 text-4xl sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {portfolioData.name}
              </span>
            </motion.h1>

            <motion.div
              className="text-xl sm:text-2xl text-slate-300 font-medium mb-6 h-9"
              variants={itemVariants}
            >
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Engineer",
                    "AI & Agentic Systems Developer",
                    "Backend & API Architect",
                    "GenAI Solutions Engineer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 55,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
              variants={itemVariants}
            >
              I build <span className="text-slate-200 font-medium">scalable, secure, high-performance</span> software —
              blending full stack engineering, agentic AI, and cloud-native architecture into products that ship.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              variants={itemVariants}
            >
              <motion.button
                onClick={handleScrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-contact-me"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 border border-slate-700 text-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/5 hover:border-slate-600 transition-colors"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                View Work
              </motion.button>
              <motion.a
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-slate-300 px-4 py-3.5 font-medium hover:text-white transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-10"
              variants={itemVariants}
            >
              {["Next.js", "React.js", "Node.js", "FastAPI", "Agentic AI", "AWS", "Docker", "LangChain"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-xs font-medium hover:border-blue-500/30 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                )
              )}
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-3"
              variants={itemVariants}
            >
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-full flex items-center justify-center transition-colors"
                data-testid="link-github"
              >
                <FaGithub className="text-white text-lg" />
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 rounded-full flex items-center justify-center transition-colors"
                data-testid="link-linkedin"
              >
                <FaLinkedin className="text-white text-lg" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - profile card */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-5">
                    <motion.div
                      className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-70 blur-md"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center border-4 border-slate-950 shadow-xl">
                      <span className="font-display text-3xl font-bold text-white">{initials}</span>
                    </div>
                    <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-950" />
                  </div>

                  <h3 className="text-white font-display font-bold text-xl mb-1.5">{portfolioData.name}</h3>
                  <p className="text-slate-400 text-sm font-medium mb-2">{portfolioData.roleTitle}</p>
                  <div className="inline-flex items-center gap-1.5 text-slate-500 text-xs mb-6">
                    <MapPin className="w-3.5 h-3.5" />
                    {portfolioData.location}
                  </div>

                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                  <div className="grid grid-cols-2 gap-3 w-full">
                    {portfolioData.about.stats.map((stat, index) => {
                      const StatIcon = statIcons[index] ?? Code2;
                      return (
                        <motion.div
                          key={stat.label}
                          className="bg-white/[0.03] border border-white/10 rounded-xl py-4 px-3 text-left hover:bg-white/[0.06] hover:border-white/20 transition-colors"
                          whileHover={{ y: -2 }}
                        >
                          <StatIcon className="w-4 h-4 text-blue-400 mb-2" />
                          <div className="text-xl font-bold text-white font-display leading-none">{stat.value}</div>
                          <div className="text-[10px] uppercase tracking-wide text-slate-400 mt-1.5 leading-tight">
                            {stat.label}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={handleScrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to projects"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  );
}
