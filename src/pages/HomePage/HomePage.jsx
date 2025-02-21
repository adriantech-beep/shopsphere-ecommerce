import { useProducts } from "../../contexts/ProductsContext/ProductsContext";
import { useScroll } from "../../contexts/ScrollContext";
import { TestimonialsProvider } from "../../contexts/TestimonialsContext";

import styles from "./HomePage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import CategoryPages from "../../components/CategoryPages/CategoryPages";
import Products from "../../components/Products/Products";
import Button from "../../components/Button/Button";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import Article from "../../components/Article/Article";
import Footer from "../../components/Footer/Footer";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";
import Testimonials from "../../components/Testimonials/Testimonials";
import AboutUs from "../../components/About/AboutUs";
import SearchedPreview from "../../components/SearchedPreview/SearchedPreview";

function HomePage() {
  const { openViewCart, searchIsOpen } = useProducts();
  const {
    aboutRef,
    productsRef,
    navRef,
    testimonialRef,
    scrollToAbout,
    scrollToProducts,
    scrollToNavigation,
    scrollToTestimonial,
  } = useScroll();

  return (
    <>
      <header className={styles.header} ref={navRef}>
        <Navigation
          scrollToAbout={scrollToAbout}
          scrollToTestimonial={scrollToTestimonial}
        />
        <title className={styles.title}>
          <h1>Your One-Stop Electronic Market</h1>
          <p>
            Browse our vast collection of products, discover new favorites and
            enjoy a seamless shopping experience.
          </p>
          <Button onClick={scrollToProducts}>Shop Now</Button>
        </title>
      </header>
      <CategoryPages />
      {searchIsOpen && <SearchedPreview />}
      <div ref={productsRef}>
        <Products />
      </div>
      {openViewCart && <OrderSummary />}
      <div>
        <div ref={testimonialRef}>
          <TestimonialsProvider>
            <Testimonials />
          </TestimonialsProvider>
        </div>
      </div>

      <Article />
      <div ref={aboutRef}>
        <AboutUs />
      </div>
      <BackToTopButton onClick={scrollToNavigation} />
      <Footer />
    </>
  );
}

export default HomePage;
