import React, { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Window from "./components/windows/Window";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  const tabs = [
    { id: "home", label: "Accueil", component: <Home setPage={setPage} /> },
    { id: "about", label: "À propos", component: <About /> },
    { id: "projects", label: "Projets", component: <Projects /> },
    { id: "contact", label: "Contact", component: <Contact /> },
  ];

  const activePage = tabs.find((tab) => tab.id === page)?.component || tabs[0].component;

  return (
    <MainLayout>
      <Window>
        <div className="flex gap-2 sm:gap-4 border-b border-gray-700 pb-3 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setPage(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap
                ${page === tab.id
                  ? "text-blue-400 bg-gray-800/50 shadow-md"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800/30"
                }`}
            >
              {tab.label}
              {page === tab.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        <div className="transition-opacity duration-300 ease-in-out animate-fadeIn">
          {activePage}
        </div>
      </Window>
    </MainLayout>
  );
}

export default App;