import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import FallBackImage from "../../assets/backgroundimages/fallBackImage.jpg";
import PropTypes from "prop-types";
import styles from "./ProductItem.module.css";
import Loader from "../Loader/Loader";

function ProductItem({ product }) {
  const { handleSelectItem, isLoading } = useProducts();

  if (isLoading) return <Loader />;

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = FallBackImage;
  };

  return (
    <li
      className={styles.productList}
      onClick={() => handleSelectItem(product)}
    >
      <div className={styles.productImage}>
        <img
          src={product.image || FallBackImage}
          alt={product.model || "Shopsphere product image"}
          onError={handleImageError}
        />
      </div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.titleAndPrice}>
          <h1>{product.model}</h1>
          <h2>${parseFloat(product.price).toFixed(2)}</h2>
        </div>
        <div className={styles.discount}>
          {product.discount && (
            <p>discount ${parseFloat(product.discount).toFixed(2)}</p>
          )}
        </div>
      </div>
    </li>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    model: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    discount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default ProductItem;
