import "./CartPrice.css";
import { useProduct } from "../../context/index";

const CartPrice = ({ products }) => {
  const [{ billDetails }, productDispatch] = useProduct();
  const cartLength = "Price (" + products.length + " items)";
  let savings = 0,
    deliveryCharges = 0,
    cartTotal = 0;
  if (products.length > 0) {
    deliveryCharges = 200;
    savings = billDetails.totalPrice - billDetails.totalDiscount;
    cartTotal = billDetails.totalPrice - savings + deliveryCharges;
  }

  return (
    <aside class="card cart-price-details">
      <h3>Price Details</h3>
      <div class="line-divider"></div>
      <div class="price-details-item flex-dir-row">
        <p>{cartLength}</p>
        <p>Rs {billDetails.totalPrice}</p>
      </div>
      <div class="price-details-item flex-dir-row">
        <p>Discount</p>
        <p>- Rs {savings}</p>
      </div>
      <div class="price-details-item flex-dir-row">
        <p>Delivery Charges</p>
        <p>Rs {deliveryCharges}</p>
      </div>
      <div class="line-divider"></div>
      <div class="price-details-item flex-dir-row">
        <h4>Total Amount</h4>
        <h4>Rs {cartTotal}</h4>
      </div>
      <div class="line-divider"></div>
      <h5>Your Savings on the order: Rs {savings}</h5>
      <div class="line-divider"></div>
      <button class="btn primary-btn">Place Order</button>
    </aside>
  );
};

export { CartPrice };
