import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import { useScroll } from "../../contexts/ScrollContext";
import { TestimonialsProvider } from "../../contexts/TestimonialsContext";

import AboutUs from "../../components/About/AboutUs";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import CategoryPages from "../../components/CategoryPages/CategoryPages";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Products from "../../components/Products/Products";
import SearchedPreview from "../../components/SearchedPreview/SearchedPreview";
import Testimonials from "../../components/Testimonials/Testimonials";
import styles from "./Deals.module.css";

function Deals() {
  const { openViewCart, searchIsOpen } = useProducts();
  const {
    navRef,
    aboutRef,
    productsRef,
    testimonialRef,
    scrollToAbout,
    scrollToNavigation,
    scrollToTestimonial,
  } = useScroll();
  return (
    <>
      <div className={styles.dealsWrapper} ref={navRef}>
        <Navigation
          scrollToAbout={scrollToAbout}
          scrollToTestimonial={scrollToTestimonial}
        />
      </div>

      <div ref={aboutRef}>
        <BackToTopButton onClick={scrollToNavigation} />
      </div>
      {searchIsOpen && <SearchedPreview />}

      <CategoryPages />
      <div ref={productsRef}>
        <Products />
      </div>
      {openViewCart && <OrderSummary />}
      <div ref={testimonialRef}>
        <TestimonialsProvider>
          <Testimonials />
        </TestimonialsProvider>
      </div>
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default Deals;
