import { useState, useRef, useEffect } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Hook personnalisé pour rendre un élément déplaçable.
 * @param initialPosition - Position initiale de l'élément (x, y)
 * @returns Un objet contenant la position courante et une ref à attacher à l'élément.
 */
const useDraggable = (initialPosition: Position = { x: 0, y: 0 }) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const elementRef = useRef<HTMLElement>(null);

  // Références pour le drag & drop
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; elementX: number; elementY: number } | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseDown = (e: MouseEvent) => {
      // Éviter de capturer un clic sur un élément interactif à l'intérieur
      if (e.button !== 0) return; // seulement clic gauche

      // Coordonnées initiales
      const rect = element.getBoundingClientRect();
      dragStartRef.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        elementX: rect.left,
        elementY: rect.top,
      };
      isDraggingRef.current = true;

      // Ajouter les écouteurs globaux
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !dragStartRef.current) return;

      const deltaX = e.clientX - dragStartRef.current.mouseX;
      const deltaY = e.clientY - dragStartRef.current.mouseY;

      setPosition({
        x: dragStartRef.current.elementX + deltaX,
        y: dragStartRef.current.elementY + deltaY,
      });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      dragStartRef.current = null;

      // Nettoyage des écouteurs globaux
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    // Attacher l'écouteur de début de glissement à l'élément
    element.addEventListener("mousedown", handleMouseDown);

    // Nettoyage complet au démontage
    return () => {
      element.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []); // La ref est stable, on n'a pas besoin de dépendances supplémentaires

  return { position, elementRef };
};

export default useDraggable;