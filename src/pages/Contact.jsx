import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  FacebookIcon,
} from "lucide-react";

const Contact = () => {
  // État du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState({});

  // Gestion des changements
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Efface l'erreur du champ quand l'utilisateur tape
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation simple
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis";
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulation d'envoi (remplacer par un appel API réel)
    setIsSent(true);
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSent(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-900">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
          Me contacter
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne gauche - Infos de contact */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Coordonnées
            </h3>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:elino@example.com"
                    className="text-gray-200 hover:text-blue-400 transition"
                  >
                    elinoraberanto@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a
                    href="tel:+26132 22 938 07"
                    className="text-gray-200 hover:text-blue-400 transition"
                  >
                    +261 32 22 938 07
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500/20 p-3 rounded-full">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Localisation</p>
                  <p className="text-gray-200">Antananarivo, Madagascar</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-gray-300 font-medium mb-4">Retrouvez-moi sur</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Elinoh001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 hover:text-white transition group"
                >
                  <Github size={22} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/elino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 hover:text-white transition group"
                >
                  <Linkedin size={22} className="text-gray-300 group-hover:text-white" />
                </a>
                <a
                  href="https://facebook.com/Elinoh Rab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 hover:text-white transition group"
                >
                  <FacebookIcon size={22} className="text-gray-300 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Colonne droite - Formulaire */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-semibold text-gray-200 mb-6">
              Envoyez-moi un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.name ? "border border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-gray-700 text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.message ? "border border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSent}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSent ? (
                  <>
                    <CheckCircle size={20} /> Envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} /> Envoyer
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;