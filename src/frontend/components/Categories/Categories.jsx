import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../backend/db/categories";
import { useProduct } from "../../context";
import { getCategorizedProducts } from "../../utils/productFilters";
import "./Categories.css";

const Categories = () => {
  const [{ products }, productDispatch] = useProduct();

  const categoryActionHandler = (categorie) => {
    productDispatch({
      type: "INCLUDE_CATEGORY",
      payload: categorie.toLowerCase(),
    });
  };

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
                <Link
                  className="text-decoration-none"
                  to="/products"
                  value={categorie}
                  onClick={(event) => categoryActionHandler(event.target.text)}
                >
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
