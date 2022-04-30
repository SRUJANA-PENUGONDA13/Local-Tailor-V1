const updateBillDetails = (products) => {
  let { totalPrice, totalDiscountPrice } = products.reduce(
    ({ totalPrice, totalDiscountPrice }, product) => {
      totalPrice = totalPrice + product.origincalPrice * product.qty;

      totalDiscountPrice =
        totalDiscountPrice + product.discountPrice * product.qty;

      return { totalPrice, totalDiscountPrice };
    },
    { totalPrice: 0, totalDiscountPrice: 0 }
  );

  return { totalPrice, totalDiscountPrice };
};

export { updateBillDetails };
