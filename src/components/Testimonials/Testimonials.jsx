import { useEffect, useCallback } from "react";
import { useTestimonials } from "../../contexts/TestimonialsContext";
import styles from "./Testimonials.module.css";

/*Additional resources for this component is on the context api on Context folder of ProductsContext*/
function Testimonials() {
  const { testimonials, sliderRef, currSlide, dispatch, maxSlide } =
    useTestimonials();

  const goToSlide = useCallback(
    (slide) => {
      if (sliderRef.current) {
        const slides = sliderRef.current.querySelectorAll(`.${styles.slide}`);
        slides.forEach(
          (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
      }
      dispatch({ type: "slide", payload: slide });
    },
    [sliderRef, dispatch]
  );
  const prevSlide = useCallback(() => {
    const newSlide = currSlide === 0 ? maxSlide - 1 : currSlide - 1;
    goToSlide(newSlide);
  }, [currSlide, maxSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    const newSlide = currSlide === maxSlide - 1 ? 0 : currSlide + 1;
    goToSlide(newSlide);
  }, [currSlide, maxSlide, goToSlide]);

  useEffect(() => {
    goToSlide(currSlide);
  }, [currSlide, goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [nextSlide, prevSlide]);

  return (
    <div className={styles.testimonialsWrapper}>
      <div className={styles.testimonialsTitle}>
        <h1>Customers Reviews</h1>
        <p>
          Explore the experience of our clients with our products, showing our
          dedication to delivering exceptional results
        </p>
      </div>
      <div className={styles.slider} ref={sliderRef}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.slide} key={index}>
            <div className={styles.testimonial}>
              <div className={styles.profile}>
                <img
                  src={testimonial.imgSrc || "/placeholder.svg"}
                  alt="A photo of a customer from around the globe"
                />
                <div className={styles.profileName}>
                  <h2>{testimonial.name}</h2>
                  <p>{testimonial.email}</p>
                </div>
              </div>
              <div className={styles.image}>
                <img
                  src={testimonial.productImg}
                  alt="a product image example"
                />
              </div>
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnLeft}`}
          onClick={prevSlide}
        >
          &larr;
        </button>
        <button
          className={`${styles.sliderBtn} ${styles.sliderBtnRight}`}
          onClick={nextSlide}
        >
          &rarr;
        </button>
        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.dotsDot} ${
                index === currSlide ? styles.dotsDotActive : ""
              }`}
              onClick={() => dispatchEvent({ type: "slide", payload: index })}
            >
              <p className={styles.text}>scroll</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
