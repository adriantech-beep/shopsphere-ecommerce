import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import Loader from "../Loader/Loader";

import PreviewItem from "../PreviewItem/PreviewItem";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./Products.module.css";

function Products() {
  const { products, isLoading, isOpen } = useProducts();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <h1 className={styles.productsTitle}>Our Products</h1>
      <ul className={styles.productsWrapper}>
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </ul>
      {isOpen && <PreviewItem />}
    </>
  );
}

export default Products;
