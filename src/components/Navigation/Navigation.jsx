import { NavLink } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext/ProductsContext";

import styles from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import PropTypes from "prop-types";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Navigation = ({ scrollToAbout, scrollToTestimonial }) => {
  const { mobileNavIsOpen, handleViewNavMobile } = useProducts();
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={`${styles.navItem} ${styles.desktopHidden}`}>
          <li>
            <NavLink to="/" className={styles.navItems}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/deals" className={styles.navItems}>
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink to="/whatsnew" className={styles.navItems}>
              Whats New
            </NavLink>
          </li>
          <li>
            <NavLink to="/delivery" className={styles.navItems}>
              Delivery
            </NavLink>
          </li>
          <SearchBar />
          <Cart />
          <li onClick={scrollToTestimonial} className={styles.navItems}>
            Testimonials
          </li>
          <li onClick={scrollToAbout} className={styles.navItems}>
            About Us
          </li>
        </ul>

        <i
          className="fa-solid fa-bars"
          onClick={() => handleViewNavMobile()}
        ></i>
      </nav>
      {mobileNavIsOpen && (
        <NavigationMobile
          scrollToAbout={scrollToAbout}
          scrollToTestimonial={scrollToTestimonial}
        />
      )}
    </div>
  );
};
Navigation.propTypes = {
  scrollToAbout: PropTypes.func.isRequired,
  scrollToTestimonial: PropTypes.func.isRequired,
};
export default Navigation;
