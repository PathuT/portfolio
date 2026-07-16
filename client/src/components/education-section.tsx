import { portfolioData } from "@/data/portfolio-data";
import { Trophy, Lightbulb, Star, Award, Presentation, Mic, GraduationCap, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { accent } from "@/lib/colors";

const achievementIcons = {
  trophy: Trophy,
  lightbulb: Lightbulb,
  star: Star,
  award: Award,
  presentation: Presentation,
  microphone: Mic,
};

export default function EducationSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0a0d12] relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/[0.08] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-teal-400/10 border border-teal-400/25 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-teal-600 dark:text-teal-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white">Education</h2>
            </div>

            <div className="space-y-4">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none p-6 rounded-2xl transition-colors duration-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">{edu.degree}</h3>
                      <p className="text-teal-700 dark:text-teal-300 font-medium text-sm mt-1">{edu.institution}</p>
                      {edu.location && <p className="text-slate-500 text-xs mt-0.5">{edu.location}</p>}
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-mono-tech text-xs text-slate-500">{edu.date}</span>
                      <div className="text-base font-bold text-indigo-600 dark:text-indigo-300 mt-0.5 tabular-nums">{edu.score}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-indigo-400/10 border border-indigo-400/25 flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white">Certifications</h2>
            </div>

            <div className="space-y-3">
              {portfolioData.certifications.map((cert, index) => {
                const tokens = accent(cert.color);
                return (
                  <motion.div
                    key={index}
                    className={`bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none p-5 rounded-2xl border-l-4 transition-colors duration-300`}
                    style={{ borderLeftColor: tokens.solidFrom }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1 text-sm leading-snug">{cert.title}</h4>
                    <p className={`text-sm font-medium mb-1 ${tokens.textDark}`}>{cert.issuer}</p>
                    <p className="text-slate-500 text-xs">
                      {cert.date}
                      {cert.expires && ` – ${cert.expires}`}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm tracking-widest uppercase">Recognition</span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 dark:text-white mt-3">Achievements</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioData.achievements.map((achievement, index) => {
              const IconComponent = achievementIcons[achievement.icon as keyof typeof achievementIcons];
              const tokens = accent(achievement.color);

              return (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-white/[0.03] backdrop-blur-sm border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none p-6 rounded-2xl text-center transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center ${tokens.softBg}`}>
                    <IconComponent className={`w-7 h-7 ${tokens.textDark}`} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1.5 text-sm leading-snug">{achievement.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">{achievement.organization}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
