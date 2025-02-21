import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import styles from "./ErrorMessage.module.css";
import PropTypes from "prop-types";

function ErrorMessage({ children }) {
  const { error } = useProducts();
  return (
    <div className={styles.errorMessageWrapper}>
      <h1>Something went wrong</h1>
      <p>Please try again later</p>
      <p>{error}</p>
      {children}
    </div>
  );
}
ErrorMessage.propTypes = {
  children: PropTypes.node,
};

export default ErrorMessage;
