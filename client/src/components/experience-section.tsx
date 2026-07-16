import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { accent } from "@/lib/colors";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#0b0e13] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/10 to-transparent" />
      <div className="absolute top-32 left-16 w-20 h-20 bg-teal-500/[0.06] rounded-full blur-2xl" />
      <div className="absolute bottom-40 right-24 w-16 h-16 bg-indigo-500/[0.06] rounded-full blur-xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mt-3 mb-4">Professional Experience</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-teal-600 to-indigo-500 dark:from-teal-300 dark:to-indigo-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-[.3rem] top-2 bottom-2 w-px bg-slate-200 dark:bg-white/10" />

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => {
              const tokens = accent(exp.color);
              return (
                <motion.div
                  key={index}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <span
                    className={`absolute left-0 top-2 w-2.5 h-2.5 rounded-full ${tokens.dot}`}
                    style={{ boxShadow: `0 0 0 4px ${tokens.solidFrom}26` }}
                  />

                  <div className="bg-white dark:bg-white/[0.03] rounded-2xl transition-colors duration-300 p-7 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 shadow-sm dark:shadow-none">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <p className={`font-semibold ${tokens.text}`}>{exp.company}</p>
                      </div>
                      <span className="font-mono-tech text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${tokens.dot}`} />
                          <span className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
