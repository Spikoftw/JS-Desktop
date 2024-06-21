// import React from "react";
import { useState } from "react";

const Parametres = ({ show, updateVille, onClose, toggleWeather }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleWeather();
  };

  const handleBackgroundColorChoice = (color) => {
    document.body.style.backgroundColor = color;
  };

  if (!show) return null;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const cityTextContent = event.target.elements["user_name"].value;
    updateVille(cityTextContent);
  };

  return (
    <div className="parametres">
      <div className="parametres-header">
        <span>Parametres</span>
        <div className="cross-icon" onClick={onClose}>
          X
        </div>
      </div>
      <div className="parametres-content">
        <div className="parametres-items arriereplan">
          <p className="items-title arriereplan-menu-title">
            Changer la couleur d'arrière plan du bureau
          </p>
          <div className="background-colors-list">
            <button
              href="#"
              className="background-color-choice red"
              onClick={() => handleBackgroundColorChoice("#a82222")}
            ></button>
            <button
              href="#"
              className="background-color-choice blue"
              onClick={() => handleBackgroundColorChoice("#4a90e2")}
            ></button>
            <button
              href="#"
              className="background-color-choice white"
              onClick={() => handleBackgroundColorChoice("#abab9a")}
            ></button>
            <button
              href="#"
              className="background-color-choice gray"
              onClick={() => handleBackgroundColorChoice("gray")}
            ></button>
            <button
              href="#"
              className="background-color-choice purple"
              onClick={() => handleBackgroundColorChoice("purple")}
            ></button>
          </div>
        </div>
        <div className="parametres-items widgets">
          <p className="items-title widgets-menu-title">
            Configurer les widgets
          </p>
          <div className="widget-meteo">
            <p className="items-title arriereplan-menu-title">
              <Checkbox
                label="Widget Météo"
                value={checked}
                onChange={handleChange}
              />
            </p>
            {checked && (
              <form className="form-widget-meteo" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name">Ville&nbsp;:</label>
                  <input type="text" id="name" name="user_name" />
                </div>
                <div className="button">
                  <button type="submit">Valider</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Parametres;
