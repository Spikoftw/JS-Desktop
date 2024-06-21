import React from "react";

const StartMenu = ({ show, onParamButtonClick }) => {
  if (!show) return null;

  return (
    <div className="start-menu" id="startMenu">
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
