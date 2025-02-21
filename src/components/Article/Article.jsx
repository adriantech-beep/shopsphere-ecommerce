import styles from "./Article.module.css";

/*images*/
import FaqsImage from "../../assets/backgroundimages/faqs.jpg";
import OnlineImage from "../../assets/backgroundimages/onlinepayment.jpg";
import Homedelivery from "../../assets/backgroundimages/homedelivery.jpg";

function Article() {
  return (
    <div className={styles.articleWrapper}>
      <div className={styles.article}>
        <div className={styles.articleTitle}>
          <h1>Frequently Asked Questions</h1>
          <p>Updates on safe Shopping on our Store</p>
        </div>
        <div className={styles.imageWrapper}>
          <img src={FaqsImage} alt="Image of persons holding gadgets" />
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.articleTitle}>
          <h1>Online Payment Proccess</h1>
          <p>Updates on safe Shopping on our Store</p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={OnlineImage}
            alt="Photo of a random couple near a cellphone"
          />
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.articleTitle}>
          <h1>Home Delivery Options</h1>
          <p>Updates on safe Shopping on our Store</p>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={Homedelivery}
            alt="Photo of a man riding a delivery vehicle"
          />
        </div>
      </div>
    </div>
  );
}

export default Article;
