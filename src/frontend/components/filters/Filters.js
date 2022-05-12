import "./Filters.css";
import { categories } from "../../../backend/db/categories";
import { tailors } from "../../../backend/db/tailors";
import { useProduct } from "../../context/index";

const Filters = () => {
  const [{ products, filters }, productDispatch] = useProduct();

  const handleFilterChange = (filterValue) => {
    if (
      filterValue !== null &&
      filterValue !== undefined &&
      filterValue !== ""
    ) {
      if (filterValue >= 500 && filterValue <= 1500) {
        productDispatch({
          type: "INCLUDE_PRICE",
          payload: filterValue,
        });
      } else if (
        filterValue === "Lakshmi" ||
        filterValue === "Rachana" ||
        filterValue === "Raju"
      ) {
        productDispatch({
          type: "INCLUDE_TAILOR",
          payload: filterValue.toLowerCase(),
        });
      } else if (
        filterValue === "Men" ||
        filterValue === "Women" ||
        filterValue === "Children"
      ) {
        productDispatch({
          type: "INCLUDE_CATEGORY",
          payload: filterValue.toLowerCase(),
        });
      } else if (
        filterValue === "4" ||
        filterValue === "3" ||
        filterValue === "2"
      ) {
        productDispatch({
          type: "INCLUDE_RATING",
          payload: parseInt(filterValue),
        });
      } else if (filterValue === "low-high" || filterValue === "high-low") {
        productDispatch({
          type: "INCLUDE_SORTBY",
          payload: filterValue.toLowerCase(),
        });
      }
    }
  };

  const clearFilter = () => {
    productDispatch({
      type: "CLEAR_FILTER",
    });
  };
  return (
    <div className="left-nav flex-dir-col">
      <div className="filter-header flex-dir-row">
        <h2>Filters</h2>
        <h3>
          <a
            className="text-decoration-none clear-link"
            href="#"
            onClick={(event) => clearFilter()}
          >
            Clear
          </a>
        </h3>
      </div>
      <div
        className="price-filter flex-dir-col"
        onClick={(event) => handleFilterChange(event.target.value)}
      >
        <span className="text-medium">Price</span>
        <input type="range" min="500" max="1500"></input>
        <div className="slider-number flex-dir-row">
          <span>500</span>
          <span>1000</span>
          <span>1500</span>
        </div>
      </div>
      <div className="tailor-filter flex-dir-col">
        <span className="text-medium">Tailors</span>
        <div
          className="tailor-container flex-dir-col"
          onClick={(event) => handleFilterChange(event.target.value)}
        >
          {tailors.map((tailor) => {
            let tailorName = tailor.tailorName;

            return (
              <div className="tailor">
                <input
                  type="checkbox"
                  id="tailor-1"
                  name={tailor.tailorName}
                  value={tailor.tailorName}
                  checked={filters.tailors[tailor.tailorName.toLowerCase()]}
                />
                <label for="tailor-1">{tailor.tailorName}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="category-filter flex-dir-col">
        <span className="text-medium">Category</span>
        <div
          className="category-container flex-dir-col"
          onClick={(event) => handleFilterChange(event.target.value)}
        >
          {categories.map((category) => {
            return (
              <div>
                <input
                  type="checkbox"
                  id={category.categoryName}
                  name={category.categoryName}
                  value={category.categoryName}
                  checked={
                    filters.categories[category.categoryName.toLowerCase()]
                  }
                />
                <label for={category.categoryName}>
                  {category.categoryName}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="rating-filter flex-dir-col">
        <span className="text-medium">Rating</span>
        <div
          className="rating-container"
          onClick={(event) => handleFilterChange(event.target.value)}
        >
          <div>
            <input
              type="radio"
              id="max-rating"
              name="rating"
              value="4"
              checked={filters.rating === 4}
            />
            <label for="max-rating">4 Stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              id="medium-rating"
              name="rating"
              value="3"
              checked={filters.rating === 3}
            />
            <label for="medium-rating">3 stars & above</label>
          </div>
          <div>
            <input
              type="radio"
              id="min-rating"
              name="rating"
              value="2"
              checked={filters.rating === 2}
            />
            <label for="min-rating">2 stars & above</label>
          </div>
        </div>
      </div>
      <div className="sortby-filter flex-dir-col">
        <span className="text-medium">Sort By Price</span>
        <div
          className="sortby-container"
          onClick={(event) => handleFilterChange(event.target.value)}
        >
          <div>
            <input
              type="radio"
              id="low-high"
              name="sorting"
              value="low-high"
              checked={filters.sortBy === "low-high"}
            />
            <label for="low-high">Low to High</label>
          </div>
          <div>
            <input
              type="radio"
              id="high-low"
              name="sorting"
              value="high-low"
              checked={filters.sortBy === "high-low"}
            />
            <label for="high-low">High to Low</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Filters };
