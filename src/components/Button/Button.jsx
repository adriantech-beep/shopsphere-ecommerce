import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button className={styles.shopAll} onClick={onClick}>
      <span className={styles.circle} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow} `}></span>
      </span>
      <span className={styles.buttonText}>{children}</span>
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Button;
