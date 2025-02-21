import { Link } from "react-router-dom";
import image from "../../assets/avatar/trolley.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={image} alt="A cart image sample" />
      <p className={styles.logoTitle}>Shopsphere</p>
    </Link>
  );
};

export default Logo;
