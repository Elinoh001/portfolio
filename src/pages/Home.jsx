import React, { useEffect, useState } from "react";
import profile from "../assets/images/profile.jpg";
import {
  ArrowRight,
  Code2,
  Database,
  Server,
  Figma,
  Github,
  Braces,
  Palette,
  Download,
} from "lucide-react";

const texts = [
  "Développeur Fullstack",
  "Créateur d'applications Web",
  "Développeur Desktop & Mobile",
  "Passionné de technologie",
];

const skills = [
  { name: "React", icon: Braces, percent: 62 },
  { name: "Node.js", icon: Server, percent: 66 },
  { name: "Tailwind CSS", icon: Palette, percent: 74 },
  { name: "Python", icon: Code2, percent: 78 },
  { name: "PostgreSQL", icon: Database, percent: 74 },
  { name: "Figma", icon: Figma, percent: 68 },
  { name: "GitHub", icon: Github, percent: 65 },
  { name: "Kotlin", icon: Code2, percent: 50 },
];

const Home = ({ setPage }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < texts[index].length) {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 60);
    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section className="min-h-screen bg-gray-900 px-4 md:px-8 py-12 flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 md:gap-6 max-w-3xl mx-auto w-full">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300 mb-4">
            {text}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
            Je conçois et développe des applications modernes, performantes et adaptées aux besoins réels.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-center">
          <div className="relative group">
            <img
              src={profile}
              alt="Profil Elino"
              className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border-4 border-gray-500 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_#3b82f6]"
            />
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-blue-400 font-serif tracking-wide hover:scale-105 transition">
            Elino
          </h1>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            {/* Bouton de navigation vers la page Projets */}
            <button
              onClick={() => setPage("projects")}
              className="bg-blue-500 px-6 py-2 rounded hover:scale-105 transition flex items-center justify-center gap-2"
            >
              Voir mes projets <ArrowRight size={18} />
            </button>
            <a
              href="/cv.pdf"
              download
              className="border border-gray-600 px-6 py-2 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2"
            >
              Télécharger mon CV <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 w-24 h-1 bg-blue-500 rounded-full animate-pulse mx-auto"></div>

      <div className="mt-12 max-w-5xl mx-auto w-full">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-8 text-center">
          Mes compétences
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-md hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <Icon size={40} className="text-blue-400 mb-2" />
                <span className="text-gray-300 text-sm font-medium mb-2">
                  {skill.name}
                </span>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 mt-1">{skill.percent}%</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;