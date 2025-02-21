import { createContext, useContext, useRef } from "react";
import PropTypes from "prop-types";

const ScrollContext = createContext();

/*Context api for Testimonial component*/

function ScrollProvider({ children }) {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const navRef = useRef(null);
  const testimonialRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNavigation = () => {
    navRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTestimonial = () => {
    testimonialRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <ScrollContext.Provider
      value={{
        aboutRef,
        productsRef,
        navRef,
        testimonialRef,
        scrollToAbout,
        scrollToProducts,
        scrollToNavigation,
        scrollToTestimonial,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
function useScroll() {
  const context = useContext(ScrollContext);
  if (context === undefined)
    throw new Error(
      "Testimonials context was used outside the Testimonials Provider"
    );
  return context;
}

export { ScrollProvider, useScroll };
