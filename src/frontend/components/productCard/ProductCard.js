import "./ProductCard.css";
const ProductCard = ({ productDetails }) => {
  return (
    <div className="card badge-card">
      <div className="img-content">
        <button className="heart-btn">
          <i className="fas fa-heart fa-2x"></i>
        </button>
        <img
          className="item-img"
          src={productDetails.image}
          alt="Card Header Image"
        />
      </div>
      <div className="card-content flex-dir-col">
        <h2 className="item-name">{productDetails.title}</h2>
        <div className="item-details flex-dir-col">
          <div className="prices flex-dir-row">
            <span className="price">
              <b>Rs. {productDetails.discountPrice}</b>
            </span>
            <span className="initial-price">
              Rs. {productDetails.origincalPrice}
            </span>
          </div>
          <div className="discount-rating flex-dir-row">
            <span className="discount">
              <b>Save {productDetails.savePercent} %</b>
            </span>
            <span className="rating flex-dir-row">
              <b>{productDetails.rating}</b>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>
      </div>

      <button className="btn primary-btn add-to-cart">Add to cart</button>
    </div>
  );
};

export { ProductCard };
