import "./CartProductList.css";
import { CartProductCard } from "../../components";

const CartProductList = ({ products }) => {
  return (
    <div class="cart-card-container">
      {products &&
        products.map((product) => {
          return <CartProductCard productDetails={product} />;
        })}
      {products.length === 0 && (
        <p className="no-products">No products in cart</p>
      )}
    </div>
  );
};

export { CartProductList };
