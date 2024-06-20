import React, { useEffect } from "react";

const Taskbar = ({ onStartButtonClick }) => {
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      document.getElementById("clock").textContent = `${hours}:${minutes}`;

      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();
      document.getElementById("date").textContent = `${day}/${month}/${year}`;
    };

    const clockInterval = setInterval(updateClock, 1000);
    updateClock();
    return () => clearInterval(clockInterval);
  }, []);

  return (
    <div className="taskbar">
      <a
        href="#"
        className="start-button"
        id="startButton"
        onClick={onStartButtonClick}
      >
        <span>Démarrer</span>
      </a>
      <div className="taskbar-icons">
        <div className="taskbar-icon folder"></div>
        <div className="taskbar-icon explorer"></div>
      </div>
      <div className="system-tray">
        <div className="notification"></div>
      </div>
      <div className="datetime">
        <div className="clock" id="clock">
          12:34
        </div>
        <div className="date" id="date">
          27/05/2024
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
