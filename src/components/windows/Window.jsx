import React from "react";
import { Briefcase, Linkedin, Github, Mail } from "lucide-react";

const Window = ({ children }) => {
  return (
    // `fixed inset-0` colle la fenêtre aux 4 bords de l'écran
    // `overflow-hidden` évite les barres de défilement indésirables
    <div className="fixed inset-0 bg-gray-900 border border-gray-700 overflow-hidden flex flex-col">
      
      {/* Header (style Windows) */}
      <div className="h-12 bg-gray-800 flex items-center justify-between px-4 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-blue-500" />
          <span className="text-sm font-medium text-gray-200">Elino · Portfolio</span>
        </div>

        {/* Conteneur des 3 points : `shrink-0` empêche qu'ils soient compressés */}
        <div className="flex gap-2 shrink-0">
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
      </div>

      {/* Contenu principal : occupe tout l'espace restant et scroll si nécessaire */}
      <div className="flex-1 overflow-auto p-6">
        {children}
      </div>

      {/* Footer - Liens professionnels */}
      <div className="bg-gray-800 border-t border-gray-700 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <Briefcase size={16} className="text-gray-400" />
          <span className="font-medium text-gray-300">Elino · Portfolio</span>
        </div>

        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/elino Raberanto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Elinoh001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
          >
            <Github size={18} />
            GitHub
          </a>
          <a
            href="mailto:elinoraberanto@gmail.com"
            className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            <Mail size={18} />
            Email
          </a>
        </div>
      </div>

    </div>
  );
};

export default Window;