import { portfolioData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Code, Database, Cloud } from "lucide-react";
import { accent } from "@/lib/colors";

const categoryIcons: Record<string, typeof Code> = {
  "Full Stack Development": Code,
  "Backend & Databases": Database,
  "AI/ML & Cloud DevOps": Cloud,
};

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-[#0b0e13] relative overflow-hidden">
      <div className="absolute top-24 right-10 w-72 h-72 bg-teal-500/[0.06] rounded-full blur-[100px]" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-indigo-500/[0.06] rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-300 font-semibold text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-4">About Me</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-teal-300 to-indigo-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Summary */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-5 leading-snug">
              Building tomorrow's technology, today
            </h3>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              {portfolioData.about.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {portfolioData.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className={`text-3xl font-bold font-display mb-1 tabular-nums ${index % 2 === 0 ? "text-teal-300" : "text-indigo-300"}`}>{stat.value}</div>
                <div className="text-sm font-medium text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, groupIndex) => {
            const tokens = accent(skillGroup.color);
            const IconComponent = categoryIcons[skillGroup.category] ?? Code;
            return (
              <motion.div
                key={groupIndex}
                className="bg-white/[0.03] rounded-2xl transition-all duration-300 p-6 border border-white/10 hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tokens.softBg} border ${tokens.softBorder}`}>
                    <IconComponent className={`w-6 h-6 ${tokens.text}`} />
                  </div>
                  <h4 className="text-lg font-bold text-white">{skillGroup.category}</h4>
                </div>

                <div className="space-y-2.5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-2 rounded-lg hover:bg-white/[0.04] transition-colors duration-200 group"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200 ${tokens.dot}`} />
                      <span className="text-slate-300 font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
