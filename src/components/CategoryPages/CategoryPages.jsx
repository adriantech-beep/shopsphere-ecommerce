import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import styles from "./CategoryPages.module.css";
import CategoryTitle from "../CategoryTitle/CategoryTitle";

function CategoryPages() {
  const { sortByCategory } = useProducts();
  return (
    <>
      <CategoryTitle />
      <div className={styles.categoryPages}>
        <div
          onClick={() => sortByCategory("mobile")}
          className={`${styles.phonesLink} ${styles.link}`}
        >
          <h1 className={`${styles.categoryTitle} ${styles.phones}`}>Phones</h1>
        </div>
        <div
          onClick={() => sortByCategory("laptop")}
          className={`${styles.laptopsLink} ${styles.link}`}
        >
          <h1 className={`${styles.categoryTitle} ${styles.laptops}`}>
            Laptops
          </h1>
        </div>
        <div
          onClick={() => sortByCategory("audio")}
          className={`${styles.headsetLink} ${styles.link}`}
        >
          <h1 className={`${styles.categoryTitle} ${styles.headset}`}>
            Headset
          </h1>
        </div>
        <div
          onClick={() => sortByCategory("all")}
          className={`${styles.controllerLink} ${styles.link}`}
        >
          <h1 className={`${styles.categoryTitle} ${styles.controller}`}>
            All
          </h1>
        </div>
      </div>
    </>
  );
}

export default CategoryPages;
