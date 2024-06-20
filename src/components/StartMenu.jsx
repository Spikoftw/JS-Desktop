import React from "react";

const StartMenu = ({ show, onParamButtonClick }) => {
  if (!show) return null;

  return (
    <div className="start-menu" id="startMenu">
      <div className="start-menu-header">
        <span>Démarrer</span>
      </div>
      <div className="start-menu-content">
        <a href="#" className="start-menu-item">
          Programmes
        </a>
        <a href="#" className="start-menu-item">
          Documents
        </a>
        <a href="#" className="start-menu-item">
          Images
        </a>
        <a href="#" className="start-menu-item">
          Musique
        </a>
        <a
          href="#"
          className="start-menu-item start-menu-item-param"
          id="paramButton"
          onClick={onParamButtonClick}
        >
          Paramètres
        </a>
        <a href="#" className="start-menu-item">
          Rechercher
        </a>
        <a href="#" className="start-menu-item">
          Aide et Support
        </a>
      </div>
    </div>
  );
};

export default StartMenu;
