import React from "react";
import { Categories } from "../index";
import { frontImage } from "../../assets/index";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <main className="main-container flex-dir-col">
        <div className="media flex-dir-col">
          <div className="media-content flex-dir-col">
            <h1>
              Welcome to <span className="title">Local Tailor</span>
            </h1>
            <span className="text-medium">
              for awesome, budget friendly men, women and kids wear by best
              skilled local tailors
            </span>
            <button
              className="btn primary-btn shp-now-btn"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
            <img className="media-image" src={frontImage} alt=""></img>
          </div>
        </div>
        <Categories />
      </main>
    </React.Fragment>
  );
};

export { Welcome };
