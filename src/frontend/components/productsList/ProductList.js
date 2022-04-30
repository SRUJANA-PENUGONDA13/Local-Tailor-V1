import { useProduct } from "../../context";
import { ProductCard } from "../../components/index";
import "./ProductList.css";

const ProductList = ({ products, page }) => {
  const [{ isLoading }, productDispatch] = useProduct();
  return (
    <div className="card-container">
      {products &&
        products.map((product) => {
          return <ProductCard productDetails={product} page={page} />;
        })}
      {!isLoading && products.length === 0 && (
        <p className="no-products">No products</p>
      )}
      {isLoading && products.length === 0 && (
        <p className="no-products">Loading products</p>
      )}
    </div>
  );
};

export { ProductList };
