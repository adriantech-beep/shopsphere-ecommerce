import { useContext, createContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import {
  fetchProducts as fetchProductsFunc,
  handleSelectItem as handleSelectItemFunc,
  handleClose as handleCloseFunc,
  handleCloseCart as handleCloseCartFunc,
  handleViewCart as handleViewCartFunc,
  handleSearch as handleSearchFunc,
  handleViewNavMobile as handleViewNavMobileFunc,
  handleCloseNavMobile as handleCloseNavMobileFunc,
} from "./ProductsUtils";
import PropTypes from "prop-types";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const ProductsContext = createContext();
const initialState = {
  products: [],
  sortedProducts: [],
  isLoading: false,
  error: null,
  selectedItem: [],
  cartItems: [],
  cartQuantity: 0,
  totalAmount: 0,
  isOpen: false,
  openViewCart: false,
  isAddedtoCart: false,
  isAlreadyAdded: false,
  shippingAmount: 0,
  totalCheckoutAmount: 0,
  currentItem: {},
  searchQuery: "",
  searchIsOpen: false,
  mobileNavIsOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "products/loaded":
      return {
        ...state,
        products: action.payload,
        sortedProducts: action.payload,
        isLoading: false,
      };
    case "error":
      return { ...state, error: action.payload, isLoading: false };
    case "products/sorted":
      return { ...state, sortedProducts: action.payload };
    case "cart/update":
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cartQuantity: action.payload.cartQuantity,
        isAddedtoCart: action.payload.isAddedtoCart,
        isAlreadyAdded: action.payload.isAlreadyAdded,
      };
    case "select/item":
      return { ...state, selectedItem: action.payload, isOpen: true };
    case "modal/close":
      return {
        ...state,
        isOpen: false,
        isAddedtoCart: false,
        isAlreadyAdded: false,
      };
    case "cart/view":
      return { ...state, openViewCart: true };
    case "cart/close":
      return { ...state, openViewCart: false };
    case "cart/remove":
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cartQuantity: action.payload.cartQuantity,
      };
    case "amount/update":
      return {
        ...state,
        totalAmount: action.payload.totalAmount,
        shippingAmount: action.payload.shippingAmount,
        totalCheckoutAmount: action.payload.totalCheckoutAmount,
      };
    case "item/loaded":
      return { ...state, currentItem: action.payload };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "search":
      return {
        ...state,
        searchQuery: action.payload,
        searchIsOpen: action.payload.length > 0,
      };
    case "mobile-nav/open":
      return {
        ...state,
        mobileNavIsOpen: true,
      };
    case "mobile-nav/close":
      return {
        ...state,
        mobileNavIsOpen: false,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function ProductsProvider({ children }) {
  /*use localstorage*/
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);

  /*initialization*/
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    cartItems: cartItems,
    cartQuantity: cartItems.reduce((total, item) => total + item.quantity, 0),
  });

  /*initial fething of data*/
  useEffect(() => {
    fetchProductsFunc(dispatch);
  }, []);

  /*i just refered this with the help of v0.dev
  i'm still trying to figure out how to refactor it*/
  useEffect(() => {
    if (state.selectedItem) {
      console.log("Selected item changed:", state.selectedItem);
    }
  }, [state.selectedItem]);

  /* update cart function */
  const updateCart = (
    productId,
    quantity,
    brand,
    price,
    image,
    color,
    discount,
    model
  ) => {
    const existingItem = state.cartItems.find(
      (item) => item.productId === productId
    );
    let newCartItems, newCartQuantity, newIsAddedtoCart, newIsAlreadyAdded;

    if (existingItem) {
      newIsAlreadyAdded = true;
      newIsAddedtoCart = false;
      newCartItems = state.cartItems;
      newCartQuantity = state.cartQuantity;
    } else {
      newCartItems = [
        ...state.cartItems,
        {
          productId,
          quantity,
          brand,
          image,
          price,
          color,
          discount,
          model,
          discountedPrice: price - discount,
        },
      ];
      newCartQuantity = state.cartQuantity + quantity;
      newIsAddedtoCart = true;
      newIsAlreadyAdded = false;
    }

    dispatch({
      type: "cart/update",
      payload: {
        cartItems: newCartItems,
        cartQuantity: newCartQuantity,
        isAddedtoCart: newIsAddedtoCart,
        isAlreadyAdded: newIsAlreadyAdded,
      },
    });
    setCartItems(newCartItems);
  };

  useEffect(() => {
    const totalAmount = Object.values(state.cartItems).reduce((acc, item) => {
      const discount = item.discount ?? 0;
      return acc + Number(item.price) - Number(discount);
    }, 0);
    const shippingAmount = totalAmount * 0.02;
    const totalCheckoutAmount = totalAmount + shippingAmount;

    dispatch({
      type: "amount/update",
      payload: {
        totalAmount: Number(totalAmount),
        shippingAmount,
        totalCheckoutAmount,
      },
    });
  }, [state.cartItems]);

  useEffect(() => {
    dispatch({
      type: "cart/update",
      payload: {
        cartItems: cartItems,
        cartQuantity: cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        isAddedtoCart: true,
        isAlreadyAdded: false,
      },
    });
  }, [cartItems]);

  function sortByCategory(category) {
    if (category === "all") {
      dispatch({ type: "products/sorted", payload: state.products });
    } else {
      const filtered = state.products.filter(
        (product) => product.category === category
      );
      dispatch({ type: "products/sorted", payload: filtered });
    }
  }
  /* This is for the searchbar for searching items */
  const searchedItem = state.searchQuery
    ? state.products.filter(
        (item) =>
          item.brand.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          item.model.toLowerCase().includes(state.searchQuery.toLowerCase())
      )
    : state.products;

  const handleSearch = (query) => handleSearchFunc(query, dispatch);
  const handleSelectItem = (item) => handleSelectItemFunc(item, dispatch);
  const handleClose = () => handleCloseFunc(dispatch);
  const handleCloseCart = () => handleCloseCartFunc(dispatch);
  const handleViewCart = () => handleViewCartFunc(dispatch);
  const handleViewNavMobile = () => handleViewNavMobileFunc(dispatch);
  const handleCloseNavMobile = () => handleCloseNavMobileFunc(dispatch);

  /*function for removing an item on the cart */
  function handleRemoveItem(productId) {
    const newCartItems = state.cartItems.filter(
      (item) => item.productId !== productId
    );
    const removedItem = state.cartItems.find(
      (item) => item.productId === productId
    );
    const newCartQuantity = state.cartQuantity - removedItem.quantity;

    dispatch({
      type: "cart/remove",
      payload: {
        cartItems: newCartItems,
        cartQuantity: newCartQuantity,
      },
    });
    setCartItems(newCartItems);
  }

  const values = {
    ...state,
    products: state.sortedProducts,
    updateCart,
    sortByCategory,
    handleSelectItem,
    handleClose,
    handleViewCart,
    handleCloseCart,
    handleRemoveItem,
    error: state.error,
    searchQuery: state.searchQuery,
    searchedItem,
    handleSearch,
    searchIsOpen: state.searchIsOpen,
    mobileNavIsOpen: state.mobileNavIsOpen,
    handleViewNavMobile,
    handleCloseNavMobile,
  };

  return (
    <ProductsContext.Provider value={values}>
      {state.error && <ErrorMessage />}
      {children}
    </ProductsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useProducts() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("Products context was used outside the Products Provider");
  return context;
}

export { ProductsProvider, useProducts };
