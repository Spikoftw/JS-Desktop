import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faFolderOpen,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

const Desktop = () => (
  <div className="desktop" id="desktop">
    <div className="icon">
      <FontAwesomeIcon icon={faDesktop} className="icon-image computer" />
      <span>Ordinateur</span>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faFolderOpen} className="icon-image documents" />
      <span>Documents</span>
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faRecycle} className="icon-image recycle-bin" />
      <span>Corbeille</span>
    </div>
  </div>
);

export default Desktop;
