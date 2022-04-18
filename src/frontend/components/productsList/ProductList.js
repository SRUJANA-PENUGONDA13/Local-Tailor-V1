import { useProduct } from "../../context";
import { ProductCard } from "../../components/index";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-body flex-dir-col">
      <button
        className="btn filters-btn primary-btn"
        onClick={() => openFilters()}
      >
        filters
      </button>
      <h2 className="products-header">Showing All Products</h2>
      <div className="card-container">
        {products &&
          products.map((product) => {
            return <ProductCard productDetails={product} />;
          })}
        {products.length === 0 && <p>Products Not Found</p>}
      </div>
    </div>
  );
};

export { ProductList };
