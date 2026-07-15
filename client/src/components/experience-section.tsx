import { portfolioData } from "@/data/portfolio-data";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { accent } from "@/lib/colors";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-40" />
      <div className="absolute bottom-40 right-24 w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-xl opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Career</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-3 mb-4">Professional Experience</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-blue-300 via-indigo-300 to-transparent" />

          <div className="space-y-10">
            {portfolioData.experience.map((exp, index) => {
              const tokens = accent(exp.color);
              return (
                <motion.div
                  key={index}
                  className="relative pl-16"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div
                    className={`absolute left-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${tokens.gradient} shadow-lg flex items-center justify-center border-4 border-white`}
                  >
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 p-7 border border-slate-100">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-5">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className={`font-semibold ${tokens.text}`}>{exp.company}</p>
                      </div>
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap ${tokens.softBg} ${tokens.text}`}>
                        {exp.date}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {exp.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${tokens.dot}`} />
                          <span className="text-slate-600 leading-relaxed text-sm">{item}</span>
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
