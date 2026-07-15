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
    <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.08) 2px, transparent 2px)`,
          backgroundSize: "50px 50px",
        }}
      />
      <div className="absolute top-24 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Get to know me</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mt-3 mb-4">About Me</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"
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
            <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-900 mb-5 leading-snug">
              Building tomorrow's technology, today
            </h3>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
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
            {portfolioData.about.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -3 }}
              >
                <div className="text-3xl font-bold font-display text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500">{stat.label}</div>
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
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-slate-100 hover:border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tokens.softBg}`}>
                    <IconComponent className={`w-6 h-6 ${tokens.text}`} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{skillGroup.category}</h4>
                </div>

                <div className="space-y-2.5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors duration-200 group"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200 ${tokens.dot}`} />
                      <span className="text-slate-700 font-medium text-sm">{skill}</span>
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
