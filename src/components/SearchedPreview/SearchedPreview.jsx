import { useProducts } from "../../contexts/ProductsContext/ProductsContext";

import styles from "./SearchedPreview.module.css";

function SearchedPreview() {
  const { searchedItem } = useProducts();
  return (
    <div className={styles.wrapper}>
      <h1>
        Showing <span>{searchedItem.length}</span> results
      </h1>
      {searchedItem.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.image}>
            <img src={item.image} alt={item.model} />
          </div>
          <div className={styles.itemDetails}>
            <h2>{item.brand}</h2>
            <p>{item.model}</p>
            <p className={styles.itemPrice}>${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchedPreview;
