import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex-shrink-0 group"
          >
            <span className="text-lg font-bold font-display bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-indigo-300 transition-colors">
              {portfolioData.name}
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                  }`}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="/Resume/Pathu.T_resume.pdf"
              download="Pathu.T_resume.pdf"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-full transition-colors duration-200"
              data-testid="nav-download-resume"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.href
                      ? "text-white bg-white/10"
                      : "text-slate-300 hover:text-blue-400 hover:bg-slate-800/50"
                  }`}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/Resume/Pathu.T_resume.pdf"
                download="Pathu.T_resume.pdf"
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-blue-400 hover:bg-slate-800/50"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
