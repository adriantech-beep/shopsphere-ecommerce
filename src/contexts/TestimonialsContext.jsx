import { createContext, useContext, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import Avatar1 from "../assets/avatar/user-1.jpg";
import Avatar2 from "../assets/avatar/user-2.jpg";
import Avatar3 from "../assets/avatar/user-3.jpg";

import Product1 from "../assets/testimonials/acer.jpg";
import Product2 from "../assets/testimonials/jbl.jpg";
import Product3 from "../assets/testimonials/s22.jpg";

const testimonials = [
  {
    name: "Aarav Lynn",
    header: "Best financial decision ever!",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis..",
    location: "San Francisco, USA",
    email: "@Aarav_Lynn",
    imgSrc: Avatar1,
    productImg: Product1,
  },
  {
    name: "Jignesh Patel",
    header: "Best financial decision ever!",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. ",
    location: "San Francisco, USA",
    email: "@Jignesh_Patel",
    imgSrc: Avatar2,
    productImg: Product2,
  },
  {
    name: "Sanjay Mehta",
    header: "Best financial decision ever!",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis.",
    email: "@Sanjay_Mehta",
    location: "San Francisco, USA",
    imgSrc: Avatar3,
    productImg: Product3,
  },
];

const initialState = {
  testimonials,
  maxSlide: 0,
  currSlide: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "testimonials/loaded":
      return { ...state, testimonials: action.payload };
    case "slide":
      return { ...state, currSlide: action.payload };
    default:
      return state;
  }
}
const TestimonialsContext = createContext();

function TestimonialsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const sliderRef = useRef(null);

  const values = {
    ...state,
    maxSlide: state.testimonials.length,
    sliderRef,
    dispatch,
    currSlide: state.currSlide,
  };

  return (
    <TestimonialsContext.Provider value={values}>
      {children}
    </TestimonialsContext.Provider>
  );
}

TestimonialsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useTestimonials() {
  const context = useContext(TestimonialsContext);
  if (context === undefined)
    throw new Error(
      "Testimonials context was used outside the Testimonials Provider"
    );
  return context;
}

export { TestimonialsProvider, useTestimonials };
