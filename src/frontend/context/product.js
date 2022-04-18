import { useContext, useReducer, createContext, useEffect } from "react";
import { productInitialState, productReducer } from "../reducers/index";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );

  return (
    <ProductContext.Provider value={[productState, productDispatch]}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
