import React, { useEffect, useRef, useState } from "react";

const StartMenu = ({ show, onParamButtonClick, onClose }) => {
  const componentRef = useRef(null);
  const [isOutsideClick, setIsOutsideClick] = useState(false);

  useEffect(() => {
    // Fonction pour gérer le clic à l'extérieur du composant
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        setIsOutsideClick(true); // Marquer que le clic est à l'extérieur du composant
      }
    };

    // Ajouter un écouteur d'événement au niveau du document pour capturer les clics
    document.addEventListener("mousedown", handleClickOutside);
    console.log("handleClickOutside");

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      console.log("Return click outside remove event");
    };
  }, []); // Dépendance vide pour s'assurer que l'effet ne se déclenche qu'une seule fois

  useEffect(() => {
    // Si un clic à l'extérieur du composant est détecté, fermer le composant
    if (isOutsideClick) {
      onClose(); // Appeler la fonction onClose pour fermer le composant ou effectuer une autre action
    }
  }, [isOutsideClick, onClose]);

  useEffect(() => {
    // Réinitialiser isOutsideClick lorsque show change
    setIsOutsideClick(false);
  }, [show]);

  if (!show) return null;

  return (
    <div ref={componentRef} className="start-menu" id="startMenu">
      <div className="start-menu-header">
        <span>Démarrer</span>
      </div>
      <div className="start-menu-content">
        <button href="#" className="start-menu-item">
          Programmes
        </button>
        <button href="#" className="start-menu-item">
          Documents
        </button>
        <button href="#" className="start-menu-item">
          Images
        </button>
        <button href="#" className="start-menu-item">
          Musique
        </button>
        <button
          href="#"
          className="start-menu-item start-menu-item-param"
          id="paramButton"
          onClick={onParamButtonClick}
        >
          Paramètres
        </button>
        <button href="#" className="start-menu-item">
          Rechercher
        </button>
        <button href="#" className="start-menu-item">
          Aide et Support
        </button>
      </div>
    </div>
  );
};

export default StartMenu;
