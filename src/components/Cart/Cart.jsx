import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cartQuantity, handleViewCart } = useProducts();
  return (
    <div className={styles.cart} onClick={handleViewCart}>
      <i className="fa-solid fa-cart-arrow-down"></i>
      <p>Cart</p>
      <p className={styles.cartQuantity}>{cartQuantity}</p>
    </div>
  );
};

export default Cart;
