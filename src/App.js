import React, { useState } from "react";
import "./css/styles.css";
import Weather from "./components/Weather";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import Parametres from "./components/Parametres";

const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [showParams, setShowParams] = useState(false);
  const [showWeatherWidget, setShowWeatherWidget] = useState(false);
  const [ville, setVille] = useState("Paris");

  const handleStartButtonClick = (event) => {
    event.preventDefault();
    setShowStartMenu(!showStartMenu);
  };

  const handleParamButtonClick = () => {
    setShowParams(true);
    setShowStartMenu(false);
  };

  const handleCloseParams = () => {
    setShowParams(false);
  };

  const handleCheckbox = () => {
    setShowWeatherWidget(!showWeatherWidget);
  };

  return (
    <div>
      <Weather ville={ville} show={showWeatherWidget} />
      <Desktop />
      <Taskbar onStartButtonClick={handleStartButtonClick} />
      <StartMenu
        show={showStartMenu}
        onParamButtonClick={handleParamButtonClick}
      />
      <Parametres
        updateVille={(ville) => {
          setVille(ville);
        }}
        show={showParams}
        showForm={showWeatherWidget}
        onClose={handleCloseParams}
        onCheckboxClick={handleCheckbox}
        toggleWeather={handleCheckbox}
      />
    </div>
  );
};

export default App;
