import React, { useState } from "react";
import { projects } from "../data/projects";
import {
  ExternalLink,
  Github,
  Code2,
  ArrowRight,
  X,
} from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");

  // Récupérer toutes les technologies uniques pour le filtre
  const allTechs = ["all", ...new Set(projects.flatMap((p) => p.tech))];

  // Filtrer les projets
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="min-h-screen py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-4">
          Mes Projets
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Découvrez une sélection de mes réalisations. Chaque projet est conçu
          avec soin et passion.
        </p>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                filter === tech
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tech === "all" ? "Tous" : tech}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Contenu */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-200 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Boutons */}
                <div className="flex gap-3">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-medium transition"
                    >
                      <ExternalLink size={16} /> Démo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1 bg-gray-700 hover:bg-gray-600 text-gray-200 py-2 rounded-lg text-sm font-medium transition"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition"
                    aria-label="Voir plus"
                  >
                    <ArrowRight size={18} className="text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal des détails (optionnel) */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-200 mb-2">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="flex gap-4">
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
                    >
                      <ExternalLink size={18} /> Voir la démo
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-gray-200 px-5 py-2 rounded-lg transition"
                    >
                      <Github size={18} /> Code source
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;