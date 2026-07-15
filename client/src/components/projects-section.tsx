import { portfolioData } from "@/data/portfolio-data";
import { BarChart3, CheckCircle, Workflow, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";
import { accent } from "@/lib/colors";

const iconMap = {
  "chart-bar": BarChart3,
  "check-circle": CheckCircle,
  seedling: FaLeaf,
  workflow: Workflow,
  "heart-pulse": HeartPulse,
};

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mt-3 mb-4">Featured Projects</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Showcasing solutions that blend AI, automation, and scalable engineering
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioData.projects.map((project, index) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            const tokens = accent(project.color);

            return (
              <motion.div
                key={index}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-7 hover:border-white/20 transition-colors duration-300"
                data-testid={`project-card-${index}`}
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${tokens.gradient}`}
                />

                <div className="relative flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${tokens.gradient} shadow-lg`}
                  >
                    <IconComponent className="text-white text-2xl w-6 h-6" />
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
                <p className="relative text-slate-400 mb-5 leading-relaxed text-sm">{project.description}</p>

                <div className="relative flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${tokens.softBg} ${tokens.textDark} border ${tokens.softBorder}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
