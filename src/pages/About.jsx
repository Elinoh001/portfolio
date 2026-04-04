import React from "react";
import { motion } from "framer-motion";
import { 
  Code, Calendar, MapPin, Mail, Github, Linkedin, Briefcase 
} from "lucide-react";

const techs = [
  "React", "Next.js", "Node.js", "TypeScript", "Tailwind", 
  "Python", "PostgreSQL", "MongoDB", "Figma"
];

const About = () => {
  return (
    <div className="space-y-10 px-4 md:px-0">
      
      {/* En-tête */}
      <motion.div
        className="flex items-center gap-2 border-b border-gray-700 pb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Code size={28} className="text-blue-400" />
        <h2 className="text-2xl font-bold text-gray-100">À propos</h2>
      </motion.div>

      {/* Grille principale */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Présentation */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="text-blue-400 font-medium">Elino</span>, développeur fullstack.  
            Je crée des applications web, desktop et mobile avec des technologies modernes.  
            Actuellement à la recherche de projets ambitieux où je peux collaborer et apprendre.
          </p>
          
          {/* Icônes de contact */}
          <div className="flex gap-4">
            <motion.a 
              href="https://github.com/Elinoh001" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-transform"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Github size={22} />
            </motion.a>
            <motion.a 
              href="#" target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-transform"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Linkedin size={22} />
            </motion.a>
            <motion.a 
              href="mailto:elinoraberanto@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-transform"
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </motion.div>

        {/* Infos clés */}
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: Calendar, title: "Expérience", value: "2+ ans · Fullstack" },
            { icon: MapPin, title: "Localisation", value: "Madagascar · Remote" },
            { icon: Briefcase, title: "Projets", value: "10+ livrés" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 flex items-center gap-3 hover:bg-gray-700/60 cursor-pointer transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <item.icon className="text-blue-400" size={22} />
              <div>
                <p className="text-gray-400 text-sm">{item.title}</p>
                <p className="text-gray-200 font-medium">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stack technique */}
      <motion.div
        className="mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-gray-200 flex items-center gap-2 mb-4">
          <Code size={20} className="text-blue-400" />
          Stack technique
        </h3>
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-gray-800/70 rounded-full text-sm text-gray-300 border border-gray-700 cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#1e40af", color: "#fff" }}
              transition={{ duration: 0.3, delay: 0.05 * i }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div
        className="pt-2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-sm">
          ✨ Disponible pour collaborations et projets intéressants.  
          <a href="/contact" className="text-blue-400 hover:underline ml-1">Discutons-en</a>
        </p>
      </motion.div>
    </div>
  );
};

export default About;