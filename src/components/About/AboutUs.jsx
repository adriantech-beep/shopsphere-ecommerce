import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>About Us.</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
          dolores soluta quam placeat suscipit ab tenetur odio, mollitia ex,
          officiis doloremque vel perspiciatis, aliquam maiores autem qui?
          Perferendis, nobis nam.
        </p>
      </div>
      <section className={styles.dividerSection}>
        <div className={styles.divider}>
          <i className="fa-regular fa-sun"></i>
          <h2>Energy Saving</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ut magni. Rem laudantium debitis quibusdam possimus eum sequi iusto,
            obcaecati expedita illum rerum voluptas commodi alias neque
            asperiores nihil saepe nesciunt. Iste saepe tenetur sunt?
          </p>
        </div>
        <div className={styles.divider}>
          <i className="fa-solid fa-battery-full"></i>
          <h2>Smart technology</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ut magni. Rem laudantium debitis quibusdam possimus eum sequi iusto,
            obcaecati expedita illum rerum voluptas commodi alias neque
            asperiores nihil saepe nesciunt. Iste saepe tenetur sunt?
          </p>
        </div>
        <div className={styles.divider}>
          <i className="fa-solid fa-leaf"></i>
          <h2>Ecosystem</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ut magni. Rem laudantium debitis quibusdam possimus eum sequi iusto,
            obcaecati expedita illum rerum voluptas commodi alias neque
            asperiores nihil saepe nesciunt. Iste saepe tenetur sunt?
          </p>
        </div>
        <div className={styles.divider}>
          <i className="fa-solid fa-headset"></i>
          <h2>Customer Support</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            ut magni. Rem laudantium debitis quibusdam possimus eum sequi iusto,
            obcaecati expedita illum rerum voluptas commodi alias neque
            asperiores nihil saepe nesciunt. Iste saepe tenetur sunt?
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
