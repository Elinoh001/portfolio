// data/projects.js
import project1Img from "../assets/images/gestion_enseignant.png";
import project2Img from "../assets/images/project2.jpeg";
// ...

export const projects = [
  {
    id: 1,
    title: "Application de gestion des enseignants",
    description: "Une application fullstack avec React, Node.js, Express et PostgreSQL pour gerer les salaires des enseignants.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    image: project1Img,
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/Elinoh001/ens",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio interactif",
    description: "Site personnel avec animations, dark mode et formulaire de contact fonctionnel.",
    tech: ["React", "Framer Motion", "Tailwind CSS"],
    image: project2Img,
    demoLink: "https://elino.dev",
    githubLink: "https://github.com/Elinoh001/portfolio",
    featured: false,
  },
  // ajoutez d'autres projets
];