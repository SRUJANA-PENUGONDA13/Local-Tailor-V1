import { useProduct } from "../../context";
import { ProductCard } from "../../components/index";
import "./ProductList.css";

const ProductList = ({ products, page }) => {
  return (
    <div className="card-container">
      {products &&
        products.map((product) => {
          return <ProductCard productDetails={product} page={page} />;
        })}
      {products.length === 0 && <p className="no-products">No products</p>}
    </div>
  );
};

export { ProductList };
