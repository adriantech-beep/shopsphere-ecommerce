export const BASE_URL = "https://fakestoreapi.in/api/products?limit=150";

export const fetchProducts = async (dispatch) => {
  dispatch({ type: "loading" });
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    dispatch({ type: "products/loaded", payload: data.products });
  } catch (error) {
    dispatch({ type: "error", payload: error.message });
  }
};

export const handleSearch = (query, dispatch) => {
  dispatch({ type: "search", payload: query });
};

export const handleSelectItem = (item, dispatch) => {
  dispatch({ type: "select/item", payload: item });
  dispatch({ type: "cart/close" });
};
export const handleClose = (dispatch) => {
  dispatch({ type: "modal/close" });
};

export const handleCloseCart = (dispatch) => {
  dispatch({ type: "cart/close" });
};

export const handleViewCart = (dispatch) => {
  dispatch({ type: "cart/view" });
  dispatch({ type: "modal/close" });
};
export const handleViewNavMobile = (dispatch) => {
  dispatch({ type: "mobile-nav/open" });
};

export const handleCloseNavMobile = (dispatch) => {
  dispatch({ type: "mobile-nav/close" });
};
