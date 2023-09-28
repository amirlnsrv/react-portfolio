import React from "react";
import "./style.css";

import open from "./open-in-browser.png";

export const BtnLinkToOpen = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={open} alt="" />
      Open In New Tab
    </a>
  );
};
