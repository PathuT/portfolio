import { portfolioData } from "@/data/portfolio-data";
import { Heart } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0d12] py-8 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-500 text-sm text-center md:text-left">
            © {year} {portfolioData.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-slate-300 text-sm" />
            </a>
            <a
              href={portfolioData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-slate-300 text-sm" />
            </a>
          </div>

          <div className="text-slate-500 text-sm flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and a lot of coffee
          </div>
        </div>
      </div>
    </footer>
  );
}
