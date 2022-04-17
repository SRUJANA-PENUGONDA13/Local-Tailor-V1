import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../backend/db/categories";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="featured-categories flex-dir-col">
      <h1>Featured Categories</h1>
      <p className="text-medium">
        Below are the trending featured products of Local Tailor
      </p>
      <div className="categories flex-dir-row">
        {categories &&
          categories.map((categorie) => {
            return (
              <p className="categorie">
                <Link className="text-decoration-none" to="/products">
                  {categorie.categoryName}
                </Link>
              </p>
            );
          })}
      </div>
    </div>
  );
};

export { Categories };
