import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="featured-categories flex-dir-col">
      <h1>Featured Categories</h1>
      <p className="text-medium">
        Below are the trending featured products of Local Tailor
      </p>
      <div className="categories flex-dir-row">
        <p className="categorie">
          <a className="text-decoration-none" href="/products">
            Men
          </a>
        </p>
        <p className="categorie">
          <a className="text-decoration-none" href="/products">
            Women
          </a>
        </p>
        <p className="categorie">
          <a className="text-decoration-none" href="/products">
            Children
          </a>
        </p>
      </div>
    </div>
  );
};

export { Categories };
