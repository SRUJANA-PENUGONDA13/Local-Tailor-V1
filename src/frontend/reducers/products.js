const productInitialState = {
  products: [],
  filters: {
    sortBy: "",
    categories: {
      men: false,
      women: false,
      children: false,
    },
    tailors: {
      lakshmi: false,
      rachana: false,
      raju: false,
    },
    price: 1500,
    rating: 0,
  },
};

const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOAD_ALL_PRODUCTS":
      return { ...state, products: payload };
    case "INCLUDE_PRICE":
      return { ...state, filters: { ...state.filters, price: payload } };
    case "INCLUDE_TAILOR":
      return {
        ...state,
        filters: {
          ...state.filters,
          tailors: {
            ...state.filters.tailors,
            [payload]: !state.filters.tailors[payload],
          },
        },
      };
    case "INCLUDE_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: {
            ...state.filters.categories,
            [payload]: !state.filters.categories[payload],
          },
        },
      };
    case "INCLUDE_RATING":
      return { ...state, filters: { ...state.filters, rating: payload } };
    case "INCLUDE_SORTBY":
      return { ...state, filters: { ...state.filters, sortBy: payload } };
    case "CLEAR_FILTER":
      return { ...state, filters: productInitialState.filters };
    default:
      return state;
  }
};

export { productInitialState, productReducer };
