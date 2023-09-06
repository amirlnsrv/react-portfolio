import React from "react";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, ReactJS, React Router, Redux(Redux Toolkit), HTML,
                CSS, SCSS, NPM, BootStrap, Yarn, Vite
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, MongoDB</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
