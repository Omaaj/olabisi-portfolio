import React from "react";
import "./Home.scss";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid  customTablet1:container home section">
      <div className="img__box">
        <img src="./img/Untitled design (1).png" alt="" className="home__img" />
      </div>
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span className="font-semibold">I'm Atunwon Olajuwon.</span>
            Frontend Engineer
          </h1>
          <p className="mt-4 font-semibold text-customGray-800 customMiniTablet:w-[400px]">
            I build production-ready web applications that work reliably in the
            real world.
          </p>
          <p className="home__description">
            My work includes authentication, dashboards, transactions, API
            integration, and state management with a focus on building complete
            systems.
          </p>
          <Link to="/portfolio" className="button">
            View My Work
            <span className="button__icon">
              <span className="relative left-5 top-[18px]">
                <FaArrowRight />
              </span>
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
}
