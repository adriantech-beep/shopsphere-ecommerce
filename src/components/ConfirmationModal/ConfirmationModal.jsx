import styles from "./ConfirmationModal.module.css";
import PropTypes from "prop-types";

function ConfirmationModal({ onCloseModal }) {
  return (
    <div className={styles.card}>
      <button className={styles.dismiss} type="button" onClick={onCloseModal}>
        ×
      </button>
      <div className={styles.header}>
        <div className={styles.divImageV}>
          <div className={styles.image}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M20 7L9.00004 18L3.99994 13"
                  stroke="#000000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.title}>Order validated</span>
          <p className={styles.message}>
            Thank you for your purchase. Your package will be delivered within 2
            days of your purchase
          </p>
        </div>
      </div>
    </div>
  );
}

ConfirmationModal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default ConfirmationModal;
