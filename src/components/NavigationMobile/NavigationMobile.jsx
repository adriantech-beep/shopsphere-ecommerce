import { NavLink } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext/ProductsContext";

import PropTypes from "prop-types";
import styles from "./NavigationMobile.module.css";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";

function NavigationMobile({ scrollToAbout, scrollToTestimonial }) {
  const { handleCloseNavMobile } = useProducts();
  return (
    <nav className={`${styles.navMobileWrapper} ${styles.show}`}>
      <i
        className="fa-regular fa-circle-xmark"
        onClick={() => handleCloseNavMobile()}
      ></i>
      <ul className={styles.navMobileItem}>
        <li>
          <NavLink to="/" className={styles.navMobileItems}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/deals" className={styles.navMobileItems}>
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink to="/whatsnew" className={styles.navMobileItems}>
            Whats New
          </NavLink>
        </li>
        <li>
          <NavLink to="/delivery" className={styles.navMobileItems}>
            Delivery
          </NavLink>
        </li>
        <SearchBar />
        <Cart />
        <li onClick={scrollToTestimonial} className={styles.navMobileItems}>
          Testimonials
        </li>
        <li onClick={scrollToAbout} className={styles.navMobileItems}>
          About Us
        </li>
      </ul>
    </nav>
  );
}
NavigationMobile.propTypes = {
  scrollToAbout: PropTypes.func.isRequired,
  scrollToTestimonial: PropTypes.func.isRequired,
};

export default NavigationMobile;
